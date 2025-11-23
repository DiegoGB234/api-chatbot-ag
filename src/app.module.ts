import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatalogoControllers } from './catalogo/controllers/catalogo-index-controller';
import { CatalogoEntites } from './catalogo/entities/catalogo-index';
import { CatalogoServices } from './catalogo/services/catalogo-index-service';
import { CatalogoSeedController } from './catalogo/seeds/controller/catalogo.seeds.controller';
import { CatalogoSeedService } from './catalogo/seeds/service/catalogo.seeds.service';
import { CatalogoService } from './catalogo/services/catalogo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'masterL',
      password: 'diego@124',
      database: 'catalogo_chatbot_db',
      name: 'CHATBOTconnection',
      synchronize: true,
      autoLoadEntities: false,    
      entities: [...CatalogoEntites]
    }),
    TypeOrmModule.forFeature([...CatalogoEntites], 'CHATBOTconnection'),
  ],

  controllers: [CatalogoSeedController,...CatalogoControllers],
  providers: [CatalogoSeedService,...CatalogoServices],
  exports: [CatalogoSeedService,...CatalogoServices],
})
export class AppModule {}
