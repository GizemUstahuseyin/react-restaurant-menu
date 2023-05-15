import React from "react";
import americano from '../img/americano.jpg';
import cafelatte from '../img/cafelatte.jpg';
import cappucino from '../img/cappucino.jpg';
import cortado from '../img/cortado.jpg';
import cranberryhibiscus from '../img/cranberryhibiscus.jpg';
import espresso from '../img/espresso.jpg';
import filtre from '../img/filtre.jpg';
import flatwhite from '../img/flatwhite.jpg';
import pinkcoffee from '../img/pinkcoffe.jpg';
import strawberryesfrappe from '../img/strawberryesfrappa.jpg';
import turkkahvesi from '../img/turkkahvesi.jpg';
import { useState , useEffect} from "react"

function Icecekler(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);



  const images =  [americano,cafelatte,cappucino,cortado,cranberryhibiscus,espresso,filtre,flatwhite,pinkcoffee,strawberryesfrappe,turkkahvesi];


    const IceceklerDetay = [
        {
          baslik: "Espresso",
          img: "/img/espresso.jpg",
          aciklama:"uyanmak isteyenler için...",
          fiyat:"50"
    
        },
        {
          baslik: "Americano",
          img: "/img/americano.jpg",
          aciklama:"espresso ve sıcak su ile",
          fiyat:"50"
        },
        {
          baslik: "Filtre Kahve",
          img: "/img/filtre.jpg",
          aciklama:"french press ile servis edilir.",
          fiyat:"50"
    
        },
        {
          baslik: "Flat White",
          img: "/img/flatwhite.jpg",
          aciklama:"espresso, süt ve süt köpüğü ile",
          fiyat:"60"
        },
        {
          baslik: "Cafe Latte",
          img: "/img/cafelatte.jpg",
          aciklama:"espresso, süt ve süt köpüğü ile",
          fiyat:"60"
        },
        {
          baslik: "Cappucino",
          img: "/img/cappucino.jpg",
          aciklama:"espresso ve süt ile",
          fiyat:"60"
    
        },
        {
          baslik: "Cortado",
          img: "/img/cortado.jpg",
          aciklama:"espresso ve dondurma ile",
          fiyat:"80"
        },
        {
          baslik: "Türk Kahvesi",
          img: "/img/turkkahvesi.jpg",
          aciklama:"türk lokumu ile servis edilir",
          fiyat:"80"
        },
        {
          baslik: "Cranberry Hibiscus",
          img: "/img/cranberryhibiscus.jpg",
          aciklama:"berry hibiscus ve yeşil kahve çekirdeği özü, böğürtlen, su, buz",
          fiyat:"100"
    
        },
        {
        baslik: "Pink Coffee",
        img: "/img/pinkcoffe.jpg",
        aciklama:"espresso ve çilek şurubu ile...",
        fiyat:"120"
        },
        {
          baslik: "Strawberry Esfrappe",
          img: "/img/strawberryesfrappa.jpg",
          aciklama:"espresso, çilek şurubu, süt ve süt köpüğü ile",
          fiyat:"120"
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
        <h1 style={{textAlign:"center", color:"white"}}>İçecekler</h1>
            {IceceklerDetay.map((item,index) => (
            <div className="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"28rem" , float: "left"}} id="detay">
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

export default Icecekler;