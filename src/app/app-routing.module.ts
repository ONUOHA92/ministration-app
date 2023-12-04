import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/login/authentication.component'
import { RegisterComponent } from './authentication/register/register.component';
import { HomeComponent } from './authentication/home/home.component';
import { UsersComponent } from './components/users/users/users.component';
import { HoriFullLayoutComponent } from './shared/layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { ContentLayoutComponent } from './shared/layouts/content-layout/content-layout.component';
import { ErrorLayoutComponent } from './shared/layouts/error-layout/error-layout.component';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { MessageLayoutComponent } from './shared/layouts/message-layout/message-layout.component';
import { Content_Routes, Message_Routes } from './shared/routes/content.routes';
import { Full_Content_Routes } from './shared/routes/full-content.routes';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: FullLayoutComponent, children: Full_Content_Routes },
  { path: '', component: ContentLayoutComponent, children: Content_Routes },
  { path: '', component: MessageLayoutComponent, children: Message_Routes },


  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    // relativeLinkResolution: 'legacy'
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
