import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = []; //Declarando tareas como un arreglo
  newTask: string = ''; //Declarando nueva tarea como un string
  input: any;
  botonEditar: string = 'Editar';

  addTask(){
    if(this.newTask.trim() !== ''){ //si newTask es diferente de '' (string vacio)
      this.tasks.push(this.newTask); //Inserta newTask en tasks
      this.newTask = ''; //regresa newTask a '' (string vacio)
    }
  }

  editTask(index:number, input: any){
      input = document.getElementById('input') //Trayendo el valor del input
      input.focus() //Enfocando el input cuando es necesario editar una foto
      this.botonEditar = 'Guardar'; //Cambiando el nombre dinamico del boton de editar para que el usuario sepa donde guardar la tarea.
    if(this.newTask.trim() !== ''){ //si newTask es diferente de '' (string vacio)
      this.tasks[index] = this.newTask //Agregando al indice la tarea actualzada
      this.newTask = '' //Devolviendo el valor vacio a el input
      this.updateTask() //Trayendo la función que cambia el nombre de guardar por editar nuevamente.
    }
  }

  updateTask(){
    this.botonEditar = 'Editar';
  }

  removeTask(index:number) {
    this.tasks.splice(index, 1) //Dandole el indice que debe eliminar, el otro argumento es cuantos elementos eliminara luego de ese.
  }
}
