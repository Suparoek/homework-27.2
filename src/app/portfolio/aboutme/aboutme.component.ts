import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { Aboutme } from '../../models/aboutme';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  abouts:Array<any> = new Array();
  constructor(private backendService: BackendService) { 
    this.abouts= backendService.getabnoutme();
  //console.log(this.abouts[0]);
  }

  ngOnInit(): void {
    //this.backendService.getabnoutme();
  }
}
