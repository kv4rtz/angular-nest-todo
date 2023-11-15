import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from "../models/todo.interface";

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: ITodo[], title: string): ITodo[] {
    if (title.length === 0) return todos

    if (title.toLowerCase() === 'true' || title.toLowerCase() === 'false') {
      const boolTitle = title.toLowerCase() === 'true'

      return todos.filter(todo => todo.isCompleted === boolTitle)
    }

    return todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()))
  }

}
