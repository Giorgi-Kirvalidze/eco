import { createAction, props } from "@ngrx/store";

export const signupStart = createAction(
    '[Auth] Signup Start',
    props<{
        email: string,
        password: string
    }>()
);

export const signupSuccess = createAction(
    '[Auth] Signup Success',
    props<{
        message:string;
        token:string;
    }>()
);

export const signupFail = createAction(
    '[Auth] Signup Fail',
    props<{
      errorMessage: string
    }>()
  );
  