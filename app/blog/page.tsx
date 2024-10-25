import ListLayout from '@/layouts/ListLayout'
import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Navbar from '@/components/Home/Navbar/Navbar'
import Footer from '@/components/Home/Footer'
const POSTS_PER_PAGE = 100

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
    const posts = allCoreContent(sortPosts(allBlogs.filter((p) => !p.hidden)))
    const pageNumber = 1
    const initialDisplayPosts = posts.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return (
        <div className="font-krypton m-auto w-[calc(100%-64px)] divide-accent-foreground py-4 text-foreground dark:divide-accent">
            <Navbar pageTitle="Blog" />
            <ListLayout
                posts={posts}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
                title="All Posts"
            />
            <Footer />
        </div>
    )
}
