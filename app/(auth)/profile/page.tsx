/* eslint-disable react/no-unescaped-entities */
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

import { Metadata } from "next";
import { Navbar } from "@/components/navbar.component";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile",
  description: "dashboard do sistema",
};

export default async function Profile() {
  const user = await getCurrentUser();

  if (user === undefined) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar user={{ image: user.image }} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>
                Bem vindo, {user.name}
              </CardTitle>
              <CardDescription>
                aqui você pode ver suas informações de perfil
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Card className="xl:col-span-2">
                <CardHeader>
                  <CardTitle>Informações de perfil</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <CardTitle>Nome</CardTitle>
                      <CardDescription>{user.name}</CardDescription>
                    </div>
                    <div className="grid gap-2">
                      <CardTitle>Email</CardTitle>
                      <CardDescription>{user.email}</CardDescription>
                    </div>
                    <div className="grid gap-2">
                      <CardTitle>Imagem</CardTitle>
                      <CardDescription>
                        { user.image === null ? "Sem imagem" : <Image src={user.image ?? ""} width={50} height={50} alt="imagem do usuário" /> }
                      
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
