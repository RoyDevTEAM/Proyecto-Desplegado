
//este arhivo pertenece al capitulo 4
import { Component, OnInit } from '@angular/core'; // Importa Component y OnInit desde Angular Core
import { MessageService } from '../message.service'; // Importa el servicio MessageService desde 'message.service.ts'

@Component({
  selector: 'app-messages', // Define el selector HTML para este componente
  templateUrl: './messages.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./messages.component.scss'], // Especifica los estilos asociados a este componente
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {} // Constructor que inyecta el servicio MessageService pertenece al capitulo 4

  ngOnInit(): void {} // En el método 'ngOnInit', no se realiza ninguna operación específica
}
