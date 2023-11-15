import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { TodoModalComponent } from "./components/todo-modal/todo-modal.component";
import { ModalService } from "./services/modal.service";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { ionAdd, ionChevronBackOutline, ionChevronForwardOutline } from "@ng-icons/ionicons";
import { ButtonComponent } from "./components/ui/button/button.component";
import { TitleComponent } from "./components/ui/title/title.component";
import { FormNewTodoComponent } from "./components/form-new-todo/form-new-todo.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoService } from "./services/todo.service";
import { FilterTodosPipe } from "./pipes/filter-todos.pipe";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule, PaginationInstance, PaginationService } from "ngx-pagination";
import { tap } from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoModalComponent, NgIconComponent, ButtonComponent, TitleComponent, FormNewTodoComponent, TodoItemComponent, FilterTodosPipe, FormsModule, NgxPaginationModule],
  providers: [provideIcons({ ionAdd, ionChevronBackOutline, ionChevronForwardOutline }), TodoService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  term = ''

  public config: PaginationInstance = {
    id: 'paginate-for-todos',
    itemsPerPage: 8,
    currentPage: 1
  };

  constructor(
    public todoService: TodoService,
    public modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe()
  }
}
