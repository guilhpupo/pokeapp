import { ListPokemonsUseCase, ListPokemonsUseCaseParams } from ".";
import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../../Entities/PokemonEntity";
import { TypeEntity } from "../../Entities/TypeEntity";
import { IPokemonsRepository } from "../../Repositories/IPokemonsRepository";

const defaultParams: ListPokemonsUseCaseParams = {
  skip: 0,
  take: 20,
};

const sucessListPokemons = jest.fn(
  async (params: { skip: number; take: number }): Promise<PokemonEntity[]> => {
    const pokemon = new PokemonEntity({
      name: "test",
      description: "test",
      imageUrl: "test",
      number: 1,
      primaryType: new TypeEntity({ name: "normal" }),
    });

    const result: PokemonEntity[] = [];

    for (let addTimes = 0; addTimes < params.take; addTimes++) {
      result.push(pokemon);
    }

    return result;
  }
);
const failListPokemons = jest.fn(
  async (params: { skip: number; take: number }): Promise<FailureEntity> => {
    const result = new FailureEntity({ fileName: "test", message: "test" });

    return result;
  }
);

describe("list pokemons use case", () => {
  it("should return a list of pokemons", async () => {
    class PokemonsRepositoryMock implements IPokemonsRepository {
      list = sucessListPokemons;
    }
    const repository = new PokemonsRepositoryMock();
    const useCase = new ListPokemonsUseCase(repository);

    const result = await useCase.execute(defaultParams);

    expect(repository.list).toBeCalled();
    expect(result).not.toBeInstanceOf(FailureEntity);
    expect(result).toBeInstanceOf(Array);

    const list = result as PokemonEntity[];
    expect(list[0]).toBeInstanceOf(PokemonEntity);
  });
  it("should return a failure", async () => {
    class PokemonsRepositoryMock implements IPokemonsRepository {
      list = failListPokemons;
    }
    const repository = new PokemonsRepositoryMock();
    const useCase = new ListPokemonsUseCase(repository);

    const result = await useCase.execute(defaultParams);

    expect(repository.list).toBeCalled();
    expect(result).toBeInstanceOf(FailureEntity);
  });
});
