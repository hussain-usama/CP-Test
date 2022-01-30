import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import BasePage from './config/routes';
import {Provider} from 'react-redux'
import {store,persistor} from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Router>
            <BasePage />
          </Router>
        </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
