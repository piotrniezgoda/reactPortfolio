const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\projects\\peter\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\projects\\peter\\src\\pages\\404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\projects\\peter\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\projects\\peter\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("D:\\projects\\peter\\src\\pages\\portfolio.js")))
}

