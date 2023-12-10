import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

import {conncetToDB} from "@/utils/database"

console.log("google: " + {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}){

    },
    async singIn({profile}){
        try {
            await conncetToDB();

            return true;
        } catch (error) {
            console.log(error)
            return false;
            
        }

    }
})

export  {handler as GET, handler as POST};