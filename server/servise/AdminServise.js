import Admin from "../model/Admin.js";

class AdminServise {
    async Login(code) {
        if(!code) {
            throw new Error('not code');
        }
        const findCode = await Admin.findOne({code:code});
        return findCode;
    }

    async setLogin(code) {
        if(!code) {
            throw new Error('not code');
        }
        const setCode = await Admin.create(code)
        return setCode;
    }

    async updateLogin(code) {
        if(!code) {
            throw new Error('not code');
        }
        const updateCode = await Admin.findOneAndUpdate(code.code, code, {new:true});
        return updateCode;
    }
}

export default new AdminServise();