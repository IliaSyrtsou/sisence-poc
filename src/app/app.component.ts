import { Component } from '@angular/core';
import { AppService, IAppService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  actions: any[];
  isDdosOn: boolean;
  frequency: number;
  counter: number;

  appService: IAppService;
  
  constructor(AppService: AppService) {
    this.actions = [];
    this.frequency = 1;
    this.appService = AppService;
    this.counter = 1;
  }

  toggleDdos = function () {
    this.isDdosOn = !this.isDdosOn;
    if(!this.isDdosOn)
      clearInterval(this.stopDdosId);
    else
      this.stopDdosId = setInterval(this.ddos.bind(this), 1000/this.frequency);
  }

  ddos = function () {
    this.appService.insertDummyData(this.counter);
    this.counter++;
  }

  logout = function() {
    // Log out by navigating the iFrame to the Logout API
    document.getElementById('ifm').setAttribute('src', 'http://localhost:8083/api/auth/logout');
  }
}
