import { Injectable } from '@angular/core'; // Importa el decorador Injectable desde Angular Core

@Injectable({
  providedIn: 'root' // Marca este servicio como proporcionado a nivel de toda la aplicación
})
export class MessageService {
  messages: string[] = []; // Declara una propiedad 'messages' como un arreglo de cadenas

  add(message: string): void {
    this.messages.push(message); // Agrega un mensaje al arreglo de mensajes
  }

  clear(): void {
    this.messages = []; // Borra todos los mensajes en el arreglo, restableciéndolo vacío
  }
}
