import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { IUseCase } from "../../../../Shared/Interfaces/IUseCase";
import { PokemonEntity } from "../../Entities/PokemonEntity";
import { IPokemonsRepository } from "../../Repositories/IPokemonsRepository";

export type ListPokemonsUseCaseParams = {
  skip?: number;
  take?: number;
};
export class ListPokemonsUseCase
  implements
    IUseCase<
      ListPokemonsUseCaseParams,
      Promise<PokemonEntity[] | FailureEntity>
    >
{
  constructor(private _repository: IPokemonsRepository) {}
  async execute({
    skip = 0,
    take = 20,
  }: ListPokemonsUseCaseParams): Promise<PokemonEntity[] | FailureEntity> {
    return await this._repository.list({ skip, take });
  }
}
