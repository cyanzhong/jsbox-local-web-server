const lws = require("local-web-server");
const fs = require("fs");
const ui = require("ui");
const safari = require("safari");
const port = 9527;

async function main() {
  const names = fs.readdirSync("sites");
  const {title} = await ui.menu(names);
  if (title == null) {
    return;
  }

  lws.create({
    port: port,
    directory: `sites/${title}`
  });
  
  safari.open(`http://localhost:${port}`);
}

main();