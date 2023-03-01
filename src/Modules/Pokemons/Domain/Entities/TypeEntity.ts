import { IEntity } from "../../../Shared/Interfaces/IEntity";
type Props = {
  name:
    | "normal"
    | "fighting"
    | "flying"
    | "poison"
    | "ground"
    | "rock"
    | "bug"
    | "ghost"
    | "steel"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy";
};
export class TypeEntity implements IEntity<Props> {
  constructor(public props: Props) {}
}
