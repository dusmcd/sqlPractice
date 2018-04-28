const html = require('html-template-tag');

module.exports = content => html`
  <html>
    <head>
      <title>Music Shop</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Dustin's Music Shop</h1>
      <div class="container">
        $${content}
      </div>
    </body>
  </html>

`;
