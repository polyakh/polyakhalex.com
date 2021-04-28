const path = require("path");
const fs = require("fs");

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const COMPONENTS = "components";
const TYPES = "types";
const STYLES = "styles";
const IMAGES = "images";
const DEFINITIONS = "definitions";
const HOOKS = "hooks";
const LIBS = "libs";
module.exports = {
  dotenv: resolveApp(".env"),
  appPath: resolveApp("."),
  appPublic: resolveApp("public"),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp("src"),
  appTsConfig: resolveApp("tsconfig.json"),
  appNodeModules: resolveApp("node_modules"),
  path: {
    COMPONENTS,
    STYLES,
    IMAGES,
    DEFINITIONS,
    HOOKS,
    LIBS,
    TYPES,
  }
};
