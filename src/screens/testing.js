import React from "react"

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {

    switch (action.type){
    case "increase":
    return {...state, count : state.count + action.payload};
    case "decrease":
    return {...state, count : state.count - action.payload};
    
    
    default :
    return state;
    }


};
const [state, dispatch] = useReducer(reducer, {count : 0});

dispatch({type : "increase" , payload : 1})
dispatch ({type : "decrease" , payload : 1})