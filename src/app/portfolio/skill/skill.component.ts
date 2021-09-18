import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  basics:Array<any> = new Array();
  skills:Array<any> = new Array();
  certs:Array<any> = new Array();
  constructor(private backendservice:BackendService) { 
     this.basics = backendservice.getBasicskill();
     
     this.skills = backendservice.getSkill();
     
     this.certs = backendservice.getCert();

  }

  ngOnInit(): void {
  }

}
