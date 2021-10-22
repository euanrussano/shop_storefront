import ProductRepository from './ProductRepository';
import CategoryRepository from './CategoryRepository';
import CartRepository from './CartRepository';
// import UserRepository from './UserRepository';

const repositories = {
    'products': ProductRepository,
    'categories': CategoryRepository,
    'carts': CartRepository,
    // 'users': UserRepository
}
export default {
    get: name => repositories[name]
};