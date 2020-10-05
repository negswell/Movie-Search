import React from 'react';
import './App.css';
import MovieForm from './components/MovieForm';
import NavTabBar from './components/NavTabBar';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <p>Movie Search</p>
        </header>
        <NavTabBar />
        <MovieForm />
      </div>
    </Provider>
  );
}

export default App;
