import { FailureEntity } from "../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../Entities/PokemonEntity";

type ListParams = {
  skip: number;
  take: number;
};

export interface IPokemonsRepository {
  list(params: ListParams): Promise<PokemonEntity[] | FailureEntity>;
}
