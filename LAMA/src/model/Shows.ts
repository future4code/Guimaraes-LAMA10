
export enum ShowDays {
    FRIDAY = 'SEXTA',
    SATURDAY = 'SABADO',
    SUNDAY = 'DOMINGO'
};

export type Show = {
    id: string,
    week_day : ShowDays,
    start_time: number,
    end_time: number,
    band_id: string
};

export interface ShowInputDTO {
    week_day: ShowDays,
    start_time: number,
    end_time: number,
    band_id: string
};
