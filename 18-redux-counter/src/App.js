import React from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  return (
    <React.Fragment>
      <Header />
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
