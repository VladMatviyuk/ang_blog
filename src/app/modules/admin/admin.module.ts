import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DemoComponent } from './demo/demo.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: 'blog', component: BlogComponent},
      { path: 'demo', component: DemoComponent},
      { path: 'about', component: AdminComponent}
    ]}
];

@NgModule({
  declarations: [
    AdminComponent,
    AboutComponent,
    BlogComponent,
    DemoComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminModule { }
