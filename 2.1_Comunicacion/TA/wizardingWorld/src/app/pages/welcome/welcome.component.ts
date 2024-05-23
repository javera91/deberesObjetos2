import { Component, OnInit } from '@angular/core';
import { AlbusDumbledoreComponent } from '../../components/albus-dumbledore/albus-dumbledore.component';
import { HarryPotterComponent } from '../../components/harry-potter/harry-potter.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    AlbusDumbledoreComponent,
    HarryPotterComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
