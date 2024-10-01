import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Author } from './Author';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Authors.component.html',
  styleUrls: ['./Authors.component.css'],
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];
  constructor(private oHttp: HttpClient) {
    this.getAuthors();
  }

  ngOnInit() {}
  getAuthors(): void {
    this.oHttp.get<Author[]>('https://jsonplaceholder.typicode.com/users').subscribe({
        next: (data: Author[]) => {
            // Seleccionar 3 autores aleatorios sin duplicados
            this.authors = this.getRandomAuthors(data, 3);
        },
        error: (err) => {
            console.error('Error fetching authors:', err);
        },
        complete: () => {
            console.log('Fetching authors completed.');
        }
    });
}

private getRandomAuthors(authors: Author[], count: number): Author[] {
    const uniqueAuthors = new Set<Author>();

    // Asegurarse de que no se seleccionen más autores de los que hay disponibles
    count = Math.min(count, authors.length);

    while (uniqueAuthors.size < count) {
        const randomIndex = Math.floor(Math.random() * authors.length);
        uniqueAuthors.add(authors[randomIndex]); // Agregar al Set
    }

    return Array.from(uniqueAuthors); // Convertir el Set a un Array
}

}
