import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../..//environments/environment';

import * as AuthActions from './auth.actions';

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
        private router: Router
      ) {}

    signup$ = createEffect(()=>
        this.actions$.pipe(
            ofType(AuthActions.signupStart),
            switchMap(action=>{
                return this.http.post<any>('http://localhost:5000/api/users/signup',
                {
                    password: action.password,
                    email:action.email,
                    firstName:action.password,
                    confirmPassword:action.confirmPassword,
                    lastName:action.email,
                    number:action.number,
                })
                .pipe(
                    map(resData=>{
                    this.router.navigate([''])
                    return handleSignup(
                        resData.message,
                        resData.token
                    )
                    },
                    catchError(errRes =>{
                        console.log(errRes);
                        throw new Error(errRes) 
                    })
                
                ))
            })
        )
    )
}