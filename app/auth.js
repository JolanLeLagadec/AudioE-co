import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import  db  from "@/lib/db/db";
import bcrypt from "bcrypt";

// test avec server actions (implique authConfig, et middleware)(bêta)

const login = async (credentials) => {
  console.log('ici credentialssss', credentials.email)
  try {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }
    const user = await db.user.findUnique({
      where: { email: credentials.email },
    });
    console.log(user, 'ici userrrrrrrr')
    if (!user || !user?.hashedPassword) {
      return null;
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.hashedPassword
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig, 
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