import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import {Router} from 'react-router-dom';
import AuthComponent from './components/auth/Auth';
import RegisterComponent from "./components/auth/Register";

function App() {

  return (
      <Provider store = { store }>
        <PersistGate persistor = { persistor }>
          <RegisterComponent/>
        </PersistGate>
      </Provider>
  );
}

export default App;
