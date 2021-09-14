import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent {
  public nombre: string = 'Fernandoa';
  public genero: string = 'masculino';
  public invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  public clientes: string[] = ['Maria', 'Pedro', 'Maria', 'Pedro'];
  public clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos dos clientes esperando.',
    other: 'Tenemos # clientes esperando.',
  };
  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.shift();
  }
  persona = {
    nombre: 'Henry',
    edad: 37,
    direccion: 'Bogota, Colombia',
  };
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa.');
    }, 3500);
  });
}
