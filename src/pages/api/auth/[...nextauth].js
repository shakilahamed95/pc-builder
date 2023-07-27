import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages:{
    signIn:'/login'
  }
};
export default NextAuth(authOptions);
