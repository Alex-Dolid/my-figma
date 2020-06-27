import React, { ReactElement, FC } from "react";
import { useStarshipsFetch } from "./hooks/useStarshipsFetch";
import { Starship } from "./types";

export const Starships: FC = () => {
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessageJSX = error && <p>{error}</p>;
  const loaderJSX = isFetching && <p>Loading data from API...</p>;

  const listJSX =
    isFetching ||
    data.results.map(
      ({ name }: Starship, index: number): ReactElement => (
        <li key={Number(index)}>{name}</li>
      )
    );

  return (
    <>
      <h1>Starships</h1>
      {errorMessageJSX}
      {loaderJSX}
      {listJSX}
    </>
  );
};
