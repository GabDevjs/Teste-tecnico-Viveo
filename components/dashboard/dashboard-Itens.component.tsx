"use client";
import { useGetItens } from "@/hooks/useGetItens";
import * as React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import SearchComponent from "../search.component";

export const DashboardItens = () => {
  const [params, setParams] = React.useState({
    perPage: 30,
    query: "nature",
  });

  const { itens, isLoading } = useGetItens(params.query, params.perPage);

  return (
    <div className="w-full gap-5 flex flex-col">
      <form className="flex-1 sm:flex-initial">
        <label  htmlFor="search" className="font-light ">
          Pesquise aqui imagens do unsplash
        </label>
        <div className="relative mt-2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <SearchComponent search={
            params.query
          } onSearch={(query) => setParams({ ...params, query })} />
        </div>
      </form>

      {isLoading ? ( 
        <div className="flex justify-center items-center h-96">
          <p>Loading...</p>
        </div>  
      ) : (
        <div className="columns-1 md:columns-2 xl:columns-4 gap-7">
        {itens?.results ? itens?.results.map((item) => (
          <div key={item.id} className="break-inside-avoid mb-8">
            <div className="relative  rounded-lg z-10 group">
              <Image
                className="h-auto absolute inset-0 blur-3xl -z-10 opacity-20 group-hover:opacity-80 transition-all duration-500 max-w-full rounded-lg object-cover object-center "
                src={item.urls.small}
                alt={item.alt_description}
                width={item.width}
                height={item.height}
              />
              <Image
                className="h-auto max-w-full rounded-lg object-cover z-20 object-center "
                src={item.urls.small}
                alt={item.alt_description}
                width={item.width}
                height={item.height}
              />
            </div>
          </div>
        )) : (
          <div className="flex w-full justify-center items-center h-96">
            <p>No results found</p>
          </div>  
          )}
      </div>
      )}
    </div>
  );
};
