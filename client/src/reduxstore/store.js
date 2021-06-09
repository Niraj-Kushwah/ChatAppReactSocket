import {createStore,applyMiddleware} from "redux"
import demo from "./reducer"
import {logger} from "./middleware"
import createSaga from "redux-saga"
import{RootSaga} from "./sagas"

var sagamiddlewares=createSaga()
var middlewares= applyMiddleware(logger,sagamiddlewares)
export default createStore(demo,middlewares)
sagamiddlewares.run(RootSaga)
