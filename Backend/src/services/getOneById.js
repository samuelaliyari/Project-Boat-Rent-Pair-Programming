import DAO from '../Data-Access/index.js'

export const getOneById = async (collection, id) => {
    const data = await DAO.getOneById(collection, id);
    return data;
};