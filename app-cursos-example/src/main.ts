import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors:true// para activar el cors(is a mechanism that allows resources to be requested from another domain)
  });
  app.use(json({limit:'60mb'}));

app.enableVersioning({
  defaultVersion:'1',
  type:VersioningType.URI
});


const config=new DocumentBuilder()
.addBearerAuth()
.setTitle('Documentacion API NestJS Curso')
.setDescription('esta es una descripción de la api')
.addTag('courses')
.addTag('videos')
.addTag('awards')
.addTag('auth')
.build();

const document=SwaggerModule.createDocument(app,config);
SwaggerModule.setup('documentation',app,document);
console.log('__ENV__',process.env.PORT);


  app.useGlobalPipes(new ValidationPipe());//validaciones en el dto
  await app.listen(3000);
}
bootstrap();
