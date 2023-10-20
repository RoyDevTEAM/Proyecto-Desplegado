//Este código representa el "cap dos" del tutorial de "Heroes" en Angular, donde se define un arreglo de héroes en un archivo llamado 'hero.ts'
import { Hero } from './hero'; // Importa la clase Hero desde el archivo 'hero.ts'

export const HEROES: Hero[] = [ // Define una constante 'HEROES' que es un arreglo de objetos de tipo Hero
  { id: 11, name: 'Lionel Messi' }, // Cada objeto representa un héroe con un ID y un nombre
  { id: 12, name: 'Xavi Hernandez' },
  { id: 13, name: 'Andres Iniesta' },
  { id: 14, name: 'Carles Puyol' },
  { id: 15, name: 'Ronaldinho' },
  { id: 16, name: 'Gerard Pique' },
  { id: 17, name: 'Sergio Busquets' },
  { id: 18, name: 'Luis Suarez' },
  { id: 19, name: 'Neymar Jr.' },
  { id: 20, name: 'Javier Mascherano' },
];
