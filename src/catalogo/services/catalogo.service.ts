import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Catalogo } from '../entities/catalogo.entity';
import { CreateCatalogoDto } from '../dto/create-catalogo.dto';
import { UpdateCatalogoDto } from '../dto/update-catalogo.dto';
import { CreateRegisterCatalogoDto } from '../dto/create-register-catalogo.dto';
import { ActividadesAcademicas } from '../entities/actividades-academicas.entity';
import { PreguntasFrecuentes } from '../entities/preguntas-frecuentes.entity';
import { Tecnologias } from '../entities/tecnologias.entity';
import { Infraestructura } from '../entities/infraestructura.entity';
import { InformacionGeneral } from '../entities/informacion-general.entity';

@Injectable()
export class CatalogoService {

  constructor(
    @InjectRepository(Catalogo, 'CHATBOTconnection')
    private readonly catalogoRepository: Repository<Catalogo>,
    @InjectDataSource('CHATBOTconnection')
    private readonly dataSource:DataSource

  ) {}

  // Crear un registro
  async create(createCatalogoDto: CreateRegisterCatalogoDto) {
    return this.dataSource.transaction(async (manager) => {
        const {
          informacionGeneral ,
          infraestructura ,
          tecnologias,
          preguntasFrecuentes,
          actividadesAcademicas,
          ...rest
        } = createCatalogoDto;

        // 1. Verificar existencia
        const catalogoExiste = await manager.exists(Catalogo, {
          where: {
            name: rest.name,
            description: rest.description,
          },
        });

        if (catalogoExiste) {
          throw new NotFoundException(`Ya existe un catálogo con ese nombre y descripción`);
        }

        // 2. Crear catálogo
        const catalogo = manager.create(Catalogo, { ...rest });
        await manager.save(catalogo);

        // ========= 3. Crear relaciones ========= //

        // Información General
        if (informacionGeneral.length > 0) {
          const items = informacionGeneral.map((i) =>
            manager.create(InformacionGeneral, {
              ...i,
              catalogo,
            }),
          );
          await manager.save(items);
        }

        // Infraestructura
        if (infraestructura.length > 0) {
          const items = infraestructura.map((i) =>
            manager.create(Infraestructura, {
              ...i,
              catalogo,
            }),
          );
          await manager.save(items);
        }

        // Tecnologías
        if (tecnologias.length > 0) {
          const items = tecnologias.map((i) =>
            manager.create(Tecnologias, {
              ...i,
              catalogo,
            }),
          );
          await manager.save(items);
        }

        // Preguntas Frecuentes
        if (preguntasFrecuentes.length > 0) {
          const items = preguntasFrecuentes.map((i) =>
            manager.create(PreguntasFrecuentes, {
              ...i,
              catalogo,
            }),
          );
          await manager.save(items);
        }

        // Actividades Académicas
        if (actividadesAcademicas.length > 0) {
          const items = actividadesAcademicas.map((i) =>
            manager.create(ActividadesAcademicas, {
              ...i,
              catalogo,
            }),
          );
          await manager.save(items);
        }

        // ========= 4. Retornar catálogo con relaciones ========= //
        return manager.findOne(Catalogo, {
          where: { id: catalogo.id },
          relations: [
            'informacionGeneral',
            'infraestructura',
            'tecnologias',
            'preguntasFrecuentes',
            'actividadesAcademicas',
          ],
        })
      })
  }


  // Obtener todos
  findAll() {
    return this.catalogoRepository.find();
  }

  // Obtener uno por ID
  async findOne(id: number) {
    const item = await this.catalogoRepository.findOne({ where: { id },relations: [
            'informacionGeneral',
            'infraestructura',
            'tecnologias',
            'preguntasFrecuentes',
            'actividadesAcademicas',
          ], });

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
