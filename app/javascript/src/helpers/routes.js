export const catalogPath  = () => '/';
export const contactsPath = () => '/contacts';
export const basketPath   = () => '/basket';
export const productPath = (id = ':id') => `/products/${id}`;

export const productsApi = (id = '') => `/api/v1/products/${id}`
