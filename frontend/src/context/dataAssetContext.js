import { createContext, useReducer } from "react";

export const DataAssetContext = createContext();

export const dataAssetReducer = (state, action) => {
    switch(action.type){
        case 'GET_ASSETS':
            return{
                assets: action.payload
            }
        case 'ADD_ASSETS':
            return{
                assets:[action.payload, ...state.assets]
            }
        case 'EDIT_ASSETS':
            return{
                assets: state.assets.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_ASSETS':
            return{
                assets: state.assets.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const DataAssetContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(dataAssetReducer, {
        assets: null
    })

    return(
        <DataAssetContext.Provider value={{ ...state, dispatch}}>
            {children}
        </DataAssetContext.Provider>
    )
}

export default DataAssetContextProvider