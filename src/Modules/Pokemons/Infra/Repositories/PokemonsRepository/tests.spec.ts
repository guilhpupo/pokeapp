import { PokemonsRepository } from ".";

import { IPokemonsDataSource } from "../../DataSources/IPokemonsDataSource";
import { PokemonEntity } from "../../../Domain/Entities/PokemonEntity";
import { FailureEntity } from "../../../../Shared/Interfaces/FailureEntity";

const pokemonsDataSourceMock: jest.MockedObject<IPokemonsDataSource> = {
  list: jest.fn(),
};
const repository = new PokemonsRepository(pokemonsDataSourceMock);

pokemonsDataSourceMock.list.mockResolvedValue([]);

const defaultParams = {
  skip: 0,
  take: 20,
};

describe("Pokemons Repository", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return a list of pokémons", async () => {
    const result = await repository.list(defaultParams);

    expect(pokemonsDataSourceMock.list).toBeCalledTimes(1);
    expect(result).toBeInstanceOf(Array<PokemonEntity>);
  });
  it("should return a failure entity with a message if datasource throws", async () => {
    pokemonsDataSourceMock.list.mockRejectedValueOnce(new Error("failure"));
    const result = await repository.list(defaultParams);

    expect(pokemonsDataSourceMock.list).toBeCalledTimes(1);
    expect(result).toBeInstanceOf(FailureEntity);
    expect((result as FailureEntity).props.message).toBeDefined();
  });
});
