/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
    totalPages: number
    currentPage: number
}
interface ListLayoutProps {
    posts: CoreContent<Blog>[]
    title: string
    initialDisplayPosts?: CoreContent<Blog>[]
    pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
    const pathname = usePathname()
    const basePath = pathname.split('/')[1]
    const prevPage = currentPage - 1 > 0
    const nextPage = currentPage + 1 <= totalPages

    return (
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <nav className="flex justify-between">
                {!prevPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
                        Previous
                    </button>
                )}
                {prevPage && (
                    <Link
                        href={
                            currentPage - 1 === 1
                                ? `/${basePath}/`
                                : `/${basePath}/page/${currentPage - 1}`
                        }
                        rel="prev"
                    >
                        Previous
                    </Link>
                )}
                <span>
                    {currentPage} of {totalPages}
                </span>
                {!nextPage && (
                    <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
                        Next
                    </button>
                )}
                {nextPage && (
                    <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
                        Next
                    </Link>
                )}
            </nav>
        </div>
    )
}

export default function ListLayoutWithTags({
    posts,
    title,
    initialDisplayPosts = [],
    pagination,
}: ListLayoutProps) {
    const pathname = usePathname()
    const tagCounts = tagData as Record<string, number>
    const tagKeys = Object.keys(tagCounts)
    const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

    const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

    return (
        <>
            <div className="font-krypton w-full">
                <div className="pb-6 pt-6"></div>
                <h1 className="text-[16px] text-foreground">{`(All Posts)`}</h1>
                <div className="flex sm:space-x-24">
                    <div>
                        <ul>
                            {displayPosts.map((post) => {
                                const { path, date, title, summary, tags } = post
                                return (
                                    <li key={path} className="py-2">
                                        <article className="flex w-full flex-col space-y-2 border-t border-foreground py-4 xl:space-y-0">
                                            <div className="flex flex-col space-y-3 md:flex-row">
                                                <div className="flex flex-1 flex-col">
                                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={`/${path}`}
                                                            className="text-[16px] uppercase text-gray-900 dark:text-foreground"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <dl>
                                                        <dt className="sr-only">Published on</dt>
                                                        <dd className="text-base font-medium leading-6 text-gray-500 opacity-65 dark:text-foreground">
                                                            <time dateTime={date}>
                                                                {formatDate(
                                                                    date,
                                                                    siteMetadata.locale
                                                                )}
                                                            </time>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="prose max-w-none flex-1 text-ellipsis uppercase text-foreground">
                                                    <p>{summary}</p>
                                                    <div className="flex flex-wrap gap-4 text-foreground opacity-65">
                                                        {tags?.map((tag) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                )
                            })}
                        </ul>
                        {pagination && pagination.totalPages > 1 && (
                            <Pagination
                                currentPage={pagination.currentPage}
                                totalPages={pagination.totalPages}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
