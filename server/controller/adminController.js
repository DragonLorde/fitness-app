import AdminServise from "../servise/AdminServise.js";

class AdminController {
    async Login(req, res) {
        try {
            const result = await AdminServise.Login(req.params.id);
            res.status(200).json(result);
        } catch(e) {
            res.status(500).json(e);
        }
    }
    async setLogin(req, res) {
        try {
            console.log(req.body);
            const result = await AdminServise.setLogin(req.body);
            res.status(200).json(result);
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async updateLogin(req, res) {
        try {
            const updateCode = await AdminServise.updateLogin(req.body);
            res.status(200).json(updateCode);
        } catch(e) {
            res.status(500).json(e)
        }
    }
}

export default new AdminController();