import { inject, injectable } from "tsyringe";
import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { IPokemonsRepository } from "../../../Domain/Repositories/IPokemonsRepository";
import { ListPokemonsParams } from "../../../Domain/UseCases/ListPokemonsUseCase";
import { IPokemonsDataSource } from "../../DataSources/IPokemonsDataSource";

@injectable()
export class PokemonsRepository implements IPokemonsRepository {
  constructor(
    @inject("PokemonsDataSource")
    protected readonly dataSource: IPokemonsDataSource
  ) {}
  async list({
    skip,
    take,
  }: ListPokemonsParams): Promise<PokemonEntity[] | FailureEntity> {
    try {
      return await this.dataSource.list({ skip, take });
    } catch (error) {
      return new FailureEntity({
        fileName: "PokemonsRepository",
        message: "An error ocurred when fetching pokémons",
      });
    }
  }
}
