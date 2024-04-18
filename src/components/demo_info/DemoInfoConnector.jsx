import {connect} from 'react-redux';
import {addDemoResult, searchDemoResult} from '../../redux/DemoRedux';

/**
 * mapStateToProps 是一个函数，它的参数state 对应 redux store 的完整状态
 * 它返回一个对象，这个对象的每一个键值对将被添加到被连接组件的props
 */
const mapStateToProps = (state) => ({
    demoResult: state.demoResult
});

/**
 * mapDispatchToProps
 * key对应被连接组件中调用的函数，value对应它所dispatch的redux action
 */

const mapDispatchToProps = {
    searchDemoResult: searchDemoResult,
    addDemoResult: addDemoResult
}

// 将connect函数export出去，将对应的组件和store连接起来
export const DemoInfoConnector = connect(mapStateToProps, mapDispatchToProps);
