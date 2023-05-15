import React from "react";
import italiano from '../img/italiano.jpg';
import verdure from '../img/verdure.jpg';
import karisik from '../img/karisik.jpg';
import margarita from '../img/margarita.jpg';
import ballihardalli from '../img/ballihardalli.jpg';
import barbekusoslu from '../img/barbekusoslu.jpg';
import { useState , useEffect} from "react"

function Pizzalar(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);



  const images =  [italiano,verdure,karisik,margarita,ballihardalli,barbekusoslu];


    const PizzalarDetay = [
        {
          baslik: "Pizza İtaliano",
          img: "/img/italiano.jpg",
          aciklama:"Mozzarella peyniri, fesleğenli domates sos, sucuk, siyah zeytin, közlenmiş biber, kekik ile",
          fiyat:"100"
        },
        {
          baslik: "Pizza Verdure",
          img: "/img/verdure.jpg",
          aciklama:"Mozzarella peyniri, fesleğenli domates sos, biber, zeytin, mısır, közlenmiş biber, domates, taze mantar ile" ,
          fiyat:"100"
        },
        {
          baslik: "Karışık Pizza",
          img: "/img/karisik.jpg",
          aciklama:"Mozzarella peyniri, fesleğenli domates sos, salam, sucuk, mantar, domates, közlenmiş biber, zeytin, kekik ile",
          fiyat:"100"
    
        },
        {
          baslik: "Pizza Margarita",
          img: "/img/margarita.jpg",
          aciklama:"Mozzarella peyniri, fesleğenli domates sos, domates ile",
          fiyat:"100"
        },
        {
          baslik: "Spesiyal Pizza Bal",
          img: "/img/ballihardalli.jpg",
          aciklama:"Bal, hardal, tavuk ile",
          fiyat:"160"
        },
        {
          baslik: "Spesiyal Pizza Barbb",
          img: "/img/barbekusoslu.jpg",
          aciklama:"Mozzarella peyniri, barbekü sos, sucuk ile",
          fiyat:"160"
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
        <h1 style={{textAlign:"center", color:"white"}}>Pizzalar</h1>
            {PizzalarDetay.map((item,index) => (
            <div className="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"35rem" , float: "left"}} id="detay">
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

export default Pizzalar;