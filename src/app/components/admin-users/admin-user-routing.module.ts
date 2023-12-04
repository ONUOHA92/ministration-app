import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindersComponent } from './reminders/reminders.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
// import { AdminU } from './admin-access/admin-access.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reminder',
                component: RemindersComponent
            },
            {
                path: 'user',
                component: AdminUserComponent
            },

        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminUserRoutingModule { }
