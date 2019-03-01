import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensajeDto } from '../models/dtos/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    Create(@Body() createMessageDto: CreateMensajeDto){
        return 'Mensaje creado.'
    }

    @Get()
    getAll() {
        return 'Lista de todos los mensajes';
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMensajeDto) {
        return 'Mensaje modificado';
    }

    @Delete(':id')
    delete() {
        return 'Mensaje eliminado';
    }
}
