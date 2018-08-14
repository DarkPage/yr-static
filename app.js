const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');

const app = new Koa();
const router = new Router();

const path = require('path');

app.use(static('./build'));

router.get(/[ablum|book|me|scene|notice|rent|about|ablum]/, async (ctx) => {
  await send(ctx, 'index.html', { root: __dirname + '/build' });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);