import UserServise from "../servise/UserServise.js";

class userController {
    async addUser(req, res) {
        try {
            const post = await UserServise.setUser(req.body);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async CheckUser(req, res) {
        try {
            const result = await UserServise.checkUser(req.params.id);
            res.status(200).json(result);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAllUser(req , res) {
        try {
            const trainers = await UserServise.getAll();
            res.status(200).json(trainers);
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new userController();