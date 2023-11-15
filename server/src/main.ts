import * as process from "process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);

    app.enableCors()

    const config = new DocumentBuilder()
        .setTitle('Учим Nest.js')
        .setDescription('Документация по RESTful API')
        .setVersion('1.0.0')
        .addTag('kvarcev')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
    
    await app.listen(PORT, () => console.log(`Server started at PORT = ${PORT}`));
}

start()