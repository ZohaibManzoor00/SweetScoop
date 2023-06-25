const knex = require('../knex');

class Post {
  static async list() {
    const query = `
    SELECT posts.*, username 
    FROM posts 
    JOIN users ON posts.user_id = users.id
    ORDER BY updated_at DESC`;
    const res = await knex.raw(query);
    return res.rows;
  }
}

module.exports = Post;
