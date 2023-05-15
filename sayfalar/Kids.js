import React from "react";
import burgerkids from '../img/burgerkids.jpg';
import lahmacunkids from '../img/lahmacunkids.jpg';
import panelitavukkids from '../img/panelitavukkids.jpg';
import patsokids from '../img/patsokids.jpg';
import koftepilavkids from '../img/koftepilavkids.jpg';
import koftekids from '../img/koftekids.jpg';
import { useState , useEffect} from "react"

function Kids(props) {
  
  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);


  const images =  [burgerkids,lahmacunkids,panelitavukkids,patsokids,koftepilavkids,koftekids];


    const KidsDetay = [
        {
          baslik: "Mini Burger",
          img: "/img/burgerkids.jpg",
          aciklama:"Köfte burger ve patates ile servis edilir",
          fiyat:"70"
        },
        {
          baslik: "Mini Lahmacun",
          img: "/img/lahmacunkids.jpg",
          aciklama:"Mini lahmacun ve patates ile servis edilir.",
          fiyat:"70" 
        },
        {
          baslik: "Mini Panelenmiş Tavuk",
          img: "/img/panelitavukkids.jpg",
          aciklama:"Domates soslu spagetti, patates ve panelenmiş tavuk ile servis edilir.",
          fiyat:"100"
    
        },
        {
          baslik: "Mini Patso",
          img: "/img/patsokids.jpg",
          aciklama:"Kızarmış sosis ve patates ile servis edilir.",
          fiyat:"80"
        },
        {
          baslik: "Mini Köfte",
          img: "/img/koftepilavkids.jpg",
          aciklama:"Köfte, pirinç pilavı ve patates ile servis edilir.",
          fiyat:"100"
        },
        {
          baslik: "Mini Spagettili  Köfte",
          img: "/img/koftekids.jpg",
          aciklama:"Köfte, domates soslu spagetti ile servis edilir.",
          fiyat:"100"
        },
    ];
    const SiparisVer = (baslik, fiyat) => {
      const yeniSiparis = {
        baslik,
        fiyat,
      };
      setSiparisListesi([...siparisListesi, yeniSiparis]);
      sessionStorage.setItem("Siparisler", JSON.stringify([...siparisListesi, yeniSiparis]));
    };
  
    const SiparisSil = (index) => {
      const newList = [...siparisListesi];
      newList.splice(index, 1);
      setSiparisListesi(newList);
      sessionStorage.setItem("Siparisler", JSON.stringify(newList));
    };
  
    const GarsonCagir = () => {
      alert("Garson çağrıldı!");
    };

  return (
    <>
    <button type="button" class="btn btn-light" style={{position:"right"}} onClick={() => GarsonCagir()}>Garson Çağır</button>
      
      <div>
      <div style={{ float: "right", width: "30%", backgroundColor:"#a8a8a8"}}>
      <h3 style={{textAlign:"center",padding:"25px"}}>Sipariş Listesi</h3>

      <ul style={{listStyleType:"none"}}>
        {siparisListesi.map((siparis, index) => (
          <li key={index}>
            <center>
              <h5 style={{textAlign:"center",margin:"20px" }}>
                {siparis.baslik} - {siparis.fiyat}{"₺"}</h5>
            <button class="btn btn-sm btn-danger" style={{fontSize:"20px" , margin:"20px",textAlign:"center"}} onClick={() => SiparisSil(index)}>Seçimi Sil</button></center>
            
            <h5 style={{textAlign:"center"}}><b>Toplam Fiyat:</b> {siparisListesi.reduce((acc, curr) => acc + curr.fiyat, 0)} ₺</h5>
          </li>
        ))}
      </ul>
      </div></div>      
        <h1 style={{textAlign:"center", color:"white"}}>Kids</h1>
            {KidsDetay.map((item,index) => (
            <div className="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"30rem" , float: "left"}} id="detay">
            <div key={item.baslik} className="mx-3 py-2">
            <img src={images[index]}  className="card-img-top" />
                <h4 style={{textAlign:"end", textDecoration: "underline"}}>₺{item.fiyat}</h4>
                    <h2 style={{textAlign:"center"}}>{item.baslik}</h2>
                    <p style={{textAlign:"center"}}>{item.aciklama}</p>
                    <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => SiparisVer(item.baslik, item.fiyat)}>Sipariş Ver</button>
            </div>
                </div>
            </div>

        ))}

    </>

  );
}

export default Kids;