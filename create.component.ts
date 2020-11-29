import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  public user: any

  constructor(private router:Router) { }

    gotoListPage(pageName:string):void{
      this.router.navigate([`${pageName}`])
    }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user == null){
      this.user = {}
    }
  }

  onSubmit(createForm){
    let key = 'notes'
    let note = localStorage.getItem(key)
    let n = JSON.parse(note)
    if(n == null && !(n instanceof Array)){
       n = []
    }
    n.push(createForm.value)
    localStorage.setItem(key, JSON.stringify(n))
    this.router.navigate(['list'])
  }
  

}
