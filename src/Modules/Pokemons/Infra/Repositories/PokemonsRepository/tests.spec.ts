import { PokemonsRepository } from ".";
import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";
import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { IPokemonsDataSource } from "../../DataSources/IPokemonsDataSource";

const defaultParams = {
  skip: 0,
  take: 20,
};
const sucessListPokemons = jest.fn(
  async (params: { skip: number; take: number }): Promise<PokemonEntity[]> => {
    const result: PokemonEntity[] = [];

    return result;
  }
);
const failListPokemons = jest.fn(
  async (params: { skip: number; take: number }): Promise<PokemonEntity[]> => {
    throw new Error("Error test");
  }
);
describe("Pokemons Repository", () => {
  it("should return a list of pokémons", async () => {
    class PokemonsDataSourceMock implements IPokemonsDataSource {
      list = sucessListPokemons;
    }
    const dataSource = new PokemonsDataSourceMock();
    const repository = new PokemonsRepository(dataSource);

    const result = await repository.list(defaultParams);

    expect(dataSource.list).toBeCalled();
    expect(result).toBeInstanceOf(Array);
  });
  it("should return a failure with a message", async () => {
    class PokemonsDataSourceMock implements IPokemonsDataSource {
      list = failListPokemons;
    }
    const dataSource = new PokemonsDataSourceMock();
    const repository = new PokemonsRepository(dataSource);

    const result = await repository.list(defaultParams);

    expect(dataSource.list).toBeCalled();
    expect(result).toBeInstanceOf(FailureEntity);

    const failure = result as FailureEntity;
    expect(failure.props.message).toBeDefined();
  });
});
