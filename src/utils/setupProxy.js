// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/calendar",
//     createProxyMiddleware({
//       target: "https://calendar.google.com",
//       changeOrigin: true,
//       pathRewrite: { "^/calendar": "/calendar/embed" },
//     })
//   );
// };
