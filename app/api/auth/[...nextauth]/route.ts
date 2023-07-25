import NextAuth, { User, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare,hash } from "bcrypt";
import db from "@/lib/drizzle";
import {TBL_ACCOUNT} from '@/drizzle/schema'
import {eq} from 'drizzle-orm'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials ?? {};
        if (!username || !password) {
          throw new Error("Missing username or password");
        }
        const res = await db.select({
          ID: TBL_ACCOUNT.ID,
          FLD_ID: TBL_ACCOUNT.FLD_ID,
          FLD_PASSWORD:TBL_ACCOUNT.FLD_PASSWORD,
          FLD_NAME:TBL_ACCOUNT.FLD_NAME,
          FLD_Mail:TBL_ACCOUNT.FLD_Mail
        }).from(TBL_ACCOUNT).where(eq(TBL_ACCOUNT.FLD_ID,username)).limit(1)
        if (res.length==0){
          throw new Error("Invalid username or password");
        }
        const user = res[0]
        // compare hash to prevent guessing password
        if (!user || !(await compare(password, await hash(user.FLD_PASSWORD, 10)))) {
          throw new Error("Invalid username or password");
        }
        const account = {
          username: user.FLD_ID,
          name : user.FLD_NAME,
          email: user.FLD_Mail
        };

        // Return the complete User object
        return account as User;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    session({ session, token, user }) {
      // for credentials
      session.user.name = token.name;
      session.user.username = token.username;
      session.user.email = token.email;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };