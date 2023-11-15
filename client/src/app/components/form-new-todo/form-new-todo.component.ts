import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../ui/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TodoService } from "../../services/todo.service";
import { ModalService } from "../../services/modal.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-form-new-todo',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './form-new-todo.component.html',
})
export class FormNewTodoComponent {
  constructor(
    private modalService: ModalService,
    private todoService: TodoService
  ) {}

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    this.todoService.create({
      title: this.title.value,
      isCompleted: false
    }).subscribe(() => {
      this.modalService.close()
    })
  }
}
