module.exports =
  process.platform === "darwin"
    ? require("./lib/macos.node")
    : {
        sendMessage: (messageType, actionType, typeKey, s) => {},
      };
