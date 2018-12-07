export const catalogPath  = () => '/';
export const contactsPath = () => '/contacts';
export const basketPath   = () => '/basket';
export const productPath = (id = ':id') => `/products/${id}`;

export const productsApi = (id = '') => `/api/v1/products/${id}`
export const productImagesApi = (product_id = ':product_id') => `/api/v1/products/${product_id}/images`
