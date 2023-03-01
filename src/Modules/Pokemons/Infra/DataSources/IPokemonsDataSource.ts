import { PokemonEntity } from "../../Domain/Entities/PokemonEntity";
import { ListPokemonsParams } from "../../Domain/UseCases/ListPokemonsUseCase";

export interface IPokemonsDataSource {
  list(params: ListPokemonsParams): Promise<PokemonEntity[]>;
}
