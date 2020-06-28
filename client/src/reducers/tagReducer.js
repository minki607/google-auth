import { POST_TAG, FETCH_TAG, LOADER_ON, LOADER_OFF } from '../actions/types'

const initialState = {
    data: [],
    loading: false
}
export default function(state = initialState, action){
    switch (action.type){
        case POST_TAG:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_TAG: 
            return {
                ...state,
                data: action.payload
            }    
        case LOADER_ON:
            return {
                ...state,
                loading: true
            }     
        case LOADER_OFF:
            return {
                ...state,
                loading: false
            }
        default:
            return state    
    }
  
}