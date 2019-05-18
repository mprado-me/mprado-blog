import axios from 'axios';

export const getStrapiAssetUrl = (urlPath) => {
    return `https://strapi.mprado.me${urlPath}`;
}

export default axios.create({
    baseURL: 'https://strapi.mprado.me'
});
