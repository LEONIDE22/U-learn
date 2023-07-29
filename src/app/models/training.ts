import {Statut} from "./statut";
import {Categories} from "./categories";

export class Training {
  id!:number;
  name!: string;
  description!: string;
  duration!: number;
  image_url!: string;
  registered!: number;
  statut!: Statut[];
  category!: Categories[];

}
