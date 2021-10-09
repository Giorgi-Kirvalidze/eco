import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from './auth.actions';

export interface State {
    authError: string;
    loading: boolean;
}

const initialState: State = {
    authError: '',
    loading: false
  };

  const _authReducer = createReducer(
      initialState,
      on(
          AuthActions.signupStart,
          (state)=>({
              ...state,
              authError:'',
              loading:true
          })
      ),
      on(
        AuthActions.signupSuccess,
        (state, action) => ({
          ...state,
          authError: '',
          loading: false,
          message: action.message,
          token:action.token
        })
      ),
      on(
        AuthActions.signupFail,
        (state, action) => ({
          ...state,
          authError: action.err,
          loading: false
        })
      ),
  )

  export function authReducer(state: State | undefined, action: Action) {
    return _authReducer(state, action);
  }
