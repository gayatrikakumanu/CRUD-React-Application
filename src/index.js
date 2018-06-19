import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/playersreducer';
import registerServiceWorker from './registerServiceWorker';
//creating store with reducer and middleware
const store = createStore(
		reducer,
        applyMiddleware(thunk)
    );
//browser router helping components to route and provider to make store availble to all components
ReactDOM.render(
		<BrowserRouter>
			<Provider store={store} >
				<App />
			</Provider>
		</BrowserRouter>,
		 document.getElementById('root')
	 );
registerServiceWorker();
