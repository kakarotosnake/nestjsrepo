import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { VideosModule } from './videos/videos.module';
import { AwardsModule } from './awards/awards.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({ // importar variables de entorno en todos los módulos, servicios, eventos, etc.
      isGlobal:true
    }),
    ServeStaticModule.forRoot(
      {
        rootPath:join(__dirname,'..','public'),
      }
    ),
    CoursesModule, AuthModule, VideosModule, AwardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
