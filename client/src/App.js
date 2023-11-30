import React, {Component} from "react"; //! Biblioteca do react a ser instalada com o pacote de "Component";
import logo from "./logo.svg";
import "./App.css";
import Register from './pages/Register';
import Localizacao from "./pages/localizacao";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
//! Basicamente a função abaixo se trata de classificar o "App" como uma extensão de que o "Component" faz;
function App(){
    
    return (
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/register" element={<Register />}/>
            <Route index path="/localizacao" element={<Localizacao/>}/>
          </Routes>
        </BrowserRouter>
    );
};

export default App;