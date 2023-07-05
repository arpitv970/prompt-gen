import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

// handler funtion would be exported so that we can handle the O-Auth of an user

console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECERT,
});

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECERT,
        }),
    ],
    // serverless function -> lambda funtion
    
    async session({ session }) {},
    async signIn({ profile }) {
        try {
        } catch (err) {}
    },
});

export { handler as GET, handler as POST };
