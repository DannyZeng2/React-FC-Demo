import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {demoResultReducer} from './DemoRedux';
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension';

const loggerMiddleware = createLogger({collapsed: true});


const store = createStore(
    combineReducers({
        demoResult: demoResultReducer,
    }),

    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    ),
);

export default store;
