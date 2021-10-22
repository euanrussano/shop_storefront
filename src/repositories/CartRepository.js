import Client from '@/clients/AxiosClient';
const resource = '/carts';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getSingle(id) {
        return Client.get(`${resource}/${id}`);
    },
    getFromUser(user_id) {
        return Client.get(`${resource}/user/${user_id}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
};