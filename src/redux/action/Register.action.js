import { ADD_USER } from "../type/Register.type"

export const userRegister = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}