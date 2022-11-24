import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import LoginAluno from "./pages/LoginAluno";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
            <>
            <Router>
            <Routes >
                <Route path='/' element={<Home/>} />
                <Route path='/login-aluno' element={<LoginAluno/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
            </Routes>
            </Router>
            </>
    </div>
  );
}

export default App;
