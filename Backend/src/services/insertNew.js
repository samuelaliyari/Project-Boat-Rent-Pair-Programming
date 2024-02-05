import DAO from '../Data-Access/index.js'

export const insertNew = async (collection, newDocument) => {
    const data = await DAO.insetNew(collection, newDocument);
    return data;
};