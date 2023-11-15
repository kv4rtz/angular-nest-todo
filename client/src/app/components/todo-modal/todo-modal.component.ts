import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTitlePipe } from "../../pipes/modal-title.pipe";
import { ModalService } from "../../services/modal.service";
import { TitleComponent } from "../ui/title/title.component";

@Component({
  selector: 'app-todo-modal',
  standalone: true,
  imports: [CommonModule, ModalTitlePipe, TitleComponent],
  templateUrl: './todo-modal.component.html',
})
export class TodoModalComponent {
  @Input('modal-title') title: string

  constructor(public modalService: ModalService) {
  }

  @HostListener('document:keydown.escape', ['$event'])
  closeModal(event: KeyboardEvent) {
    this.modalService.close()
  }
}
