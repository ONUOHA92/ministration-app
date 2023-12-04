import { Component, OnInit, AfterViewInit, Inject, OnChanges } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { DOCUMENT } from '@angular/common';
import { User } from '../../models/auth.models';
import { AuthenticationService } from '../../services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public isCollapsed = true;
  public isSidebar = false;
  public config: any = {};
  public user: any

  layoutSubscription: Subscription;
  toggleClass = "fe fe-maximize";

  // public profile_image = `${environment}/profile/images/user_default.jpeg`

  constructor(
    private layoutService: LayoutService,
    private authService: AuthenticationService,
    public navServices: NavService,
  ) {

    this.layoutSubscription = layoutService.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;
      })

    this.user = this.authService.currentUser();
    console.log(this.user, 'user --------')
  }

  ngOnInit(): void {

    // this.profile();
  }
  categories = [
    { id: 1, name: 'Jobs' },
    { id: 2, name: 'Users' },
  ]

  toggleSidebarNotification() {
    this.layoutService.emitSidebarNotifyChange(true);
  }

  toggleSidebar() {
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-hide');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-hide');
    }
  }

  toggleMobileSidebar() {
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.main-body').classList.add('main-sidebar-show');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-sidebar-show');
    }
  }

  ngAfterViewInit() {
    const sidebar = document.querySelector('.side-menu');
    let ps = new PerfectScrollbar(sidebar);


  }

  // profile() {

  //   let profile = `${environment.apiUrl}/storage/profile/images/user_${this.user.id}.jpeg`;
  //   let $this = this;
  //   this.authService.imageExists(profile, function (exists) {
  //     // console.log("Image Response:::::", exists)
  //     if (exists) {
  //       $this.profile_image = profile;
  //     }

  //   })
  // }

}

