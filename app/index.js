import {createStore} from 'redux';

function list (state =[], action){
    if(action.type === 'addNewList'){
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

let listEvent = createStore(list);

listEvent.subscribe(() => {
    alert( listEvent.getState());
});

listEvent.dispatch({type: 'addNewList', payload: 'Redux store '});