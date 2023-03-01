import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { IPokemonsDataSource } from "../../../Infra/DataSources/IPokemonsDataSource";
import axios from "axios";
import { TypeEntity } from "../../../Domain/Entities/TypeEntity";
import { injectable } from "tsyringe";

@injectable()
export class PokeAPIPokemonsDataSource implements IPokemonsDataSource {
  private _axiosClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  });

  async list(params: { skip: number; take: number }): Promise<PokemonEntity[]> {
    const { data } = await this._axiosClient.get(
      `/pokemon/?offset=${params.skip}&limit=${params.take}`
    );

    const pokemonsList = data.results as { name: string; url: string }[];
    let pokemons: PokemonEntity[] = [];

    for (let index = 0; index < pokemonsList.length; index++) {
      const findResourceResponse = await this._axiosClient.get(
        pokemonsList[index].url
      );
      const findSpeciesResponse = await this._axiosClient.get(
        `pokemon-species/${findResourceResponse.data.id}`
      );
      pokemons.push(
        new PokemonEntity({
          name: findResourceResponse.data.name,
          imageUrl:
            findResourceResponse.data.sprites.other["official-artwork"]
              .front_default,
          number: findResourceResponse.data.id,
          description:
            findSpeciesResponse.data.flavor_text_entries[0].flavor_text,
          primaryType: new TypeEntity({
            name: findResourceResponse.data.types[0].type.name,
          }),
          secondaryType: new TypeEntity({
            name: findResourceResponse.data.types[1]?.type.name,
          }),
        })
      );
    }

    return pokemons;
  }
}
