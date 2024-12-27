import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Items } from '../pageDate/items';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit{
  items: Items[] = [];

  constructor(private dataService: DataService , private router: Router) { }


  ngOnInit(): void {
    this.dataService.getData().subscribe( data => {
      this.items = data;
    })
  }

  
}
