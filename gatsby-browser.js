import "./src/styles/global.css"

// gatsby-browser.js
if (process.env.NODE_ENV === "development") {
  require("./src/styles/dev-404-styles.css")
}
