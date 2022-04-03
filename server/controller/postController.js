import Post from "../model/Post.js";
import PostServise from "../servise/PostServise.js";

class PostController {
    async setPost(req, res) {
        try {
            const post = await PostServise.setPost(req.body);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostServise.getAll();
            return res.json(posts);
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostServise.getOne(req.params.id);
            return res.json(post);
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async update(req,res) {
        try {
            const updatedPost = await PostServise.update(req.body);
            return res.json(updatedPost);
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async delete(req,res) {
        try {
            const {id} = req.params;
            const post = await PostServise.delete(id);
            return res.json(post);
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();