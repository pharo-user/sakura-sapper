import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

// https://www.npmjs.com/package/http-proxy-middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

const { BASE_PATH } = process.env;

polka() // You can also use Express
  // uncomment next line only for tests
  .use( '/api', createProxyMiddleware({ target: 'http://127.0.0.1:8081', changeOrigin: true}))
  .use(
    '/shopify3', 
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
