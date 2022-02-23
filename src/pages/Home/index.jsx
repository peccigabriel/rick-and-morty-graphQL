import React from "react";
import { Header } from "../../components/header";
import { Loader } from "../../components/loader";
import { LayoutDefault } from "../../components/_layout-default";
import { Pagination } from "../../components/pagination";
import { Card } from "../../components/card";
import { Search } from "../../components/search";
import { NotFound } from "../../components/not-found";
import { GET_CHARACTERS } from "../../graphql/characters.query";
import { useQuery } from "@apollo/client";

export const Home = () => {
  const { data, error, loading, refetch } = useQuery(GET_CHARACTERS, {
    notifyOnNetworkStatusChange: true,
  });
  const [text, setText] = React.useState("");
  const [actualPage, setActualPage] = React.useState(1);

  if (loading) return <Loader />;

  return (
    <>
      <Header action={refetch} setText={setText} />
      <Search
        action={refetch}
        name={text}
        setName={setText}
        setPage={setActualPage}
      />
      {data && !error ? (
        <>
          <LayoutDefault>
            <Card data={data?.characters.results} />
          </LayoutDefault>
          <Pagination
            data={data}
            name={text}
            refetch={refetch}
            setPage={setActualPage}
            page={actualPage}
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};
