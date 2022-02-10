import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
const Plausible = dynamic(() => import('./Plausible'))
const SimpleAnalytics = dynamic(() => import('./SimpleAnalytics'))
const GA = dynamic(() => import('./GoogleAnalytics'))

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
    </>
  )
}

export default Analytics
