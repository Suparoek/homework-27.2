import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  Works:Array<any> = new Array();
  constructor(private service:BackendService) { 
    this.Works = this.service.getworkspace();
  }

  ngOnInit(): void {
  }

}
