"use client";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AuthButton({ page }: { page: string }) {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href={page === "register" ? "/login" : "register"}
          className={cn(
            buttonVariants({ variant: "ghost" }),
          )}
        >
          {page === "register" ? "Entre com a sua conta" : "Crie uma conta"}
        </Link>
      ) : (
        <Button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className={cn(
            buttonVariants({ variant: "ghost" }),
          )}
        >
          Sair
        </Button>
      )}
    </>
  );
}
