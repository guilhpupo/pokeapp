import { inject, singleton } from "tsyringe";

import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { IUseCase } from "../../../../Shared/Interfaces/IUseCase";

import { PokemonEntity } from "../../Entities/PokemonEntity";
import { IPokemonsRepository } from "../../Repositories/IPokemonsRepository";

export type ListPokemonsParams = {
  skip: number;
  take: number;
};

@singleton()
export class ListPokemonsUseCase
  implements
    IUseCase<ListPokemonsParams, Promise<PokemonEntity[] | FailureEntity>>
{
  constructor(
    @inject("PokemonsRepository")
    protected readonly repository: IPokemonsRepository
  ) {}
  async execute({
    skip,
    take,
  }: ListPokemonsParams): Promise<PokemonEntity[] | FailureEntity> {
    return await this.repository.list({ skip, take });
  }
}
