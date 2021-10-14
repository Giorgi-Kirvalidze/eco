import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../..//environments/environment';

import * as AuthActions from './auth.actions';
import {AlertService} from "../../../../../shared/components/alert/alert.service";

const handleSignup = (
    message: string,
    token: string
  ) => {
    localStorage.setItem('token', JSON.stringify(token));
    return AuthActions.signupSuccess({ message, token });
  };

@Injectable()
export class SignupEffect{
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private router: Router,
        private alertService: AlertService,
      ) {}

    signup$ = createEffect(()=> {
        return this.actions$.pipe(
          ofType(AuthActions.signupStart),
          switchMap(action => {
            return this.http.post<any>('http://localhost:5000/api/users/signup',
              {
                password: action.password,
                email: action.email,
                firstName: action.password,
                confirmPassword: action.confirmPassword,
                lastName: action.email,
                number: action.number,
              })
              .pipe(
                catchError(err => {
                  console.log(err)
                  AuthActions.signupFail({ err });
                  this.alertService.error(err.error.message.message,
                    {autoClose: false, fade:true}
                  );
                  return throwError(err.error.message.message)
                }),
                map(resData => {
                    this.alertService.success(resData.message,
                      {autoClose: true,fade:true}
                    );
                    setTimeout(()=>{
                      this.router.navigate(['']);
                    },3500)
                  return handleSignup(
                      resData.message,
                      resData.token
                    )
                  },
                ))
          })
        );
      }
    )
}
