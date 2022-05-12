import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Collection from "./Pages/Collection";
import Detail from "./Pages/Detail";
import HomePage from "./Pages/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://top-weasel-58.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "P027l4s2DILtJkPk5PWZ7XAdVHILyexFZhVvk5IsX0EUgN6VF7tDsgF5eiHPfM5N",
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detailproduk/:id" element={<Detail />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
