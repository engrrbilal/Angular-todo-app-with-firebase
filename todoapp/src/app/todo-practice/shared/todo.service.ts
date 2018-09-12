import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
todoList:AngularFireList<any>
  constructor(private firebasedb:AngularFireDatabase) { }

  getTodoList(){
    this.todoList = this.firebasedb.list('Todos')
    return this.todoList
  }
  addTodo(todo:string){
    this.todoList.push({
      todo:todo,
    })
  }
  deleteTodo($key:string){
    this.todoList.remove($key)
  }
}
