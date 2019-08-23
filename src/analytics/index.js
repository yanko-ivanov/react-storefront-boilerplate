/* 
Here you can configure analytics using react-storefront-extensions, which is a commercial module 
provided by Moovweb.  An example is provided below:
*/

// import DebugTarget from 'react-storefront-extensions/DebugTarget'

// export default () => [
//   new DebugTarget().sendForAllEvents()
// )

import GoogleAnalyticsTarget from 'react-storefront-extensions/GoogleAnalyticsTarget'

export default () => [
  new GoogleAnalyticsTarget({ trackingID: 'UA-26739163-21' }).sendForAllEvents()
]
