import React from 'react';
import Header from "./Components/Layout/Header";
import Poster from "./Components/Poster";
import About from "./Components/About";
import CringePoster from "./Components/CringePoster";
import Milkshakes from "./Components/Milkshakes";
import Cake from "./Components/Cake";
import Inst from "./Components/Inst";
import Footer from "./Components/Layout/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <Poster/>
            <About/>
            <CringePoster/>
            <Milkshakes/>
            <Cake/>
            <Inst/>
            <Footer/>
        </>
    );
};

export default App;