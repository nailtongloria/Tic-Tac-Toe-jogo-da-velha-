import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
/*Biblioteca thunk usada para ssegurar uma requisiçao assícrona*/
export default createStore(rootReducer, applyMiddleware(thunk))