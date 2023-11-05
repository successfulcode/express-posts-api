import Router from 'express'
import PostsController from '../controllers/PostsController.js'

const router = new Router()

router.get('/posts', PostsController.getPosts)

router.post('/posts', PostsController.createPost)

router.get('/posts/:id', PostsController.getPostById)

router.delete('/posts/:id', PostsController.deletePostById)

export default router