import Trainer from "../model/Trainer.js";

class TrainerServise {
    async setTrainer(trainer) {
        const createdPost = await Trainer.create(trainer);
        return createdPost;
    }

    async getAll() {
        const trainers = await Trainer.find();
        return trainers;
    }
}

export default new TrainerServise();