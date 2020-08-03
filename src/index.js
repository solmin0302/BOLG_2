const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.get('/', (ctx) => {
  ctx.body = 'home';
});
router.get('/about/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `${name}의 소ㅗ개` : '소개';
});
router.get('/posts', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `post ${id}` : 'no post';
});

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log(`listening to port 4000`);
});
