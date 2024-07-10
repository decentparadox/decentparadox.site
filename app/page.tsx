import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

import Main from './main'
import Hero from '@/components/Home/Hero'
export default async function Page() {
    const sortedPosts = sortPosts(allBlogs)
    const posts = allCoreContent(sortedPosts)
    return <Main />
}
