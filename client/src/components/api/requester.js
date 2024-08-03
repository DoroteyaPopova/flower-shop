import { getAccessToken } from "../utils/authUtils";

export default async function requester(method, url, data) {
    const options = {};

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            "X-authorization": "accessToken",
        }
    }

    if (method !== `GET`) {
        options.method = method;
    }

    if (data) {
        options.headers = {
            "Content-Type": "application/json",
        }

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    if (response.status === 204) {
        return;
    }

    const result = response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}