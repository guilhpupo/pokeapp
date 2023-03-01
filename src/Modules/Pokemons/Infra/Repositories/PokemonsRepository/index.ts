import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { IPokemonsRepository } from "../../../Domain/Repositories/IPokemonsRepository";
import { IPokemonsDataSource } from "../../DataSources/IPokemonsDataSource";

export class PokemonsRepository implements IPokemonsRepository {
  constructor(private _dataSource: IPokemonsDataSource) {}
  async list(params: {
    skip: number;
    take: number;
  }): Promise<PokemonEntity[] | FailureEntity> {
    try {
      const result = await this._dataSource.list(params);
      return result;
    } catch (error) {
      return new FailureEntity({
        fileName: "PokemonsRepository",
        message: "An error ocurred when fetching pokémons.",
      });
    }
  }
}
