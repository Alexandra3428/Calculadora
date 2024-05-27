import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre!: string;
  public apellido!: string;
  public nota1!: number;
  public nota2!: number;
  public nota3!: number;
  public promedio!: number;
  public history: any[] = [];

  constructor() {}

  calcularPromedio() {
    const totalNotas = this.nota1 + this.nota2 + this.nota3;
    this.promedio = parseFloat((totalNotas / 3).toFixed(1)); // Formatea el promedio a una cifra decimal
  }

  guardarEstudiante() {
    const estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      promedio: this.promedio
    };
    this.history.push(estudiante);
    this.ordenarEstudiantes();
    this.limpiarCampos();
  }

  ordenarEstudiantes() {
    this.history.sort((a, b) => b.promedio - a.promedio);
  }

  limpiarCampos() {
    this.nombre = '';
    this.apellido = '';
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;
    this.promedio = 0;
  }
}
