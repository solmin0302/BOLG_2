import Router from 'koa-router';
import * as postCtrl from './post.ctrl';
import checkedLoggin from '../../lib/checkedLoggin';

const posts = new Router();

posts.get('/', postCtrl.list);
posts.post('/', checkedLoggin, postCtrl.write);

posts.get('/:id', postCtrl.getPostById, postCtrl.read);
posts.delete(
  '/:id',
  checkedLoggin,
  postCtrl.getPostById,
  postCtrl.checkOwnPost,
  postCtrl.remove,
);
posts.patch(
  '/:id',
  checkedLoggin,
  postCtrl.getPostById,
  postCtrl.checkOwnPost,
  postCtrl.update,
);

export default posts;
