import { BandsBusiness } from "../business/BandsBusiness";
import { BandsInputDTO } from "../model/Bands";
import { Request, Response } from "express";

export class BandsController {

    private bandsBusiness: BandsBusiness
    constructor(){
        this.bandsBusiness = new BandsBusiness
    } 

    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, music_genre, responsible } = req.body;
            const token = req.headers.authorization as string;
            const band: BandsInputDTO = { name, music_genre, responsible };

            if(!token) {
                throw new Error("Não autorizado!");
            };
            
            await this.bandsBusiness.insertBand(band, token)

            res.status(201).send({ message: "Banda cadastrada com sucesso" });
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };

    public getBandById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            const result = await this.bandsBusiness.getBandById(id)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
}