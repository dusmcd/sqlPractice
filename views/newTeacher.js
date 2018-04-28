const html = require('html-template-tag');
const layout = require('./layout');

const htmlString = html`
  <form action='/teachers/new' method="POST">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" class="form-control" id="name">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;

module.exports = layout(htmlString);
