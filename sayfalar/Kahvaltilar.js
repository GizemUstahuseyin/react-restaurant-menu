import React from "react";
import simitlikahvalti from '../img/simitlikahvalti.png';
import fitkahvalti from '../img/fitkahvalti.png';
import expresskahvalti from '../img/expresskahvalti.jpg';
import homeserpme from '../img/homeserpme.png';
import avakadolutost from '../img/avakadolutost.jpg';
import ucpeynirli from '../img/ucpeynirli.jpg';
import { useState , useEffect} from "react"

function Kahvalti(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);

  const images =  [simitlikahvalti,fitkahvalti,expresskahvalti,homeserpme,avakadolutost,ucpeynirli];


    const kahvaltiDetay = [
        {
          baslik: "Simitli Kahvaltı",
          img: "/img/simitlikahvalti.png",
          aciklama:"Kaşar peyniri ile pişmiş göz yumurta, domates, salatalık, zahterli zeytin ve iki bardak çay",
          fiyat:"80"
        },
        {
          baslik: "Fit Kahvaltı",
          img: "/img/fitkahvalti.png",
          aciklama:"Avokado, domates, salatalık, mozzarella peyniri, domatesli biberli yoğurt, siyah zeytin, tam buğday ekmeğinde göz yumurta, kuru meyveler, ceviz, iki bardak çay" ,
          fiyat:"100"
        },
        {
          baslik: "Express Kahvaltı (Tek Kişilik)",
          img: "/img/expresskahvalti.jpg",
          aciklama:"Süzme bal, kaymak, reçel, çikolata, siyah ve yeşil zeytin, zahterli zeytin salatası, beyaz peynir, kaşar peyniri, örgü peyniri, domates, salatalık, sahanda tek yumurta, sigara böreği ve iki bardak çay ile",
          fiyat:"150"
        },
        {
          baslik: "Serpme Kahvaltı",
          img: "/img/homeserpme.png",
          aciklama:"Kuymak, sahanda yumurta, pişi, sigara böreği, patates kızartması, pankek, domates, salatalık, kaşar peyniri, tulum peyniri, van otlu peynir, beyaz peynir, örgü peyniri, süzme bal, tereyağ, zeytin salatası, reçel çeşitleri, tahin pekmez, acuka, çikolata...",
          fiyat:"250"
        },
        {
          baslik: "Avokadolu ve Pestolu Tost",
          img: "/img/avakadolutost.jpg",
          aciklama:"Ekşi maya ekmeği, kaşar peyniri, avokado dilimleri, kızarmış patates ile",
          fiyat:"60"
        },
        {
          baslik: "Üç Peynirli Tost",
          img: "/img/ucpeynirli.jpg",
          aciklama:"Ekşi maya ekmeği, mihaliç peyniri, cheddar peyniri, kaşar peyniri, kızarmış patates ile",
          fiyat:"60"
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
        <h1 style={{textAlign:"center", color:"white"}}>Kahvaltı</h1>
            {kahvaltiDetay.map((item,index) => (
                <div class="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"35rem" , float: "left"}} id="detay">
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

export default Kahvalti;