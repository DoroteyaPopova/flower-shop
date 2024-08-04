import * as request from `./requester`;

const BASE_URL = `http://localhost:3030/data/flowers`;

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
}

export const getOne = (flowerId) => request.get(`${BASE_URL}/${flowerId}`);

export const create = (flowerData) => request.post(`${BASE_URL}`, gameData)


const flowerAPI = {
    getAll,
    getOne,
    create,
}

export default flowerAPI;