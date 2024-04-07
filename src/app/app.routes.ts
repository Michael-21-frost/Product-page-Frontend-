import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('../app/modules/about-us/about-us/about-us.module').then((m) => m.AboutUsModule),
      },
];
