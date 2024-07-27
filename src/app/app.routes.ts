import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UplodComponent } from './components/uplod/uplod.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

    {
        path:'login', component:LoginComponent,title:'login'
    },
    {
        path:'upload', component:UplodComponent,title:'upload'
    },
    {
        path:'home', component:HomeComponent,title:'home'
    }
];
