import PostsSchema from '../schemas/PostsSchema.js'
import PostService from '../services/PostService.js'

class PostsController {
  async getPosts(req, res) {

    const posts = await PostService.getAll()

    return res.send(posts)
  }

  async createPost(req, res) {
    if(req.body) {
      const newPost = req.body
      const createdPost = await PostService.create({...newPost})

      return res.send(createdPost)
    } else {
      res.status(500)
    }
  }

  async getPostById(req, res) {    
   const post = await PostService.getById(req.params.id)

    return res.send(post)
  }

  async deletePostById(req, res) {
    const deleted = await PostService.deleteById(req.params.id)

    return res.send(deleted)
  }
}

export default new PostsController