import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {films} from './mocks/films.ts';
import {detailsMovie} from './mocks/details.ts';
import {overviewMovie} from './mocks/overview.ts';
import {reviews} from './mocks/reviews.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App films={films} details={detailsMovie} overview={overviewMovie} review={reviews}/>
    </React.StrictMode>
  </Provider>
);
