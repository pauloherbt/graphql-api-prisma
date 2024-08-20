import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema.js"
const port = process.env.PORT || 8080;
const apolloServer = new ApolloServer({typeDefs,resolvers})
            .listen({port},()=>console.log("Apollo Server Running at port: "+port));