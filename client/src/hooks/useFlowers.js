import { useEffect, useState } from "react";
import flowerAPI from "../components/api/flower-api"

export function useGetAllflowers() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await flowerAPI.getAll();

            setFlowers(result);
        })();
    }, []);

    return [flowers, setFlowers];
}

export function useGetOneFlowers(flowerId) {
    const [flowers, setFlowers] = useState({})

    useEffect(() => {
        (async () => {
            const result = await flowerAPI.getOne(flowerId);

            setFlowers(result);
        })();
    }, [flowerId]);

    return [
        flowers,
        setFlowers,
    ]
}

export function useCreateFlower() {
    const flowerCreateHandler = (flowerData) => flowerAPI.create(flowerData);

    return flowerCreateHandler
}