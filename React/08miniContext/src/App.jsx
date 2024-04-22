import { useState } from "react";
import UserContextProvider from './context/UserContextProvider'
import "./App.css";

function App() {
  return (
    <UserContextProvider>
<h1>haa bhai abb sabb badia</h1>
    </UserContextProvider>
  );
}

export default App;
