import { Container } from "inversify";
import { IPokemonsRepository } from "../Pokemons/Domain/Repositories/IPokemonsRepository";
import { ListPokemonsUseCase } from "../Pokemons/Domain/UseCases/ListPokemonsUseCase";
import { PokeAPIPokemonsDataSource } from "../Pokemons/External/DataSources/PokeAPIPokemonsDataSource";
import { IPokemonsDataSource } from "../Pokemons/Infra/DataSources/IPokemonsDataSource";
import { PokemonsRepository } from "../Pokemons/Infra/Repositories/PokemonsRepository";

export const Registry = {
  //DataSources
  PokemonsDataSource: Symbol.for("PokemonsDataSource"),

  //Repositories
  PokemonsRepository: Symbol.for("PokemonsRepository"),
  //Use Cases
  ListPokemonsUseCase: Symbol.for("ListPokemonsUseCase"),
};

const container = new Container();

//DataSources
container
  .bind<IPokemonsDataSource>(Registry.PokemonsDataSource)
  .to(PokeAPIPokemonsDataSource);

//Repositories
container
  .bind<IPokemonsRepository>(Registry.PokemonsRepository)
  .toDynamicValue((context) => {
    return new PokemonsRepository(
      context.container.get(Registry.PokemonsDataSource)
    );
  });

//Use Cases
container
  .bind<ListPokemonsUseCase>(Registry.ListPokemonsUseCase)
  .toDynamicValue((context) => {
    return new ListPokemonsUseCase(
      context.container.get(Registry.PokemonsRepository)
    );
  });

export { container };
