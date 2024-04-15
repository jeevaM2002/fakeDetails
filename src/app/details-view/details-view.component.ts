import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Items } from '../pageDate/items';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent implements OnInit {
  item:Items[]= [];

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    const itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getData().subscribe(data => {
      const foundItem= data.find(i => i.id === itemId);
      if(foundItem){
        this.item.push(foundItem)
      }
    });
  }

  goBack(){
    this.router.navigateByUrl("/list-view");
  }
}
