
import PostsSchema from '../schemas/PostsSchema.js'

class PostService {
  async getAll() {

    const posts = await PostsSchema.find()

    return posts
  }

  async create(post) {
    if(!post) {
      throw new Error('post error')
    }

    const createdPost = await PostsSchema.create(post)

    return createdPost
  }

  async getById(id) {
    if(!id) {
      throw new Error('id error')
    }

    const post = await PostsSchema.findById(id);
    return post
  }

  async deleteById(id) {
    if(!id) {
      throw new Error('id error')
    }

    const deleted = await PostsSchema.findByIdAndDelete(id);
    return deleted 
  }
}

export default new PostService