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
import { DashboardItens } from "@/components/dashboard/dashboard-Itens.component";

export const metadata: Metadata = {
  title: " Dashboard",
  description: "dashboard do sistema",
};

export default async function Home() {
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
                Images
              </CardTitle>
              <CardDescription>
                Recent transactions from your store.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <DashboardItens />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
