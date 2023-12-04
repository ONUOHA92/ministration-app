import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMinstrationComponent } from './create-ministration.component';

// import { AllMinistrationComponent } from './all-ministration.component';
// import { MinEditorComponent } from './editor/mineditor.component';

const routes: Routes = [
    {
        path: '',
        children: [

            {
                path: 'list',
                component: CreateMinstrationComponent
            },

            // {
            //     path: ':index/ministration',
            //     component: MinEditorComponent
            // },

        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateMinRoutingModule { }