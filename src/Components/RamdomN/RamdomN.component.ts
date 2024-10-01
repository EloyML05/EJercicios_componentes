import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-RamdomN',
  standalone: true,
  templateUrl: './RamdomN.component.html',
  styleUrls: ['./RamdomN.component.css']
})
export class RamdomNComponent implements OnInit {

  numero: number = 0;
  constructor(private oHttp: HttpClient) { 
    this.getRandom();
  }

  ngOnInit() {
  }
  getRandom(): void {
    const requestBody = { };
  
    this.oHttp.post<string>("http://localhost:8080/api/dado", requestBody).subscribe({
      next: (data: string) => {
        this.numero = parseInt(data) || 0;
      },
      error: (err) => {
        console.error('Error fetching random number:', err);
      }
    });
  }
  
}

