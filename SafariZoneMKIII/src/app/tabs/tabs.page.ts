import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

   public loggedInUserUrl = this.pService.apiUrl + `pokemoncaught/${this.pService.loggedInUser.userEmail}`;


  constructor(private pService: PokedexService, private http: HttpClient) {}

  ngOnInit() {
     this.GetUserLog();
  }

  GetUserLog(){
   this.http.get(this.loggedInUserUrl).subscribe( l => {
      console.log(this.loggedInUserUrl);
      console.log(l);
   })
}
}
