import '../App.css';
import AppRouter from "./AppRouter";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from '../redux/store';

const App = () => {
  return (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <AppRouter/>
              </Router>
          </div>
      </Provider>

  )
}

export default App;
