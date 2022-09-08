import { Bands } from "../model/Bands";
import { BaseDatabase } from "./BaseDatabase";

export class BandsDatabase extends BaseDatabase {

    private static TABLE_NAME = "LAMA_BANDAS";
  
    public async insertBand(
      id: string,
      name: string,
      music_genre: string,
      responsible: string
    ): Promise<void> {
      try {
        await this.getConnection()
          .insert({
            id,
            name,
            music_genre,
            responsible
          })
          .into(BandsDatabase.TABLE_NAME)
      } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
    };
  
    public async getBandsById(id: string): Promise<Bands> {
      const result = await this.getConnection()
        .select("*")
        .from(BandsDatabase.TABLE_NAME)
        .where({ id });
  
      return result[0];
    }
  
  }