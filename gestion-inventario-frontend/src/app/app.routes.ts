import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './components/tarea-form/tarea-form.component';

export const routes: Routes = [

    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'tareas',component:TareaListComponent, canActivate: [authGuard]},
    {path:'tareas/new',component:TareaFormComponent, canActivate: [authGuard]},
    {path:'tareas/:id/edit',component:TareaFormComponent, canActivate: [authGuard]},
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    //{path:'home',component:HomeComponent} 

];
