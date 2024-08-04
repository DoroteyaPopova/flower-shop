import * as request from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/flowers";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const flowers = Object.values(result);

    return flowers;
}

// export const getOne = (flowerId) => request.get(`${BASE_URL}/${flowerId}`);

// export const create = (flowerData) => request.post(`${BASE_URL}`, flowerData)


// const flowerAPI = {
//     getAll,
//     getOne,
//     create,
// }

// export default flowerAPI;