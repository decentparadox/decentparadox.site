import siteMetadata from 'src/data/siteMetadata'
import ListLayout from 'src/layouts/ListLayout'
import { genPageMetadata } from 'src/app/seo'
import tagData from 'src/app/tag-data.json'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import { Metadata } from 'next'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
    const tag = decodeURI(params.tag)
    return genPageMetadata({
        title: tag,
        description: `${siteMetadata.title} ${tag} tagged content`,
        robots: {
            index: false,
            follow: false,
        },
        alternates: {
            canonical: './',
            types: {
                'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
            },
        },
    })
}

export const generateStaticParams = async () => {
    const tagCounts = tagData as Record<string, number>
    const tagKeys = Object.keys(tagCounts)
    const paths = tagKeys.map((tag) => ({
        tag: tag,
    }))
    return paths
}

export default function TagPage({ params }: { params: { tag: string } }) {
    const tag = decodeURI(params.tag)
    // Capitalize first letter and convert space to dash
    const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
    const filteredPosts = allCoreContent(
        sortPosts(
            allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag))
        )
    )
    return <ListLayout posts={filteredPosts} title={title} />
}
