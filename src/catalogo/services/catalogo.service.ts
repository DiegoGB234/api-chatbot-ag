import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Catalogo } from '../entities/catalogo.entity';
import { CreateCatalogoDto } from '../dto/create-catalogo.dto';
import { UpdateCatalogoDto } from '../dto/update-catalogo.dto';

@Injectable()
export class CatalogoService {

  constructor(
    @InjectRepository(Catalogo, 'CHATBOTconnection')
    private readonly catalogoRepository: Repository<Catalogo>,
  ) {}

  // Crear un registro
  async create(createCatalogoDto: CreateCatalogoDto) {
    const newCatalogo = this.catalogoRepository.create(createCatalogoDto);
    const saved = await this.catalogoRepository.save(newCatalogo);
    return saved; // ya tiene ID asignado
  }

  // Obtener todos
  findAll() {
    return this.catalogoRepository.find();
  }

  // Obtener uno por ID
  async findOne(id: number) {
    const item = await this.catalogoRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException(`Catalogo #${id} not found`);

    return item;
  }

  // Actualizar
  async update(id: number, updateCatalogoDto: UpdateCatalogoDto) {
    const catalogo = await this.findOne(id);

    const updated = Object.assign(catalogo, updateCatalogoDto);

    return this.catalogoRepository.save(updated);
  }

  // Eliminar
  async remove(id: number) {
    const catalogo = await this.findOne(id);
    await this.catalogoRepository.remove(catalogo);

    return {
      message: `Catalogo #${id} has been removed`,
    };
  }
}
