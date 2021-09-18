import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getabnoutme(){
    const about=[
      {icon:'lightbulb', name:'พร้อมเรียนรู้สู้งาน',no:'',grah:''},
      {icon:'school', name:'Kanchanapisekwittayalai Chachengsao',no:'junior high school',grah:'2.54'},
      {icon:'school',name:'Kanchanapisekwittayalai Chachengsao',no:'high school Science-Mathematis',grah:'2.48'},
      {icon:'school', name:'King Mongkuts Institute of Technology Ladkrabang',no:'computer science',grah:'2.06'}
    ]
    return about;
  }
  getBasicskill(){
     const basic= [
       {name:'Microsoft office(word,execl,powerpoint,)'},
       {name:'install Microsoft window7,8,10, ubuntu,'},
       {name:'zoom,AnyDesk,Teamviewer'}
     ]
     return basic;
  }
  getSkill(){
    const skill = [
      {name:'python,Django Fameworks'},
      {name:'php,laravel Fameworks'},
      {name:'MySQL,Microsoft SQL Server'},
      {name:'HTML,CSS,JS'},
      {name:'DOCKER'},
    ]
    return skill;
  }
  getCert() {
     const cert =[
       {name:'Website Devlopment with python-Django Framework at Cons Robotics.co.Ltd'},
       {name:'ux/ui Design CTF02 at thai Programmer'},
       {name:'Basic HTML CSS JS CTF02 at thai Programmer'}
     ]
     return cert;
  }
  getcontact(){
     const contact = [
        {icon:'phone_in_talk', con:'0970060704' },
        {icon:'alternate_email',con:'suparoekmuang@gmail.com'},
        {icon:'work',con:'github.com/Suparoek'},
        {icon:'question_answer',con:'IDLINE: script_beer'}
     ]
     return contact
  }
  getworkspace(){
     const work =[
        {
          pos:'IT Programmer php',
          date:'Nov 2018 - April 2019',
          com:'IS Software.co,ltd',
          des:[
              'developer maintanance system using the language php html js ajax bootstrap4',
              'We already edited an error that the custommer',
              'Create database MySQL/SQL server'
          ]
        },
        {
          pos:'Product Staff',
          date:'Dec 2019 - Feb 2020',
          com:'Saffron Living.Co,Ltd',
          des:[
            'nspect the poduct for quaitly And count the number of products to meet the order'
          ]
        },
        {
          pos:'IT Support',
          date:'Aug 2020 - Dec 2020',
          com:'Sherinkflex(thailand) Pcl',
          des:[
            'Support employees within the organiztion',
            'Install program(OS(window 7,10),Microsoft office)',
            'Manage employee in window server 2012 and file share',
            'Hardware and software maintenance in aliways available',
            'Provide a monthly summary document based on the organization kpi',
          ]
        }

     ]
     return work
  }

}
