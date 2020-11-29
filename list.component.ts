import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { JsonPipe } from '@angular/common';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public notes: any[] = []


  public user: any

  constructor(private router:Router,
    private notesService: NoteService
    ) { }

  gotoCreatePage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe(response =>{
      this.notes = response;
    })
  }

  clearAll(){
    localStorage.removeItem('notes')
    this.notes = []
  }

  delete(ind: number): void {
    this.notes.splice(ind, 1)
    localStorage.setItem('notes', JSON.stringify(this.notes))
  }


}
