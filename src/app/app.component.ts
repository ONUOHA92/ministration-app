import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathService } from './shared/services/path.service';
import { RequestService } from './shared/services/request.service';
import { RouteService } from './shared/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'feramy';
  // public isSpinner = true;

  constructor(
    private pathService: PathService,
    private requestService: RequestService,
    private routeService: RouteService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    //   setTimeout(() => {
    //     this.isSpinner = false;
    //   },1000)
  }

  ngAfterViewInit() {

    let status = this.routeService.segment(1) == '';
    console.log("status", status)
    // this.tryCheckAuthentication(status)
  }

  tryCheckAuthentication(status: boolean) {

    if (status) { return; }

    let $this = this;

    setTimeout(() => {

      $this.checkLogin();
    }, 5000)
  }

  checkLogin() {

    let $this = this;

    this.requestService._get(this.pathService.CHECK_TOKEN_ACCESS, function (response, status) {
      if (!status) {
        $this.router.navigate(['/login'])
      }
    })
  }


}
