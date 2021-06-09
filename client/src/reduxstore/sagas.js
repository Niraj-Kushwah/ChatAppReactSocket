import axios from "axios"
import {call,put,takeEvery,all} from "redux-saga/effects"

function login(action)
{
	if(action.payload.email=="neeraj.kushwah@neosoftmail.com" && action.payload.password=="test")
  {
    return true;
  }
}

function* LoginGenerator(action)
{
  var result=yield call(login,action)
  if(result)
  {
  	yield put({type:'LOGIN_SUCCESS',payload:result})
  }else
  {
  	yield put({type:'LOGIN_FAILURE'})
  }
}

export function* LoginSaga()
{
	yield takeEvery("LOGIN",LoginGenerator)
}

export function* RootSaga(){
    yield all([LoginSaga()])
}

