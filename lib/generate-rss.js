import { escape } from '@/lib/utils/htmlEscaper'

import siteMetadata from '@/data/siteMetadata'

const generateRssItem = (post) => `
    <item>
      <guid>${siteMetadata.siteUrl}/blog/${post.slug}</guid>
      <title>${escape(post.title)}</title>
      <link>${siteMetadata.siteUrl}/blog/${post.slug}</link>
      ${
        post.summary &&
        `<description><![CDATA[<p><img hspace="5" src="${siteMetadata.siteUrl}${
          post.images[0]
        }"/></p><p>${escape(post.summary)}</p>]]></description>`
      }
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${siteMetadata.email} (${siteMetadata.author})</author>
      ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
    </item>
`

const generateRss = (posts, page = 'feed.xml') => `
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:webfeeds="http://webfeeds.org/rss/1.0">
  <channel>
    <title>${escape(siteMetadata.title)}</title>
    <link>${siteMetadata.siteUrl}/blog</link>
    <description>${escape(siteMetadata.description)}</description>
    <language>${siteMetadata.language}</language>
    <managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
    <webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
    <atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
    <webfeeds:cover image="${siteMetadata.siteUrl}/static/favicons/icon-512x512.png" />
    <webfeeds:icon>${siteMetadata.siteUrl}/static/favicons/icon.png</webfeeds:icon>
    <webfeeds:logo>${siteMetadata.siteUrl}/static/favicons/safari-pinned-tab.svg</webfeeds:logo>
    <image>
      <url>${siteMetadata.siteUrl}/static/favicons/icon-512x512.png</url>
      <title>${escape(siteMetadata.title)}</title>
      <link>${siteMetadata.siteUrl}/blog</link>
      <width>70</width>
      <height>70</height>
    </image>
    ${posts.map(generateRssItem).join('')}
  </channel>
</rss>
`
export default generateRss
