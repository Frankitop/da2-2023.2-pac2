import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../service/catfacts.service';
import { CatFact } from '../interfaces/catFact';

@Component({
  selector: 'catfact-search',
  templateUrl: './catfact-search.component.html',
  styleUrls: ['./catfact-search.component.css']
})
export class CatfactSearchComponent implements OnInit {

  public showButton = false;
  public catFact = '';
  
  constructor(private catfactService:CatFactsService) { }

  ngOnInit(): void {
  }

  getCatFact(){
    this.catfactService.getCatFact().subscribe((response: CatFact) => {
      this.catFact = response.data;
      this.catfactService.addFact(response);
    });
    this.showButton = !this.showButton;
  }

  goToDetail() {
    console.log("Go to Detail");
  }
}
