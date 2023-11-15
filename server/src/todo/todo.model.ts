import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TodoCreationAttributes {
    id: number,
    title: string,
    isCompleted: boolean
}

@Table({tableName: 'todos'})
export class Todo extends Model<Todo, TodoCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    isCompleted: boolean
}