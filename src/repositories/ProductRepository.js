import Client from '@/clients/AxiosClient';
const resource = '/products';

export default {
    get() {
        return Client.get(`${resource}/`);
    },
    getSingle(id) {
        return Client.get(`${resource}/${id}/`);
    },
    getInCategory(category_id) {
        return Client.get(`${resource}/?category=${category_id}/`);
    },
    create(payload) {
        return Client.post(`${resource}/`, payload);
    },
    update(payload, id) {
        return Client.put(`${resource}/${id}/`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}/`)
    },
};