import {ShowsDatabase} from "../data/ShowsDataBase"
import { Show, ShowInputDTO, ShowDays } from "../model/Shows";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";

export class ShowBusiness {

    async insertShow(show: ShowInputDTO, token: string) {

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate();

        const showDatabase = new ShowsDatabase()
        await showDatabase.insertShow(id, show.week_day, show.start_time, show.end_time, show.band_id)

        const authenticator = new Authenticator()
        const tokenData = authenticator.getData(token)

        const Show: Show = {
            id: id,
            start_time: show.start_time,
            end_time: show.end_time,
            week_day: show.week_day,
            band_id: show.band_id
        }
        return Show;
    };

    async getShowById(id: string) {
        
        const showDatabase = new ShowsDatabase()
        const show = showDatabase.getShowById(id)

        return show
    };
}