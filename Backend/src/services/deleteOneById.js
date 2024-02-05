import DAO from '../Data-Access/index.js'

export const deleteOneById = async (collection, id) => {
    const data = await DAO.deleteOneById(collection, id);
    return data;
};