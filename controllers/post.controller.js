
const Post = require('../models/Post')
module.exports = {
  index : async (req,res) => {
    const posts = await Post.findAll();
    return res.render('post/index',{
      posts
    })
  },

  create : async (req,res) => {
    return res.render('post/create')
  },

  store : async (req,res) => {
    const data = await Post.create({
      title : req.body.title,
      content : req.body.content
    })
    res.redirect('/posts')
  }
}
