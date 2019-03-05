import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from '../../models/dtos/create-mensaje-dto';
import { MensajeService } from '../../services/mensaje/mensaje.service';
import { response } from 'express';


@Controller('mensajes')
export class MensajesController {

    constructor (private mensajeService: MensajeService) {}

    @Post()
    Create(@Body() createMessageDto: CreateMensajeDto, @Res() reponse){
        this.mensajeService.crearMensaje(createMessageDto)
                .then( mensaje => {
                    response.status(HttpStatus.CREATED).json(mensaje);
                })
                .catch( () => {
                    response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al crear mensaje'});
                });
    }

    @Get()
    getAll(@Res() reponse) {
        this.mensajeService.getAll()
                .then(mensajeList => {
                    response.status(HttpStatus.OK).json(mensajeList);
                })
                .catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al obtener mensajes'});
        });
    }

    @Put(':id')
    update(@Body() updateMessageDto: CreateMensajeDto, @Res() reponse, 
                @Param('id') idMensaje) {
        this.mensajeService.updateMensaje(idMensaje, updateMessageDto)
                .then(mensaje => {
                    response.status(HttpStatus.OK).json(mensaje);
                })
                .catch(() => {
                    response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al actualizar mensaje'});
                });
    }

    @Delete(':id')
    delete(@Res() reponse, @Param('id') idMensaje) {
        this.mensajeService.deleteMensaje(idMensaje)
                .then(res => {
                    response.status(HttpStatus.OK).json(res);
                })
                .catch(() => {
                    response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al borrar mensaje'});
                });
    }
}
