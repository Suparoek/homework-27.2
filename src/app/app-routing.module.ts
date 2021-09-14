import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes ,} from '@angular/router';
import { AboutmeComponent } from './portfolio/aboutme/aboutme.component';
import { ContactmeComponent } from './portfolio/contactme/contactme.component';
import { SkillComponent } from './portfolio/skill/skill.component';
import { WorkspaceComponent } from './portfolio/workspace/workspace.component';
const routes: Routes = [
    {path: 'aboutme',component: AboutmeComponent },
    {path: 'contactme',component:ContactmeComponent},
    {path: 'skill',component:SkillComponent},
    {path: 'work',component: WorkspaceComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
