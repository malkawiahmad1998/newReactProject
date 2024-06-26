import React,{useReducer} from "react";

const initialState = {'count':0}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
        return{'count':state.count+1}
        case 'decrement':
        return{'count':state.count-1}
        default:return state;
    }
        
}

const UseReducerExample =()=>{
    const [state,dispatch]= useReducer(reducer,initialState);
    return(
        <>
            <p>count: {state.count}</p>
            <button onClick={()=>{
                dispatch({type:'increment'})
            }}>+</button>
            <button onClick={()=>{
                dispatch({type:'decrement'})
            }}>-</button>

        </>
    )
}
export default UseReducerExample;