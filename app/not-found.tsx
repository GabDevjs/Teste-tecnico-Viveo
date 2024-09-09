"use client";
import { Button } from "@components/ui/button";

export default function NotFound() {
  return (
    <div className="w-screen h-screen ">
      <div className="absolute inset-0 flex justify-center flex-col items-center ">
        <h1 className="z-10 text-5xl cursor-default font-bold font-display sm:text-[10rem] xl:text-[18rem] 2xl:text-[20rem] 2xl:whitespace-nowrap text-center text-ellipsis bg-clip-text mb-2">
          404
        </h1>
        <h1 className="text-3xl  cursor-default font-bold leading-tight sm:text-4xl 2xl:text-5xl 2xl:whitespace-nowrap text-center mb-6">
          Pagina não encontrada :(
        </h1>
        <Button
          className="bg-primary text-white"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Voltar para a Home
        </Button>
      </div>
    </div>
  );
}
