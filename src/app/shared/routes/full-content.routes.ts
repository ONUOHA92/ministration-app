import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },

    {
        path: 'users',
        loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('../../components/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'all-songs',
        loadChildren: () => import('../../components/all-songs/songs.module').then(m => m.SongsModule)
    },
    {
        path: 'reviews',
        loadChildren: () => import('../../components/reviews/reviews.module').then(m => m.ReviewsModule)
    },
    {
        path: 'website',
        loadChildren: () => import('../../components/website/website.module').then(m => m.WebsiteModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('../../components/admin-users/admin-user.module').then(m => m.AdminUsersModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule)
    },
    {
        path: 'elements',
        loadChildren: () => import('../../components/elements/elements.module').then(m => m.ElementsModule)
    },
    {
        path: 'mail',
        loadChildren: () => import('../../components/mail/mail.module').then(m => m.MailModule)
    },
    {
        path: 'maps',
        loadChildren: () => import('../../components/maps/maps.module').then(m => m.MapsModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../../components/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'ministration',
        loadChildren: () => import('../../components/all-ministration/all-ministration.module').then(m => m.AllMinistrationModule)
    },
    {
        path: 'create-ministration',
        loadChildren: () => import('../../components/create-ministration/create-ministration.module').then(m => m.CreateMinistrationModule)
    },
    {
        path: 'tables',
        loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule)
    },
    {
        path: 'utilities',
        loadChildren: () => import('../../components/utilities/utilities.module').then(m => m.UtilitiesModule)
    },

    {
        path: 'custom-error',
        loadChildren: () => import('../../components/custom/custom.module').then(m => m.CustomModule)
    },

]


