import Client from '@/clients/AxiosClient';
const resource = '/categories';

export default {
    get() {
        return Client.get(`${resource}/`);
    }
};