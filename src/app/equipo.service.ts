import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre: 'Samuel',
      especialidad: 'Css',
      Descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consectetur placeat natus maxime. Autem, optio atque omnis eligendi, veritatis excepturi libero blanditiis vitae molestias maxime consectetur deleniti natus neque magni.'
    },
    {
      nombre: 'Camilo',
      especialidad: 'Php',
      Descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consectetur placeat natus maxime. Autem, optio atque omnis eligendi, veritatis excepturi libero blanditiis vitae molestias maxime consectetur deleniti natus neque magni.'
    },
    {
      nombre: 'Stive',
      especialidad: 'Java',
      Descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore consectetur placeat natus maxime. Autem, optio atque omnis eligendi, veritatis excepturi libero blanditiis vitae molestias maxime consectetur deleniti natus neque magni.'
    }
  ]

  constructor(){
    console.log('funcionando');
    
   }

   ObtenerEquipo(){
     return this.equipo;
   }
   ObtenerUno(i){
     return this.equipo[i];
   }
}
