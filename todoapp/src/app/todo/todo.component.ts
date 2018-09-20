import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray:any[]
  editState:boolean=false
  itemToEdit:any
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges()
    .subscribe(item =>{
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
    })
    return this.toDoListArray
  })
  }
  onAdd(newTodo){
    console.log(newTodo.value)
    this.todoService.addTodo(newTodo.value)
    newTodo.value=null
  }
  onDeleteTodo(item:any){
    console.log(item)
    this.todoService.deleteTodo(item)
    this.clearState()
  }
  editTodo(item:string){
    this.editState=true
    this.itemToEdit=item
    console.log(item)
  }
  onUpdate(item:any){
    console.log(item)
    this.todoService.updateTodo(item)
  }
  clearState(){
      this.editState=false;
      this.itemToEdit=null
  }
}
