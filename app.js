const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');
const gzip = require('koa-gzip');

const app = new Koa();

const router = new Router();

const path = require('path');

app.use(gzip());

app.use(static('./build'));

// change this regexp for your path
router.get(/[ablum|book|me|scene|notice|rent|about|ablum]/, async (ctx) => {
  await send(ctx, 'index.html', { root: __dirname + '/build' });
});

app.use(router.routes()).use(router.allowedMethods());

const port = 8888;

app.listen(port, '0.0.0.0');

console.log(`Server start at port ${port}`);