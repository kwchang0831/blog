const siteMetadata = {
  title: '成功他媽．阿瑋',
  metaTitle: 'BLOG | @kwchang0831',
  author: 'kwchang0831',
  authorURL: 'https://blog.kwchang0831.dev/author/kwchang0831',
  headerTitle: '成功他媽．阿瑋',
  description: '雖然，在這找不到成功；但，成功最終會回來找他媽的。',
  metaDescription:
    '嗨，我是成功他媽．阿瑋。 我是一個失敗的人。我愛學習各種新事物，但什麼都不專精。 但，人生只有一次，活得開心最重要，不是嗎？ 我從來沒想過要成功。 因為只有魯蛇才會天天想要成功: 為了當一個成功的魯蛇。 雖然，在這找不到成功；但，成功最終會回來找他媽的。',
  language: 'zh-tw',
  siteUrl: 'https://blog.kwchang0831.dev',
  siteUrlSimple: 'blog.kwchang0831.dev',
  siteRepo: 'https://github.com/kwchang0831/blog.kwchang0831.dev',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'contact@kwchang0831.dev',
  github: 'https://github.kwchang0831.dev',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  web: 'https://kwchang0831.dev',
  locale: 'zh-TW',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-R4FM8P5J7F', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
