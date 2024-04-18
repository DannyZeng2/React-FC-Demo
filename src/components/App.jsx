import '../App.css';
import AppRouter from './AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {ThemeProvider} from '@emotion/react';
const theme = {
    color: {
        primary: '#0070f3',
    },
};
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <div className="App">
                    <Router>
                        <AppRouter/>
                    </Router>
                </div>
            </Provider>
        </ThemeProvider>
    )
}

export default App;
