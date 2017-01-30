export class Country {
    Code: number;
    Name: string;
    Continent: string;
    StatusId: number;

    constructor(Code: number, Name: string, Continent: string, StatusId: number) {
        this.Code = Code;
        this.Name = Name;
        this.Continent = Continent;
        this.StatusId = StatusId;
    }
}