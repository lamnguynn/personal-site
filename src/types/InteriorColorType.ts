export enum InteriorOptions {
    TARTUFO = "Tartufo",
    SILVERSTONE = "Silverstone",
    IVORY = "Ivory"
}

export type InteriorKey = keyof typeof InteriorOptions;
export type Interior = `${InteriorOptions}`;