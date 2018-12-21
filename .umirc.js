const path = require('path');
export default {
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      // dynamicImport: true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /exclude/,
        ],
      },
      fastClick: true,
    }],
  ],
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  alias: {
    // components: path.resolve(__dirname, 'src/components/'),
    // // layouts: path.resolve(__dirname, 'src/layouts'),
    // utils: path.resolve(__dirname, 'src/utils/'),
    // assets: path.resolve(__dirname, 'src/assets/'),
  },
  routes: [
    { path: '/', component: '../layouts/index.js', Routes: ['./routes/PrivateRoute.js'] },
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  disableCSSModules: false

};
