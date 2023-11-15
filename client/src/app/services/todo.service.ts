import { Injectable } from '@angular/core';
import { ITodo } from "../models/todo.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, retry, tap } from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: ITodo[] = []

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('http://localhost:7000/todos').pipe(
      retry(2),
      tap(todos => this.todos = todos)
    )
  }

  create(todo: { title: string, isCompleted: boolean }): Observable<ITodo> {
    return this.http.post<ITodo>('http://localhost:7000/todos', todo).pipe(
      tap(v => this.todos.push(v))
    )
  }

  changeTitle(id: number, newTitle: string): Observable<ITodo> {
    return this.http.patch<ITodo>(`http://localhost:7000/todos/${id}`, { newTitle }).pipe(
      tap(() => {
          const findTodo = this.todos.find(v => v.id === id)

          if (findTodo) {
            findTodo.title = newTitle
          }

          return findTodo
        })
    )
  }

  changeComplete(id: number): Observable<ITodo> {
    return this.http.patch<ITodo>(`http://localhost:7000/todos/${id}`, {}).pipe(
      tap(() => {
        const findTodo = this.todos.find(v => v.id === id)

        if (findTodo) {
          findTodo.isCompleted = !findTodo.isCompleted
        }

        return findTodo
      })
    )
  }

  delete(id: number): Observable<ITodo[]> {
    return this.http.delete<ITodo[]>(`http://localhost:7000/todos/${id}`).pipe(
      tap(() => this.todos = this.todos.filter(todo => todo.id !== id))
    )
  }
}
