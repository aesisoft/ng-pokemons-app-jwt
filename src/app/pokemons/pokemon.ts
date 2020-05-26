export class Pokemon {
    id: number;           //son id
    nom: string;          // son nom
    ptvie: number;        //pt de vie
    ptdegat: number;      //pt de dégats
    image: string;        //url de son image
    types: Array<string>; //types (feu, etc..)
    created: Date;        //date de création

    //initialisations par défaut
    constructor() { 
      this.id=0;
      this.created = new Date();
      this.types = [];
    }
  }