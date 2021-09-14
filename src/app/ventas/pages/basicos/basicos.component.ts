import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  public nombreLower: string = 'henry';
  public nombreUpper: string = 'HENRY';
  public nombreCompleto: string = 'hEnRy rInCon';
  public fecha: Date = new Date();
}
