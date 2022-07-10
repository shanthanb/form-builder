import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

const createBrowserHistory = require('history').createBrowserHistory;

export const history = createBrowserHistory()

const routeMiddleware = routerMiddleware(history);

const middlewares = [thunk,routeMiddleware];

export default function configureStore(preloadedState){
        const store = createStore(
            createRootReducer(history),
            preloadedState,
            compose(
                applyMiddleware(
                    routerMiddleware(history),
                    ...middlewares
                )
            )
        );

        return store;
}
