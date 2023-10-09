import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";



export default NextAuth({
  
  providers: [
    GithubProvider({
      // clientId: process.env.GITHUB_ID,
      // clientSecret: process.env.GITHUB_SECRET,
      clientId: "df0e3352d6d3c2aa5aae",
      clientSecret: "ae777c63f969cc3825d43caaba58023bf6401567"
    }),
  ],
  // Add other NextAuth.js configuration options here
});
