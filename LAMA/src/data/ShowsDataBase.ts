import { Show, ShowDays } from "../model/Shows";
import { BaseDatabase } from "./BaseDatabase";

export class ShowsDatabase extends BaseDatabase {

    private static TABLE_NAME = "LAMA_SHOWS";
  
    public async insertShow(
        id: string,
        week_day : ShowDays,
        start_time: number,
        end_time: number,
        band_id: string
    ): Promise<void> {
      try {
        await this.getConnection()
          .insert({
            id,
            week_day,
            start_time,
            end_time,
            band_id
          })
          .into(ShowsDatabase.TABLE_NAME)
      } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
    };
  
    public async getShowById(id: string): Promise<Show> {
      const result = await this.getConnection()
        .select("*")
        .from(ShowsDatabase.TABLE_NAME)
        .where({ id });
  
      return result[0];
    }
  
  }