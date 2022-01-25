module.exports =
  process.platform === "darwin"
    ? require("./lib/macos.node")
    : require("./lib/windows.node");
