// @ts-ignore
import App from "!!raw-loader!../assets/guide/base/App.js";
// @ts-ignore
import packageJson from "!!raw-loader!../assets/guide/base/package.json.txt";
import scrollex from "!!raw-loader!../assets/guide/base/scrollex.js";

const files = {
  "/App.js": App,
  "/package.json": packageJson,
  "/scrollex.js": scrollex,
};

export default files;
