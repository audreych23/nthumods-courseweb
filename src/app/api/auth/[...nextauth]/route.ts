import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    process.env.NODE_ENV === "development"
      ? CredentialsProvider({
        id: "dev",
        name: "Credentials",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "jsmith",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize() {
          return {
            id: "b07901001",
            inschool: true,
            name: "王小明",
            name_en: "Wang, Xiao-Ming",
            email: "chewtzihwee@gmail.com"
          }
        },
      })
      : {
        id: "nthu",
        name: "NTHU",
        type: "oauth",
        clientId: process.env.NTHU_OAUTH_CLIENT_ID,
        clientSecret: process.env.NTHU_OAUTH_SECRET_KEY,
        authorization: {
          url: "https://oauth.ccxp.nthu.edu.tw/v1.1/authorize.php",
          params: { scope: "inschool email userid name" }
        },
        token: "https://oauth.nthumods.com/v1.1/token.php",
        userinfo: "https://oauth.nthumods.com/v1.1/resource.php",
        profile(profile, tokens) {
          if (profile.success == false) throw new Error("Failed to fetch user profile");
          return {
            id: profile.userid,
            inschool: profile.inschool,
            name_zh: profile.name,
            name_en: profile.name_en,
            email: profile.email,
          }
        },
      }
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (process.env.NODE_ENV == 'development') {
        return {
          ...token,
          id: "b07901001",
          inschool: true,
          name_zh: "王小明",
          name_en: "Wang, Xiao-Ming",
          email: "chewtzihwee@gmail.com"
        }
      }

      if (account && profile) {
        token.id = profile.id,
        token.name = profile.name_zh,
        token.name_en = profile.name_en,
        token.inschool = profile.inschool,
        token.email = profile.email
      }
      return token
    }
  }
})

export { handler as GET, handler as POST }

