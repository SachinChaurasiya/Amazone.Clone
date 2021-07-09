import React ,{createContext , useContext , useReducer} from 'react'

// prepare the dataLayers
export const StateContext = createContext();

//warp our app and provide tha data layer
 export const StateProvider = ({reducer,initialState, children}) => {
    return <StateContext.Provider 
    value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}
// pull information from tha data layer
export const useStateValue = ()=> useContext(StateContext);
