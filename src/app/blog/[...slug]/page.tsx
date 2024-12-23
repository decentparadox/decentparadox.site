import { components } from 'src/components/MDXComponents'
import siteMetadata from 'src/data/siteMetadata'
import PostBare from 'src/layouts/PostBare'
import PostLayout from 'src/layouts/PostLayout'
import type { Authors, Blog } from 'contentlayer/generated'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import 'src/css/prism.css'
import 'katex/dist/katex.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, coreContent, sortPosts } from 'pliny/utils/contentlayer'

import { ReportView } from './view'
import Navbar from 'src/components/Home/Navbar/Navbar'
import Footer from 'src/components/Home/Footer'
const defaultLayout = 'PostLayout'
const layouts = {
    PostLayout,
    PostBare,
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string[] }
}): Promise<Metadata | undefined> {
    const slug = decodeURI(params.slug.join('/'))
    const post = allBlogs.find((p) => p.slug === slug)
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
    if (!post) {
        return
    }

    const publishedAt = new Date(post.date).toISOString()
    const modifiedAt = new Date(post.lastmod || post.date).toISOString()
    const authors = authorDetails.map((author) => author.name)
    let imageList = [siteMetadata.socialBanner]
    if (post.images) {
        imageList = typeof post.images === 'string' ? [post.images] : post.images
    }
    const ogImages = imageList.map((img) => {
        return {
            url: img.includes('http') ? img : siteMetadata.siteUrl + img,
        }
    })

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            siteName: siteMetadata.title,
            locale: 'en_US',
            type: 'article',
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            url: './',
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            images: imageList,
        },
    }
}

export const generateStaticParams = async () => {
    const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))

    return paths
}

export default async function Page({ params }: { params: { slug: string[] } }) {
    const slug = decodeURI(params.slug.join('/'))
    // Filter out drafts in production
    const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
    if (postIndex === -1) {
        return notFound()
    }

    const prev = sortedCoreContents[postIndex + 1]
    const next = sortedCoreContents[postIndex - 1]
    const post = allBlogs.find((p) => p.slug === slug) as Blog
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
        const authorResults = allAuthors.find((p) => p.slug === author)
        return coreContent(authorResults as Authors)
    })
    const mainContent = coreContent(post)
    const jsonLd = post.structuredData
    jsonLd['author'] = authorDetails.map((author) => {
        return {
            '@type': 'Person',
            name: author.name,
        }
    })

    const Layout = layouts[post.layout || defaultLayout]

    return (
        <div className="font-krypton m-auto w-[calc(100%-64px)] text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar pageTitle="Blog" />
            <ReportView slug={slug} />
            <Layout
                className="font-krypton !text-accent"
                content={mainContent}
                authorDetails={authorDetails}
                toc={post.toc}
                next={next}
                prev={prev}
            >
                <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
            </Layout>
            <Footer />
        </div>
    )
}
