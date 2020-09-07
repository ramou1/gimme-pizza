import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: any = { username: 'frezze', password: 'fr3ZZ&l0g' };

  constructor( public api: ApiService ) {// redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //     this.router.navigate(['/']);
      // }
  }

  ngOnInit() {
  }

  logIn() {


      this.api.login(this.user.username, this.user.password);
      // this.submitted = true;

      // // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }

      // this.loading = true;
      // this.authenticationService.login(this.f.username.value, this.f.password.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.router.navigate([this.returnUrl]);
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }


}
