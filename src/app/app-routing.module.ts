import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./modules/main/about/about.component";
import { BlogComponent } from "./modules/main/blog/blog.component";
import { DemoComponent } from "./modules/main/demo/demo.component";
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from "./modules/auth/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canActivate: [AuthGuard],  loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
