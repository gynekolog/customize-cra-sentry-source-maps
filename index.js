const { addWebpackPlugin, override } = require("customize-cra");
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const addSentryWebpackPlugin = (options, enable = process.env.NODE_ENV === "production") =>
  override(
    enable && addWebpackPlugin(new SentryWebpackPlugin(options))
  );

module.exports = { addSentryWebpackPlugin };
