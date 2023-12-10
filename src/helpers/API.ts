import axios from 'axios';

const BASE_URL = 'https://musicbrainz.org/ws/2/release?artist=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab&status=bootleg&type=live';
// const API_KEY = '9a3b67ec49f8a0c582dd2a3c38156189'

const API = {

    
    readAll: async (path:string) => {
        try {
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                }
            })
            const response = await authAxios.get(`${BASE_URL}`)
            return response.data;
        } catch (err:unknown) {
            return err;
        }
    },

    read: async (path:string, id:number) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.get(`${BASE_URL}${path}/${id}`)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    create: async (path:string, data:object) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    update: async (path:string, data:object, id:string) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.post(`${BASE_URL}${path}/${id}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },
    delete: async (path:string, data:object) => {
        const token = localStorage.getItem("accessToken");
        const authAxios = axios.create({
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        try {
            const response = await authAxios.delete(`${BASE_URL}${path}`, data)
            return response.data;
        } catch (err) {
            return err;
        }
    },

}



export default API;