import authOptions from '@/app/auth/authOptions';
import NextAuth from 'next-auth';


// const prisma = new PrismaClient();

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// https://forum.codewithmosh.com/t/nextjs-13-part-2-authentication/23264/8

// import NextAuth from 'next-auth/next';
// import GoogleProvider from 'next-auth/providers/google';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import prisma from '@/prisma/client';
// import { NextAuthOptions } from 'next-auth';

// export const authOptions: NextAuthOptions = {
//   //adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   //session: {strategy:'jwt'}
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
