import { PokemonEntity } from "../Entities/PokemonEntity";
import { ListPokemonsParams } from "../UseCases/ListPokemonsUseCase";

export interface IPokemonsRepository {
  list(params: ListPokemonsParams): Promise<PokemonEntity[]>;
}
