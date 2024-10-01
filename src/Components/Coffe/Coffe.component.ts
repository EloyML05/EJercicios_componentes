import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Coffe } from './Coffe';

@Component({
  selector: 'app-Coffe',
  standalone: true,
  templateUrl: './Coffe.component.html',
  styleUrls: ['./Coffe.component.css'],
})
export class CoffeComponent implements OnInit {
  img: string = '';
  constructor(private oHttp: HttpClient) {
    this.getCoffe();
  }

  ngOnInit() {}
  getCoffe(): void {
    this.oHttp
      .get<Coffe>('/api/random.json') // Asegúrate de usar este formato
      .subscribe({
        next: (data: Coffe) => {
          console.log(data.file);
          this.img = data.file;
        },
        error: (err) => {
          console.error('Error fetching coffee image:', err);
        },
      });
}


}
