import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormaterService } from '../../Services/Formater.service';

@Component({
  selector: 'app-String-Formater',
  standalone: true,
  templateUrl: './String-Formater.component.html',
  styleUrls: ['./String-Formater.component.css']
})
export class StringFormaterComponent implements OnInit {

  palabra: string = '';
  palabraReversa: string = '';
  palabradesordenada: string = '';

  constructor( private oActivatedRoute: ActivatedRoute, oFormaterService: FormaterService) {
    this.palabra = this.oActivatedRoute.snapshot.params['palabra'];
    this.palabraReversa = oFormaterService.resversa(this.palabra);
    this.palabradesordenada = oFormaterService.desordenada(this.palabra);
  }

  ngOnInit() {
  }

}
