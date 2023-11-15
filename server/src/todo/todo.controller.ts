import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Post()
  create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto)
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() { newTitle }: { newTitle: string }) {
    return this.todoService.update(id, newTitle)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id)
  }
}
