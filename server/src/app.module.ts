import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import * as process from "process";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { Todo } from "./todo/todo.model";
import { TodoModule } from "./todo/todo.module";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.MYSQL_HOST,
            port: +process.env.MYSQL_PORT,
            username: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DB,
            models: [Todo],
            autoLoadModels: true
        }),
        TodoModule
    ],
})
export class AppModule {
}