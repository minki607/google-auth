import { FETCH_REQ, FETCH_SREQ, FETCH_QUERY, LOADER_ON, LOADER_OFF } from '../actions/types'

const initialState = {
    data: [],
    single: [],
    query: [],
    loading: false
}
export default function(state = initialState, action){
    switch (action.type){
        case FETCH_REQ:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_SREQ: 
            return {
                ...state,
                single: action.payload
            }    
        case FETCH_QUERY:
            return{
                ...state,
                query: action.payload
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