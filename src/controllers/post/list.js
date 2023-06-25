const listPosts = async (req, res) => {
  const { Post } = req.db;

  const limit = Number(req.query.limit);
  const page = Number(req.query.page);

  const posts = await Post.list();

  const startIdx = (page - 1) * limit;
  const endIdx = page * limit;

  const results = { total: posts.length };

  if (endIdx < posts.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIdx > 0) {
    results.prev = {
      page: page - 1,
      limit: limit,
    };
  }

  results.results = posts.slice(startIdx, endIdx);  
  res.send(results);
};

module.exports = listPosts;
