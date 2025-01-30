import { Routes, RouterModule, withRouterConfig } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';




export const routes: Routes = [
    {path: '', redirectTo: '/menu', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path: 'create', component: CreateComponent},
    {path: 'list', component: ListComponent},
    {path: 'update', component: UpdateComponent},
];
