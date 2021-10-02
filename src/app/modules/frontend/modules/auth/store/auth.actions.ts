import { createAction, props } from "@ngrx/store";

export const signupStart = createAction(
    '[Auth] Signup Start',
    props<{
        firstName:string,
        lastName:string,
        email: string,
        password: string,
        confirmPassword:string,
        number:number
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
  