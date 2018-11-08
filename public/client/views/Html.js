const Html = ({ body, title, scriptSrc }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script src = "/public/client/dist/bundle.js"></script>
  </html>
`;

export default Html;