import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { GetJsonComponent } from './get-json/get-json.component';
import { PatchComponent } from './patch/patch.component';
import { PutComponent } from './put/put.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'get', component: GetComponent},
    {path:'post', component: PostComponent},
    {path:'get-json', component: GetJsonComponent},
    {path:'patch', component:PatchComponent},
    {path:'put', component:PutComponent},
    {path:'delete', component: DeleteComponent}
];
