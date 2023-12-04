import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMinistrationComponent } from './all-ministration.component';
import { MinEditorComponent } from './editor/mineditor.component';

const routes: Routes = [
    {
        path: '',
        children: [

            {
                path: 'list',
                component: AllMinistrationComponent
            },

            {
                path: ':index/ministration',
                component: MinEditorComponent
            },

        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllMinRoutingModule { }









// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AllMinistrationComponent } from '../all-ministration/all-ministration.component';
// import { MinEditorComponent } from '../all-ministration/editor/mineditor.component';



// const routes: Routes = [
//     {
//         path: '',
//         children: [
//             {
//                 path: 'list',
//                 component: AllMinistrationComponent
//             },
//             {
//                 path: ':index/ministration',
//                 component: MinEditorComponent
//             },

//         ]
//     }

// ];
// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class AllMinistrationRoutingModule { }