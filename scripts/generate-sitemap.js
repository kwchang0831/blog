const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/index.js',
    'pages/blog.js',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    'pages/*.js',
    'data/authors/*.md',
    '!pages/projects.js',
    '!pages/tags.js',
    '!pages/_*.js',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('data/blog', '/blog')
                  .replace('data/authors', '/author')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/feed.xml', '')
                const route = path === '/index' ? '' : path
                if (page === `pages/404.js` || page === `pages/blog/[...slug].js`) {
                  return
                }

                if ((route === ``) | (route === `/blog`) | (route === `/about`)) {
                  return `
                      <url>
                          <loc>${siteMetadata.siteUrl}${route}</loc>
                          <changefreq>weekly</changefreq>
                          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
                      </url>
                  `
                }

                if (page.endsWith('.mdx') | page.endsWith('.md')) {
                  let file = fs.readFileSync(page, 'utf8')
                  let rx = /lastmod: '(.*)'\n/g
                  let date = rx.exec(file)
                  if (date && date[1]) {
                    return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                            <changefreq>weekly</changefreq>
                            <lastmod>${new Date(date[1]).toISOString().split('T')[0]}</lastmod>
                        </url>
                    `
                  }
                }

                return `
                    <url>
                        <loc>${siteMetadata.siteUrl}${route}</loc>
                        <changefreq>weekly</changefreq>
                    </url>
                `
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
