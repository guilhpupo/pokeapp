import { PokemonEntity } from "../../Domain/Entities/PokemonEntity";

type ListParams = {
  skip: number;
  take: number;
};

export interface IPokemonsDataSource {
  list(params: ListParams): Promise<PokemonEntity[]>;
}
