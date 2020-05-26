import {SET_ALERTA} from '../../types/index'


export default (state, action) =>{
    switch(action.type)
    {
        case SET_ALERTA:
            return{
                alert: action.payload
            }
        default: return state
    }
}