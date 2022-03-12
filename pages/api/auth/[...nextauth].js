import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";

export default NextAuth({
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        InstagramProvider({
          clientId: process.env.INSTAGRAM_CLIENT_ID,
          clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        })
    ]
})