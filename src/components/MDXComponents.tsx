import TOCInline from 'src/components/TOCInline'
import type { MDXComponents } from 'mdx/types'
import Pre from 'pliny/ui/Pre'

import Box from './Box'
import CodeBlock from './CodeBlock'
import Image from './Image'
import CustomLink from './Link'
import StaticTweet from './StaticTweet'

export const components: MDXComponents = {
    Image,
    TOCInline,
    a: CustomLink,
    pre: Pre,
    CodeBlock,
    StaticTweet,
    Box,
}
