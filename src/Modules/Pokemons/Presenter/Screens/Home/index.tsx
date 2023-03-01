import React, { useState } from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import { useInfiniteQuery } from "react-query";

import { container } from "tsyringe";
import CustomText from "../../../../Shared/Components/CustomText";
import Logo from "../../../../Shared/Components/Logo";

import { ListPokemonsUseCase } from "../../../Domain/UseCases/ListPokemonsUseCase";
import PokemonCard from "../../Components/PokemonCard";

const Home = () => {
  const [page, setPage] = useState(0);
  const listPokemonsUseCase = container.resolve(ListPokemonsUseCase);

  const { data, isError, isLoading, fetchNextPage } = useInfiniteQuery(
    "pokemons",
    ({ pageParam }) =>
      listPokemonsUseCase.execute({ skip: pageParam * 10, take: 10 })
  );

  if ((!data || isError) && !isLoading) {
    return <CustomText>Oh no, an error ocurred</CustomText>;
  }

  const loadMore = () => {
    fetchNextPage({ pageParam: page + 1 }).then(() => setPage(page + 1));
  };

  return (
    <View style={styles.wrapper}>
      <Logo />
      <FlatList
        style={styles.list}
        data={data?.pages.map((page) => page).flat()}
        keyExtractor={(item) => item.props.number.toString()}
        renderItem={(item) => <PokemonCard pokemon={item.item} />}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  list: {
    width: "100%",
    marginTop: 30,
  },
});

export default Home;
