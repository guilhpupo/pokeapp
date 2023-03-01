import { IEntity } from "../../../Shared/Interfaces/IEntity";
import { TypeEntity } from "./TypeEntity";
type Props = {
  number: number;
  name: string;
  imageUrl: string;
  description: string;
  primaryType: TypeEntity;
  secondaryType?: TypeEntity;
};
export class PokemonEntity implements IEntity<Props> {
  constructor(public props: Props) {}
}
