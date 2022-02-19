import React from "react";
import ReactDOM from "react-dom";

// import ApolloClient from "apollo-boost";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
// import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const link = createHttpLink({
  uri: "https://api.spacex.land/graphql",
});
// const client = new ApolloClient({
//   link: link as any,
// });

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: link as any,
  cache,
});

ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    {/* <ApolloHooksProvider client={client}> */}
    <App />
    {/* </ApolloHooksProvider> */}
  </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
