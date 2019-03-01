import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensajesController } from './controllers/mensajes/mensajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeService } from './services/mensaje/mensaje.service';
import { Mensaje } from './models/mensaje.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'abc123',
      database: 'sendmeapp_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mensaje]) // inyecto la entidad en todos los componentes del módulo para usarla.
  ],
  controllers: [AppController, MensajesController],
  providers: [AppService, MensajeService],
})
export class AppModule {}
