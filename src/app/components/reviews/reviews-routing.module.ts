import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReviewsComponent
            },
            {
                path: 'performance',
                component: ReviewsComponent
            }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewsRoutingModule { }
