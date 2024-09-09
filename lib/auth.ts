import { AuthOptions,  } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import CredentialProvider from "next-auth/providers/credentials";

import { db as prisma } from "@/lib/db";

import bcrypt from "bcrypt";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", placeholder: "John Smith" },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials, ): Promise<any> {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Dados de Login necessarios");

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Usuários não registrado através de credenciais");
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!matchPassword) throw new Error("Senha incorreta");

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
  },
};
