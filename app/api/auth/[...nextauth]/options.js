
//import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";
//import { CredentialsProvider } from "next-auth/providers";
//import CredentialsProvider from "next-auth/providers/credentials";

export const options ={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
        //   CredentialsProvider({
        //     // The name to display on the sign in form (e.g. "Sign in with...")
        //     name: "Credentials",
        //     // `credentials` is used to generate a form on the sign in page.
        //     // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        //     // e.g. domain, username, password, 2FA token, etc.
        //     // You can pass any HTML attribute to the <input> tag through the object.
        //     credentials: {
        //       username: { label: "Username", type: "text", placeholder: "jsmith" },
        //       password: { label: "Password", type: "password" }
        //     },
        //     async authorize(credentials, req) {
        //       // Add logic here to look up the user from the credentials supplied
        //       const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
        //       if (user) {
        //         // Any object returned will be saved in `user` property of the JWT
        //         return user
        //       } else {
        //         // If you return null then an error will be displayed advising the user to check their details.
        //         return null
        
        //         // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //       }
        //     }
        //   })
         
           
        
        // GitHubProvider({
        //     clientId:process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         username: {
        //             label: "Username:",
        //             type: "text",
        //             placeholder: "your-cool-username"
        //         },
        //         password: {
        //             label: "Password:",
        //             type: "password",
        //             placeholder: "your-awesome-password"
        //         }
        //     },
        //     async authorize(credentials) {
        //         // This is where you need to retrieve user data 
        //         // to verify with credentials
        //         // Docs: https://next-auth.js.org/configuration/providers/credentials
        //         const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }

        //         if (credentials?.username === user.name && credentials?.password === user.password) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // })
    ],
    pages:{
        signin:'/signin'
      },
    callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@example.com")
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      }
    // pages:{
    //     signin:''
    // }
}