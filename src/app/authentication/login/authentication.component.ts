import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { CookieService } from '../../shared/services/cookie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService,
    private cookieService: CookieService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  Submit() {

    let $this = this

    let username = this.loginForm.controls['username'].value
    let password = this.loginForm.controls['password'].value

    this.authentication.login(username, password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data, 'datatatatatata')
          console.log(data.token, "check for token")

          if (data.token) {

            $this.cookieService.setCookie('user_pass', JSON.stringify(data), 1);
            this.toastService.success(data.message);
            $this.router.navigate(['/dashboard']);
          }

        },
        error => {

          console.log("data for login: ", error)

        });

  }
}
