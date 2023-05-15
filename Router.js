import  { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar.js";
import Kahvaltilar from "./sayfalar/Kahvaltilar";
import Anayemekler from "./sayfalar/Anayemekler";
import Tatlilar from "./sayfalar/Tatlilar";
import Salatalar from "./sayfalar/Salatalar";
import Makarnalar from "./sayfalar/Makarnalar";
import Icecekler from "./sayfalar/Icecekler";
import Pizzalar from "./sayfalar/Pizzalar";
import Burgerlar from "./sayfalar/Burgerlar";
import Kids from "./sayfalar/Kids";
import Baslangiclar from "./sayfalar/Baslangiclar";

export default function Router() {
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route path="Kahvaltilar" element= {<Kahvaltilar />} />
                <Route path="Baslangiclar" element= {<Baslangiclar />} />
                <Route path="Anayemekler" element= {<Anayemekler />} />                
                <Route path="Pizzalar" element= {<Pizzalar />} />                
                <Route path="Burgerlar" element= {<Burgerlar />} />                
                <Route path="Makarnalar" element= {<Makarnalar />} />                
                <Route path="Salatalar" element= {<Salatalar />} />
                <Route path="Tatlilar" element= {<Tatlilar />} />                                            
                <Route path="Icecekler" element= {<Icecekler />} />                                            
                <Route path="Kids" element= {<Kids />} />                                            
            </Route>
        </Routes>
    </BrowserRouter>);
   
}