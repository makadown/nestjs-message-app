import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from '../../models/mensaje.entity';
import { Repository, DeleteResult } from 'typeorm';
import { CreateMensajeDto } from '../../models/dtos/create-mensaje-dto';

@Injectable()
export class MensajeService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) {}

  async getAll(): Promise<Mensaje[]> {
      return await this.mensajeRepository.find(); 
  }

  async crearMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje> {
        const nuevo = new Mensaje();
        nuevo.message = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;

        return await this.mensajeRepository.save(nuevo);
  }

  async updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje> {
        const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.nick = mensajeActualizar.nick;
        mensajeUpdate.message = mensajeActualizar.mensaje;

        return await this.mensajeRepository.save(mensajeUpdate);
  }

  async deleteMensaje(idMensaje: number): Promise<any> {
      return await this.mensajeRepository.delete(idMensaje);
  }
}
