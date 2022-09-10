import { ShowBusiness } from "../business/ShowBusiness";
import { ShowInputDTO } from "../model/Shows";
import { Request, Response } from "express";

export class ShowController {

    private showBusiness: ShowBusiness
    constructor(){
        this.showBusiness = new ShowBusiness
    } ;

    public createShow = async (req: Request, res: Response): Promise<void> => {
        try {
            const { week_day, start_time, end_time, band_id } = req.body;
            const token = req.headers.authorization as string;
            const show: ShowInputDTO = { week_day, start_time, end_time, band_id };

            if(!token) {
                throw new Error("Não autorizado!");
            };
            
            await this.showBusiness.insertShow(show, token)

            res.status(201).send({ message: "Show cadastrado com sucesso" });
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };

    public getShowById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id as string
            const result = await this.showBusiness.getShowById(id)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
}