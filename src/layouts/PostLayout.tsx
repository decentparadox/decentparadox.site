'use client'

import Image from 'src/components/Image.tsx'
import Link from 'src/components/Link.tsx'
import PageTitle from 'src/components/PageTitle.tsx'
import ScrollTopAndComment from 'src/components/ScrollTopAndComment.tsx'
import TOCInline from 'src/components/TOCInline.tsx'
import Tag from 'src/components/Tag.tsx'
import { Skeleton } from 'src/components/shadcn/skeleton.tsx'
import siteMetadata from '../data/siteMetadata'
import type { Authors, Blog } from 'contentlayer/generated'
import { Toc } from 'pliny/mdx-plugins'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import { ReactNode } from 'react'

interface LayoutProps {
    content: CoreContent<Blog>
    authorDetails: CoreContent<Authors>[]
    children: ReactNode
    toc: Toc
    next?: { path: string; title: string }
    prev?: { path: string; title: string }
}

export default function PostLayout({
    content,
    authorDetails,
    toc,
    next,
    prev,
    children,
}: LayoutProps) {
    const { path, slug, tags, date, title, thumbnail } = content
    const displayThumbnail = thumbnail || '/static/images/twitter-card.png'

    return (
        <>
            <ScrollTopAndComment />
            <article>
                <div>
                    <header>
                        <div className="font-krypton space-y-1 border-b border-muted-foreground pb-10 text-center text-accent dark:border-muted">
                            {/* <div className="w-full">
                                <div className="relative -mx-6 mt-6 md:-mx-8">
                                    <div className="relative aspect-[1.91/1] w-full rounded-md">
                                        <Image
                                            src={displayThumbnail}
                                            alt={title}
                                            width={784}
                                            height={410}
                                            className="rounded-md"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div> */}
                            <dl className="relative pt-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="flex items-center justify-center text-base font-medium leading-6 text-muted-foreground">
                                        <time dateTime={date}>
                                            {formatDate(date, siteMetadata.locale)}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <PageTitle>{title}</PageTitle>
                            </div>
                            {tags && (
                                <div className="py-2">
                                    <div className="align-center flex flex-wrap justify-center space-x-3">
                                        {tags.map((tag) => (
                                            <Tag key={tag} text={tag} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <dl className="pt-6">
                                <dt className="sr-only">Authors</dt>
                                <dd>
                                    <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12">
                                        {authorDetails.map((author) => (
                                            <li
                                                className="flex items-center space-x-2"
                                                key={author.name}
                                            >
                                                {author.avatar && (
                                                    <Image
                                                        src={author.avatar}
                                                        width={38}
                                                        height={38}
                                                        alt="avatar"
                                                        className="h-10 w-10 rounded-full"
                                                    />
                                                )}
                                                <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                    <dt className="sr-only">Name</dt>
                                                    <dd className="text-foreground">
                                                        {author.name}
                                                    </dd>
                                                    <dt className="sr-only">Twitter</dt>
                                                    <dd>
                                                        {author.twitter && (
                                                            <Link
                                                                href={author.twitter}
                                                                className="text-primary hover:brightness-125 dark:hover:brightness-125"
                                                            >
                                                                {author.twitter.replace(
                                                                    'https://twitter.com/',
                                                                    '@'
                                                                )}
                                                            </Link>
                                                        )}
                                                    </dd>
                                                </dl>
                                            </li>
                                        ))}
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </header>
                    <div className="divide-y divide-muted-foreground pb-8 dark:divide-muted xl:divide-y-0">
                        <div className="divide-y divide-accent-foreground dark:divide-accent xl:col-span-3 xl:row-span-2 xl:pb-0">
                            <div className="prose prose-sm flex max-w-none pb-8 pt-10 dark:prose-invert">
                                {/* <div className=" flex-1 toc not-prose">
                                    <TOCInline toc={toc} />
                                </div> */}
                                <div className="font-krypton w-full text-justify text-accent">
                                    {children}
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div className="font-krypton flex flex-col text-sm font-medium text-accent opacity-75 sm:flex-row sm:justify-between sm:text-base">
                                {prev && prev.path && (
                                    <div className="pt-4 xl:pt-8">
                                        <Link
                                            href={`/${prev.path}`}
                                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                                            aria-label={`Previous post: ${prev.title}`}
                                        >
                                            &larr; {prev.title}
                                        </Link>
                                    </div>
                                )}
                                {next && next.path && (
                                    <div className="pt-4 xl:pt-8">
                                        <Link
                                            href={`/${next.path}`}
                                            className="text-primary hover:brightness-125 dark:hover:brightness-125"
                                            aria-label={`Next post: ${next.title}`}
                                        >
                                            {next.title} &rarr;
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </>
    )
}
