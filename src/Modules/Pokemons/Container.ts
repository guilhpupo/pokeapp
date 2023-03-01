import { container } from "tsyringe";
import { IPokemonsRepository } from "./Domain/Repositories/IPokemonsRepository";
import { PokeAPIPokemonsDataSource } from "./External/DataSources/PokeAPIPokemonsDataSource";
import { IPokemonsDataSource } from "./Infra/DataSources/IPokemonsDataSource";
import { PokemonsRepository } from "./Infra/Repositories/PokemonsRepository";

container.register<IPokemonsRepository>("PokemonsRepository", {
  useClass: PokemonsRepository,
});
container.register<IPokemonsDataSource>("PokemonsDataSource", {
  useClass: PokeAPIPokemonsDataSource,
});
