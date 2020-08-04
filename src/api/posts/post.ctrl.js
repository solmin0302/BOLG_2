let postId = 1;

const posts = [
  {
    id: 1,
    title: 'title',
    body: 'body',
  },
];

/**포스트 작성 */
export const write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

export const list = (ctx) => {
  ctx.body = posts;
};

export const read = (ctx) => {
  const { id } = ctx.params;

  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: 'no post',
    };
    return;
  }
  ctx.body = post;
};

export const remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'nopost',
    };
    return;
  }
  posts.splice(index, 1);
};

export const replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'nopost',
    };
    return;
  }
  // 전체 객체를 덮어 씌웁니다.
  // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만듭니다.
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

export const update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'nopost',
    };
    return;
  }
  // replace와는 다르게 기존값에 정보를 덮어 씌운다.
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
