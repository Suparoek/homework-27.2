import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillComponent } from './skill/skill.component';
import { ContactmeComponent } from './contactme/contactme.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { WorkspaceComponent } from './workspace/workspace.component';




@NgModule({
  declarations: [
    AboutmeComponent,
    SkillComponent,
    ContactmeComponent,
    WorkspaceComponent
  ],
  imports: [
    CommonModule,MatCardModule,MatIconModule,MatListModule
  ],
  exports: [AboutmeComponent,SkillComponent,ContactmeComponent]
})
export class PortfolioModule { }
