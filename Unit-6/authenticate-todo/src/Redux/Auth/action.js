export const isAuth = "isAuth"

export const authentication = (data) => ({
    type: isAuth,
        payload: data
});