const Dotenv = require('dotenv-webpack');

module.exports = {
    // Other webpack configuration options...
    module: {
      rules: [
        // Other rules...
        {
          test: /\.gif$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'src/assets/', // Output directory for the images
              },
            },
          ],
        },
      ],
    },
    };

module.exports = {
  plugins: [
    new Dotenv()
  ]
};