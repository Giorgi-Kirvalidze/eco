import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../../../../../core/store/app.reducer';
import * as AuthActions from '../../store/auth.actions';
import {MustMatch} from "../../../../../../core/matcher/mustMatch";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit,OnDestroy {
  signupForm!: FormGroup;

  isLoading = false;
  error: string = '';
  hide = true;
  public storeSub!: Subscription;

  constructor(private fb:FormBuilder,private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.initForm();
    this.storeSub = this.store.select('auth').subscribe(authState=>{
      this.isLoading = authState.loading;
      this.error = authState.authError
    })
  }

  initForm(){
    this.signupForm = this.fb.group({
        firstName:['',[Validators.required]],
        lastName:['',[Validators.required]],
        email:['',[Validators.email,Validators.required]],
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required,]],
        number:['',[Validators.required,Validators.pattern('[- +()0-9]+'),Validators.minLength(9),Validators.maxLength(12)]]
    },{
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  onSubmit(form:FormGroup){
    if(form.invalid){
      return
    }
    const email = form.value.email;
    const password = form.value.password;
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const confirmPassword = form.value.confirmPassword;
    const number = form.value.number;
    this.store.dispatch(
      AuthActions.signupStart({number,email,password,firstName,lastName,confirmPassword})
    )
    // form.reset();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
