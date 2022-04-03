import User from "../model/User.js";

class UserServise {
    async setUser(trainer) {
        const createdPost = await User.create(trainer);
        return createdPost;
    }

    async getAll() {
        const trainers = await User.find();
        return trainers;
    }

    async checkUser(id) {
        if(!id) {
            throw new Error('not id');
        }
        const findCode = await User.findById(id);
        return findCode;
    }
}

export default new UserServise();