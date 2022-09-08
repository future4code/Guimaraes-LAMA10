export type Bands = {
    id: string,
    name: string,
    music_genre: string,
    responible: string
}

export interface BandsInputDTO {
    name: string,
    music_genre: string,
    responsible: string
}