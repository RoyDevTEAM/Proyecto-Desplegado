//este se realiza en el capitulo 3 del tutorial de heroes de angular de su documentacion 
import { Component, OnInit, Input } from '@angular/core'; // Importa los módulos necesarios desde Angular Core
import { ActivatedRoute } from '@angular/router'; // Importa el módulo ActivatedRoute para acceder a los parámetros de la URL
import { Location } from '@angular/common'; // Importa el módulo Location para navegar hacia atrás en la historia del navegador

import { Hero } from '../hero'; // Importa la clase Hero desde el archivo 'hero.ts' que es el capitulo 1
import { HeroService } from '../hero.service'; // Importa el servicio HeroService desde 'hero.service.ts'en el capitulo 4

@Component({
  selector: 'app-hero-detail', // Define el selector HTML para este componente
  templateUrl: './hero-detail.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./hero-detail.component.scss'], // Especifica los estilos asociados a este componente
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero | undefined; // Declara una propiedad de entrada 'hero' de tipo Hero o undefined

  constructor(
    private route: ActivatedRoute, // Inyecta el servicio ActivatedRoute para obtener información de la URL
    private heroService: HeroService, // Inyecta el servicio HeroService llama a este servico creado en el capitulo 4
    private location: Location, // Inyecta el servicio Location para navegar hacia atrás
  ) {}

  ngOnInit(): void {
    this.getHero(); // Cuando se inicializa el componente, llama a la función 'getHero'
  }

  getHero(): void {
    // Obtiene el parámetro 'id' de la URL y convierte su valor a un número
    // TODO: fix the error ceased by ts-ignore
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id) // Llama al método 'getHero' del servicio 'heroService' para obtener un héroe por su ID que esta en el capitulo 3
        .subscribe((hero) => this.hero = hero); // Suscribe y actualiza la propiedad 'hero' con el héroe obtenido
  }

  goBack(): void {
    this.location.back(); // Navega hacia atrás en la historia del navegador utilizando el servicio Location
  }
}
