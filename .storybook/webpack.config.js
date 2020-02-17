const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = async ({ config }) => {
   config.entry.push(path.join(__dirname, '../dist/vouchercloud.js'));

   fs.readdirSync(path.join(__dirname, '../dist/collection/components')).map(
      function(file) {
         jsFilePath = path.join(
            __dirname,
            `../dist/collection/components/${file}/${file}.js`
         );
         try {
            if (fs.existsSync(jsFilePath)) {
               config.entry.push(jsFilePath);
            }
         } catch (err) {
            console.error(err);
         }
      }
   );

   config.plugins.push(
      new CopyPlugin([
         {
            from: '**/*',
            to: './',
            context: 'dist',
         },
      ])
   );

   config.plugins.push(new WriteFilePlugin());

   config.module.rules.push({
      test: /\.scss$/,
      loaders: [
         { loader: 'style-loader' },
         { loader: 'css-loader' },
         {
            loader: 'sass-loader',
            options: {
               sourceMap: true,
               implementation: require('node-sass'),
               sassOptions: {
                  outputStyle: 'compressed',
               },
            },
         },
      ],
   });

   return config;
};
