import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrl: './details-view.component.css'
})
export class DetailsViewComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    const itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getData().subscribe(data => {
      this.item = data.find(i => i.id === itemId);
    });
  }

  goBack(){
    this.router.navigateByUrl("/list-view");
  }
}
