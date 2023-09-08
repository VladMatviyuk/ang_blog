import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DemoComponent } from './demo/demo.component';
import { SocialComponent } from './about/social/social.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { LinkIconComponent } from "../../shared/components/link-icon/link-icon.component";

import { BrowserModule } from "@angular/platform-browser";
import { ExperienceCardComponent } from './about/experience/experience-card/experience-card.component';
import { BlogCardComponent } from './blog/blog-card/blog-card.component';
import { DemoCardComponent } from './demo/demo-card/demo-card.component';
import { AppModule } from "../../app.module";

@NgModule({
  declarations: [
    AboutComponent,
    BlogComponent,
    DemoComponent,
    SocialComponent,
    ExperienceComponent,
    LinkIconComponent,
    ExperienceCardComponent,
    BlogCardComponent,
    DemoCardComponent
  ],
  imports: [
    BrowserModule,
    AppModule
  ]

})
export class MainModule { }
