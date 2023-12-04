import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Access, AuthenticationService } from './auth.service';
import { title } from 'process';


//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  route?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
  show?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy {

  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

    this.authService.setAccess();

    console.log(this.authService.user, 'this --------> auth service')

    console.log("Access -------->, ", this.authService.access)


    console.log('User:', this.authService.user);
    console.log("'is_Admin' in user:", 'is_Admin' in this.authService.user);
    // console.log('user.is_Admin:', this.authService.user.is_Admin);

    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerwidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }

      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      })
    }

    if (
      this.authService.user && this.authService.user.is_Admin === 1
    ) {
      // this.MENUITEMS.push({
      //   path: '/settings/admin-access',
      //   title: 'View Users',
      //   type: 'link',
      //   icon: 'ti-settings',
      //   active: false,
      //   show: true
      // });

      this.MENUITEMS.push({
        path: '/admin/user',
        title: 'Users',
        type: 'link',
        icon: 'ti-user',
        active: false,
        show: true
      });

      // this.MENUITEMS.push({
      //   path: '/admin-ministration/list',
      //   title: 'Admin All ministration',
      //   type: 'link',
      //   icon: 'ti-user',
      //   active: false,
      //   show: true
      // });

      // { path: '/admin/user', title: 'Users', type: 'link', icon: 'user-settings', active: false, show: true },
    }

  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }


  ngOnDestroy() {
    this.unsubscriber.next({});
    this.unsubscriber.complete();
  }

  // this.authService.access.website.read

  MENUITEMS: Menu[] = [

    { headTitle: 'dashboard' },
    {
      path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'ti-home', active: false, show: true
    },

    { path: '/ministration/list', title: 'All Ministration', type: 'link', icon: 'ti-settings', active: false, show: true },
    { path: '/pages/list', icon: 'ti-envelope', title: 'My Minstration', type: 'link', show: true },

    { path: '/all-songs/songs', title: 'All songs', type: 'link', icon: 'ti-settings', active: false, show: true },

    { path: '/create-ministration/list', title: 'Minstration type', type: 'link', icon: 'ti-settings', active: false, show: true },



  ];




  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}




// { path: '/website/user', icon: 'ti-envelope', title: 'Admin access', type: 'link', show: true },
// { path: '/website/layouts', icon: 'ti-envelope', title: 'Layouts', type: 'link', show: true },
// { path: 'users', title: 'Users', type: 'link', icon: 'ti-user', active: false, show: true },
// { path: '/mail/inbox', title: 'Messages', type: 'link', icon: 'ti-envelope', active: false, show: true },
// {
//   title: 'Messages', icon: 'ti-envelope', route: '/mail', type: 'link', active: false, show: true,
//   children: [
//     { path: '/mail/inbox', title: 'Inbox', type: 'link', show: true },
//     { path: '/mail/sms', title: 'SMS', type: 'link' },
//     { path: '/mail/emails', title: 'Push Emails', type: 'link' },
//   ]
// },

// {
//   title: 'Settings', icon: 'ti-settings', type: 'link', active: false, show: true,
//   children: [
//     { path: '/settings/access', title: 'Access', type: 'link', show: true },
//   ]
// }
