import '../App.css';
import AppRouter from './AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {root} from '../css/CommonCss';

const App = () => {
    return (
        <Provider store={store}>
            <div css={root}>
                <Router>
                    <AppRouter/>
                </Router>
            </div>
        </Provider>
    )
}

export default App;
