import { ApolloProvider } from "@apollo/client";
import client from "./services";
import { Home } from "./pages/Home";
import "./assets/global.css";

export function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
