import { createStore } from 'react-redux'

const reducer = (state = 0, action) =>
{
    switch (action.type) {
        case 'increment':
            return state+1 ;
            // break;
        case "decrement":
            return state -1 ;
        default:
            // break;re
            return state ;
    }
}

 export const store = createStore(reducer) ;

