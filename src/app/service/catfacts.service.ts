import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatFact } from '../interfaces/catFact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private http: HttpClient) { }
  catFact:CatFact | undefined;
  catFacts:CatFact[] = [];

  getCatFact() : Observable<CatFact> {
    const newFact = this.http.get<CatFact>("https://meowfacts.herokuapp.com/");
    return newFact
  }

  getAllFacts(): CatFact[] {
    return this.catFacts;
  }

  addFact(fact: CatFact) {
    this.catFacts.push(fact);
  }
}
