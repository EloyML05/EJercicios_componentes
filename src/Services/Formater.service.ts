import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormaterService {

constructor() { }
resversa(palabra: string) {
  return palabra.split('').reverse().join('');
}
desordenada(palabra: string) {
  return palabra.split('').sort().join('');
}
}

