import { Controller, Post } from "@nestjs/common";
import { CatalogoSeedService } from "../service/catalogo.seeds.service";

@Controller('seeds')
export class  CatalogoSeedController{

    constructor(
        private readonly  catalogoSeedService:CatalogoSeedService
    ){}

    @Post()
    create(){
        return this.catalogoSeedService.run()
    }
}
