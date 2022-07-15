import { ADD_USER } from "../type/Register.type"

export const UserReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_USER:
            let data = [...state, action.payload]
            return data

        default:
            return state
    }
}