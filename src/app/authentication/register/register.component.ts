import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { CookieService } from '../../shared/services/cookie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-authentication',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    public submitted: boolean = false;

    roles: string[] = ['user', 'admin'];


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentication: AuthenticationService,
        private cookieService: CookieService
        , private toastService: ToastrService
    ) { }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            first_name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]], // Allow only letters and spaces
            last_name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]], // Allow only letters and spaces
            email: ['', [Validators.required, Validators.email]],
            role: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]], // Allow only letters and spaces
            password: ['', Validators.required],
            confirmPassword: ['']
        });
    }

    get registerFormControl() {
        return this.registerForm.controls;
    }

    Submit() {

        let $this = this

        let first_name = this.registerForm.controls['first_name'].value
        let last_name = this.registerForm.controls['last_name'].value
        let email = this.registerForm.controls['email'].value
        let role = this.registerForm.controls['role'].value
        let password = this.registerForm.controls['password'].value
        let confirmPassword = this.registerForm.controls['confirmPassword'].value


        const payload = {
            first_name,
            last_name,
            email,
            role,
            password,
            confirmPassword
        }

        this.authentication.registerUser(payload).subscribe(
            (response) => {
                console.log(response, 'registration response here');
                // Handle the registration success here
                if (response) {
                    this.toastService.success(response.message);
                    $this.router.navigate(['/login']);
                }
            },
            (error) => {
                console.error('Error during registration:', error);
                // Handle the registration error here
            }
        );


    }
}