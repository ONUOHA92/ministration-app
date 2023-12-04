import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RemindersComponent } from './reminders/reminders.component';
import { SongComponent } from './songs/songs.component';
// import { AdminAccessComponent } from './admin-access/admin-access.component';

const routes: Routes = [
    {
        path: '',
        children: [

            {
                path: 'songs',
                component: SongComponent
            },

        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SongsRoutingModule { }
