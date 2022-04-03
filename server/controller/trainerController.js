import TrainerServise from "../servise/TrainerServise.js";

class trainerController {
    async addTrainer(req, res) {
        try {
            const post = await TrainerServise.setTrainer(req.body);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req , res) {
        try {
            const trainers = await TrainerServise.getAll();
            res.status(200).json(trainers);
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new trainerController();