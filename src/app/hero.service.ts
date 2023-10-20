import { Injectable } from '@angular/core'; // Importa el decorador Injectable desde Angular Core
import { Observable, of } from 'rxjs'; // Importa Observables y el operador 'of' desde RxJS
import { Hero } from './hero'; // Importa la clase Hero desde el archivo 'hero.ts'
import { HEROES } from './mock-heroes'; // Importa el arreglo HEROES desde 'mock-heroes.ts'
import { MessageService } from './message.service'; // Importa el servicio MessageService

@Injectable({
  providedIn: 'root' // Marca este servicio como proporcionado a nivel de toda la aplicación
})
export class HeroService {
  constructor(private messageService: MessageService) {} // Constructor que inyecta el servicio MessageService

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); // Crea un Observable de héroes a partir del arreglo HEROES
    this.messageService.add('HeroService: fetched heroes'); // Agrega un mensaje al servicio MessageService
    return heroes; // Devuelve el Observable de héroes
  }

  getHero(id: number): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`); // Agrega un mensaje al servicio MessageService con el ID del héroe
    return of(HEROES.find((hero) => hero.id === id)); // Busca un héroe por su ID en el arreglo HEROES y lo convierte en un Observable
  }
}
