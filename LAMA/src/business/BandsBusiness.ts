import {BandsDatabase} from "../data/BandsDatabase"
import { Bands, BandsInputDTO } from "../model/Bands";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class BandsBusiness {

    async insertBand(band: BandsInputDTO, token: string) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate();

        const bandsDatabase = new BandsDatabase()
        await bandsDatabase.insertBand(id, band.name, band.music_genre, band.responsible)

        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token)

        const Band: Bands = {
            id: id,
            name: band.name,
            music_genre: band.music_genre,
            responible: band.responsible
        }
        return Band;
    };

    async getBandById(id: string) {
        
        const bandsDatabase = new BandsDatabase()
        const band = bandsDatabase.getBandsById(id)

        return band
    };
}