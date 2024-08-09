export const getAccessToken = () => {
    const authJSON = localStorage.getItem("auth");

    if (!authJSON) {
        return ``;
    }

    const authData = JSON.parese(authJSON);

    return authData?.accessToken;
}