import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFiles, getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticPaths() {
  const authors = getFiles('authors')
  return {
    paths: authors.map((a) => ({
      params: {
        author: formatSlug(a),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const authorDetails = await getFileBySlug('authors', [params.author])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
