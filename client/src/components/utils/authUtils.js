export const getAccessToken = () => {
    const authJSON = localStorage.getItem(`auth`);

    if (!authJSON) {
        return ``;
    }

    const authData = JSON.parese(authData);

    return authData?.accessToken;
}