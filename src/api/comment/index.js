import Router from 'koa-router';
import * as commentAPI from './comment.ctrl';

const comment = new Router();

comment.get('./comment', commentAPI.getCommnetByPost);
