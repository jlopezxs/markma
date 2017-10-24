const isProduction = process.env.NODE_ENV === 'production';

require("marko-starter").projectConfig({
  lassoConfig: {
      bundlingEnabled: isProduction,
      fingerprintsEnabled: isProduction,
      require: {
        // ...
      },
      minifyJS: false,
      plugins: [
          'lasso-marko',
          'lasso-sass'
      ]
  }
}).server({
  httpPort: process.env.PORT || 8080
});
