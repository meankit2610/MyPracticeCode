import { isAuth } from "./action";

const initState = {
    isAuthState: false
}

export const authReducer = (state=initState,{type,payload}) => {
    switch (type) {
        case isAuth:
            return {
            ...state
        }
    }
    
}