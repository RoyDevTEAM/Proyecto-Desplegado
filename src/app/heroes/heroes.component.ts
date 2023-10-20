//arhivo generado en el capitulo 1
import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit desde Angular Core
import { Hero } from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts'
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde 'hero.service.ts'

@Component({
  selector: 'app-heroes', // Define el selector HTML para este componente
  templateUrl: './heroes.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./heroes.component.scss'], // Especifica los estilos asociados a este componente
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Declara una propiedad 'heroes' como un arreglo de objetos Hero

  constructor(private heroService: HeroService) {} // Constructor que inyecta el servicio HeroService este esta en el capitulo 4

  ngOnInit(): void {
    this.getHeroes(); // Cuando se inicializa el componente, llama a la función 'getHeroes'
  }

  getHeroes(): void {
    this.heroService.getHeroes() // Llama al método 'getHeroes' del servicio 'heroService' capitulo 4
        .subscribe((heroes) => this.heroes = heroes); // Suscribe y actualiza la propiedad 'heroes' con la lista de héroes obtenida del servicio capitulo 1
  }
}
