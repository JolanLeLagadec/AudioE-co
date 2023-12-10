import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import  db  from "@/lib/db/db";
import bcrypt from "bcrypt";
import { mergeCarts } from "@/lib/actionsCart/actions";

// test avec server actions (implique authConfig, et middleware)(bêta)

const login = async (credentials) => {

  try {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }
    const user = await db.user.findUnique({
      where: { email: credentials.email },
    });

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
    async signIn({ user }){
      await mergeCarts(user.id)
      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.userId = user.id  
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.id = token.userId;
      }
      return session;
    },
  },
});
