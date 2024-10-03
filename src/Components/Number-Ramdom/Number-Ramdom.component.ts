import { Component, OnInit } from '@angular/core';
import { CoffeComponent } from '../Coffe/Coffe.component';
import { RamdomNComponent } from '../RamdomN/RamdomN.component';
import { AuthorsComponent } from '../Authors/Authors.component';

@Component({
  selector: 'app-Number-Ramdom',
  standalone: true,
  templateUrl: './Number-Ramdom.component.html',
  styleUrls: ['./Number-Ramdom.component.css'],
  imports: [CoffeComponent,AuthorsComponent,RamdomNComponent],
})
export class NumberRamdomComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
