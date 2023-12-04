import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { CookieService } from '../../shared/services/cookie.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-authentication',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {

    }

    navigateToLogin() {
        this.router.navigate(['/login']); // Replace '/login' with your login page route
    }


}