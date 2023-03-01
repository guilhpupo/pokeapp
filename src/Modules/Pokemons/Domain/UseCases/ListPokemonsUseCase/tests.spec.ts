import { ListPokemonsParams, ListPokemonsUseCase } from ".";

import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../../Entities/PokemonEntity";

import { IPokemonsRepository } from "../../Repositories/IPokemonsRepository";

const pokemonRepositoryMock: jest.MockedObject<IPokemonsRepository> = {
  list: jest.fn(),
};

pokemonRepositoryMock.list.mockResolvedValue([] as PokemonEntity[]);
const useCase = new ListPokemonsUseCase(pokemonRepositoryMock);
const defaultParams: ListPokemonsParams = {
  skip: 0,
  take: 20,
};
const failure = new FailureEntity({ fileName: "test", message: "test" });

describe("ListPokemonsUseCase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return a list of pokemons", async () => {
    const result = await useCase.execute(defaultParams);

    expect(pokemonRepositoryMock.list).toBeCalledTimes(1);
    expect(result).not.toBeInstanceOf(FailureEntity);
    expect(result).toBeInstanceOf(Array<PokemonEntity>);
  });
  it("should return a failure", async () => {
    pokemonRepositoryMock.list.mockResolvedValueOnce(failure);

    const result = await useCase.execute(defaultParams);

    expect(pokemonRepositoryMock.list).toBeCalledTimes(1);
    expect(result).toBeInstanceOf(FailureEntity);
  });
});
