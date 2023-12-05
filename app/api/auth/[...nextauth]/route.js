import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db/db";
import bcrypt from "bcrypt";

const login = async (credentials) => {

  try {
    if (!credentials?.email || !credentials?.password) {
        return null    
    }
    const user = await db.user.findUnique({ where: {email: credentials.email} });
    if (!user || !user?.hashedPassword) {
        return null;
      }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
    

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};
// possibilité de le faire dans un fichier côté serveur auth.js, export {signOut, signIn, auth} = NextAuth()
export const config = NextAuth({
  adapter: PrismaAdapter(db), // Si on stock sessions en BDD
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;   
      }
      return session;
    },
  },
});

export function auth(...args) {
  return getServerSession(...args, config)
}

const handler = NextAuth(config)
export {handler as GET, handler as POST}