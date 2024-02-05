import DAO from '../Data-Access/index.js'

export const getAll = async (collection) => {
    const data = await DAO.getAll(collection);
    return data;
};