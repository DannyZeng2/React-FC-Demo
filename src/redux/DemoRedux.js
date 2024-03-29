import {createAction, createReducer} from '@reduxjs/toolkit';
import DemoApi from '../api/DemoApi';

export const searchDemoResult = (criteria) => dispatch => {
    // DemoApi.searchDemoResult(criteria).then((response) => {
    //     dispatch(searchDemoAction(response))
    // }).catch(error => {
    //     console.error(error);
    // })
    const response = DemoApi.searchDemoResult(criteria)
    dispatch(searchDemoAction(response))
}

export const addDemoResult = (criteria) => dispatch => {
    dispatch(addDemoAction(criteria))
}

//createAction函数接受一个字符串作为action的类型，并且接受一个函数作为action的payload创建函数
const searchDemoAction = createAction('SEARCH_DEMO', (response) => {
    return {payload: response};
});

const addDemoAction = createAction('ADD_DEMO', (criteria) => {
    return {payload: criteria};
});

/**
 * createReducer函数接收两个参数，第一个state是初始值，这里demoResult初始值是一个空的数组
 * 第二个是处理action的回调函数，builder对象通过addCase方法用来依次处理不同类型的action。
 *
 * reducer接收 action 和 state 并作为参数，通过计算得到新的 state, 然后通过combineReducers将所有的reducer合并store当中
 */
export const demoResultReducer = createReducer([], (builder) => {
    builder
        .addCase(searchDemoAction.type, (state, action) => {
            return action.payload;
        })
        .addCase(addDemoAction.type, (state, action) => {
            return [...state, action.payload];
        })
});
