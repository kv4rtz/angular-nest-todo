import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITodo } from "../../models/todo.interface";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { ionCheckbox, ionCheckboxOutline, ionClose } from "@ng-icons/ionicons";
import { TodoService } from "../../services/todo.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, NgIconComponent, HttpClientModule, FormsModule],
  providers: [provideIcons({ ionCheckbox, ionCheckboxOutline, ionClose }), HttpClientModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() todo: ITodo

  constructor(public todoService: TodoService) {}
}
