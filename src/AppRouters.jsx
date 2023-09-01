import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./components/Main";
import Chasi from "./components/Chasi";
import Props from "./components/Props";
import Sobitiya from "./components/Sobitiya";
import State from "./components/State";
import CompozitionComponent from "./components/CompozitionComponent";
import StateOnClass from "./components/StateOnClass";
import VstroenOperIf from "./components/VstroenOperIf";
import ListenAndKey from "./components/ListenAndKey";
import Forms from "./components/Forms";
import PodnatieSostVverh from "./components/PodnatieSostVverh";
import Compozition from "./components/Compozition";

const AppRouters=()=>{
    return(
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/chasi" element={<Chasi/>}/>
            <Route path="/props" element={<Props Sname="Sasha" Sage="23"/>}/>
            <Route path="/sobitiya" element={<Sobitiya/>}/>
            <Route path="/state" element={<State/>}/>
            <Route path="/CompozitionComponent" element={<CompozitionComponent/>}/>
            <Route path="/StateOnClass" element={<StateOnClass/>}/>
            <Route path="/vstoperif" element={<VstroenOperIf/>}/>
            <Route path="/ListenAndKey" element={<ListenAndKey/>}/>
            <Route path="/Forms" element={<Forms/>}/>
            <Route path="/PodnatieSostVverh" element={<PodnatieSostVverh/>}/>
            <Route path="/Compozition" element={<Compozition/>}/>
        </Routes>
    );
}

export default AppRouters;