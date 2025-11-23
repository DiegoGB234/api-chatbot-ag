import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Catalogo } from '../../entities/catalogo.entity';


import { Infraestructura } from '../../entities/infraestructura.entity';
import { Tecnologias } from '../../entities/tecnologias.entity';
import { InformacionGeneral } from '../../entities/informacion-general.entity';
import { ActividadesAcademicas } from '../../entities/actividades-academicas.entity';
import { PreguntasFrecuentes } from '../../entities/preguntas-frecuentes.entity';
import { CATALOGO_SEED_DATA } from '../data/catalogo.data';

@Injectable()
export class CatalogoSeedService {
  private readonly logger = new Logger(CatalogoSeedService.name);

  constructor(
    @InjectRepository(Catalogo,'CHATBOTconnection')
    private catalogoRepo: Repository<Catalogo>,

    @InjectRepository(InformacionGeneral,'CHATBOTconnection')
    private infoRepo: Repository<InformacionGeneral>,

    @InjectRepository(ActividadesAcademicas,'CHATBOTconnection')
    private actRepo: Repository<ActividadesAcademicas>,

    @InjectRepository(PreguntasFrecuentes,'CHATBOTconnection')
    private pregRepo: Repository<PreguntasFrecuentes>,

    @InjectRepository(Infraestructura,'CHATBOTconnection')
    private infraRepo: Repository<Infraestructura>,

    @InjectRepository(Tecnologias,'CHATBOTconnection')
    private tecRepo: Repository<Tecnologias>,
  ) {}

  async run() {
    this.logger.log('🌱 Ejecutando seeds de Catálogo...');

    for (const data of CATALOGO_SEED_DATA) {
      const catalogo = this.catalogoRepo.create({
        name: data.name,
        description: data.description,
      });

      const savedCatalogo = await this.catalogoRepo.save(catalogo);

      // Información General
      for (const info of data.informacionGeneral) {
        await this.infoRepo.save(
          this.infoRepo.create({
            ...info,
            catalogo: savedCatalogo,
          }),
        );
      }

      // Actividades Académicas
      for (const act of data.actividadesAcademicas) {
        await this.actRepo.save(
          this.actRepo.create({
            ...act,
            catalogo: savedCatalogo,
          }),
        );
      }

      // Preguntas Frecuentes
      for (const preg of data.preguntasFrecuentes) {
        await this.pregRepo.save(
          this.pregRepo.create({
            ...preg,
            catalogo: savedCatalogo,
          }),
        );
      }

      // Infraestructura
      for (const infra of data.infraestructura) {
        await this.infraRepo.save(
          this.infraRepo.create({
            ...infra,
            catalogo: savedCatalogo,
          }),
        );
      }

      // Tecnologías
      for (const tec of data.tecnologias) {
        await this.tecRepo.save(
          this.tecRepo.create({
            ...tec,
            catalogo: savedCatalogo,
          }),
        );
      }
    }

    this.logger.log('✨ Seeds de Catálogo ejecutadas correctamente.');
  }
}
