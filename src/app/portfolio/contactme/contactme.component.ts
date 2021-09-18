import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  contacts:Array<any> = new Array();
  constructor(private service:BackendService) {

    this.contacts = this.service.getcontact();
   }

  ngOnInit(): void {
  }

}
