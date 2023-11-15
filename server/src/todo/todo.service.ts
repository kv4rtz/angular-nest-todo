import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Todo } from "./todo.model";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo) private todoDataBase: typeof Todo) {
    }

    async getAll() {
        return await this.todoDataBase.findAll();
    }

    async create(dto: CreateTodoDto) {
        return await this.todoDataBase.create(dto);
    }

    async delete(id: number) {
        return await this.todoDataBase.destroy({
            where: { id }
        })
    }

    async update(id: number, newTitle: string) {
        if(!newTitle) {
            const { isCompleted } = await this.todoDataBase.findOne({
                where: { id }
            })

            return await this.todoDataBase.update({ isCompleted: !isCompleted }, { where: { id } })
        }

        return await this.todoDataBase.update({ title: newTitle }, { where: { id } })
    }
}
