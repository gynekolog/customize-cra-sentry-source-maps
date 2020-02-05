Add sentry/webpack-plugin to any create-react-app using using [customize-cra](https://github.com/arackaf/customize-cra).

# Installation

1. Install dependencies

   ```
   yarn add -D react-app-rewired customize-cra https://github.com/gynekolog/customize-cra-sentry-source-maps.git
   ```

2. [Setup react-app-rewired](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project)

3. Update your `config-overrides.js`

   ```js
   const { override } = require("customize-cra");
   const { addSentryWebpackPlugin } = require("customize-cra-sentry-source-maps");

   /* config-overrides.js */
   module.exports = override(
    addSentryWebpackPlugin(
       {
           include: '.',
           ignoreFile: '.sentrycliignore',
           ignore: ['node_modules', 'webpack.config.js'],
           configFile: 'sentry.properties'
       },
       process.env.NODE_ENV === "production"
    ),
   );
   ```
