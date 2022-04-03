import {loginPath,updateLogin,addTrainer,getAllTrainer,addUser,checkUser} from "./apiRoutes"
import axios from 'axios';

class API {
    static async sendLogin (login) {
        const response = await axios.get(`${loginPath}${login}`);
        return await response.data;
    }

    static async updateLogin(login) {
        const response = await axios.put(`${updateLogin}`, {
            code:login
        });
        return await response.data;
    }

    static async createTrainer(trainer) {
        const response = await axios.post(`${addTrainer}` , trainer)
    }

    static async getTainerAll() {
        const response = await axios.get(`${getAllTrainer}`)
        return response.data;
    }

    static async addUser(user) {
        const response = await axios.post(`${addUser}`, user);
        return response.data;
    }

    static async getAllUser() {
        const response = await axios.get(`${addUser}`);
        return response.data;
    }

    static async checkUser(id) {
        const response = await axios.get(`${checkUser}/${id}`);
        return response.data;
    }
}

export default API;