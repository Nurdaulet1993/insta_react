export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3004/';
    }

     getResource = async (url) => {
       const res = await fetch(`${this._apiBase}${url}`);

       if (!res.ok) {
           throw new Error(`Culd not fetch ${url}, recived ${res.status}`);
       }

       return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    }
}