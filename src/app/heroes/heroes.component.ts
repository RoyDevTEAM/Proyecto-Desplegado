import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'obj'
  };
  heroes = HEROES;

  seleccionarHeroe(hero: Hero): void {
    this.hero = { ...hero }; // Crear una copia del héroe seleccionado
  }

  reemplazarHeroe(): void {
    // Encuentra el índice del héroe correspondiente en la lista
    const index = this.heroes.findIndex(h => h.id === this.hero.id);

    if (index !== -1) {
      // Actualiza el nombre del héroe en la lista
      this.heroes[index].name = this.hero.name;

      // Restablece el campo de entrada
      this.hero.name = '';
    } else {
      // Si el héroe no existe en la lista, agrega uno nuevo
      this.hero.id = this.heroes.length + 1;
      this.heroes.push({ ...this.hero });

      // Restablece el campo de entrada
      this.hero.name = '';
    }
  }
}
