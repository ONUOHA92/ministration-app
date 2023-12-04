import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '/users',
                component: UsersComponent
            },
            {
                path: ':index/details',
                component: DetailsComponent
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobsRoutingModule { }
