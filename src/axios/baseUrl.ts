let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = '/yqby-api';
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = '';
} else {
    baseUrl = '';
}

export { baseUrl };
export default baseUrl;
