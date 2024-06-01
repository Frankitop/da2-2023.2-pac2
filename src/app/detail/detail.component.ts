import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../service/catfacts.service';
import { CatFact } from '../interfaces/catFact';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  facts: CatFact[] = [];

  constructor(private catfactsService: CatFactsService) { }

  ngOnInit(): void {
    this.facts = this.catfactsService.getAllFacts();
  }

}
