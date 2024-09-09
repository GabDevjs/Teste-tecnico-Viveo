
'use client';
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { ApiResponse } from "@/types/unsplash";
import { useState } from "react";

export function  useGetItens(query: string, perPage?: number) : {
  itens: ApiResponse;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isError: any;
} {

  const { data, error } = useSWR(`/api/unsplash?search=${query ?? ""}&perPage=${perPage ?? 50}`, fetcher);

  return {
    itens: data,
    isLoading: !error && !data,
    isError: error,
  };
}

