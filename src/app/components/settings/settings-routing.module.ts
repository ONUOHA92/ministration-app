import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemindersComponent } from './reminders/reminders.component';
import { AccessComponent } from './access/access.component';
import { AdminAccessComponent } from './admin-access/admin-access.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'reminder',
                component: RemindersComponent
            },
            {
                path: 'access',
                component: AccessComponent
            },
            {
                path: 'admin-access',
                component: AdminAccessComponent
            },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
