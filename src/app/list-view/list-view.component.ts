import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Items } from '../pageDate/items';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {
  items: Items[] = [];

  constructor(private dataService: DataService , private router: Router) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

  goToDetails(item: any) {
    this.router.navigate(['/details-view', item.id]);
  }
}
