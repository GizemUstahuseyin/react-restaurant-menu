import React from "react";
import tavuklusezar from '../img/tavuklusezar.jpg';
import tonbalikli from '../img/tonbalikli.jpg';
import avakadoluenginar from '../img/avakadoluenginar.jpg';
import kinoalitavuk from '../img/kinoalitavuk.jpg';
import kinoalikofte from '../img/kinoalikofte.jpg';
import beefsalata from '../img/beefsalata.jpg';
import detokssalata from '../img/detokssalata.jpg';
import greeksalata from '../img/greeksalata.jpg';
import kecipeynirli from '../img/kecipeynirli.jpg';
import { useState , useEffect} from "react"


function Salatalar(props) {
  const images =  [tavuklusezar,tonbalikli,kecipeynirli,avakadoluenginar,kinoalitavuk,kinoalikofte,beefsalata,detokssalata,greeksalata];

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);


    const SalatalarDetay = [
        {
          baslik: "Tavuklu Sezar Salata",
          img: "/img/tavuklusezar.jpg",
          aciklama:"ızgara tavuk göğüs, ıceberg, kruton ekmek, sezar sos ve parmesan ile",
          fiyat:"80"
        },
        {
          baslik: "Ton Balıklı Salata",
          img: "/img/tonbalikli.jpg",
          aciklama:"ton balığı, marul, domates, salatalık, dilimli siyah zeytin, mısır, soya filizi, kırmızı soğan ve yağ limon sos ile" ,
          fiyat:"80"
        },
        {
          baslik: "Keçi Peynirli Salata",
          img: "/img/kecipeynirli.jpg",
          aciklama:"keçi peyniri, tost ekmeği, roka, domates, mısır, ceviz ve balsemic sos ile",
          fiyat:"80"
    
        },
        {
          baslik: "Avokadolu Enginar Salatası",
          img: "/img/avakadoluenginar.jpg",
          aciklama:"akdeniz yeşillikleri, kapya biber, ceviz, enginar kalbi, avokado, permasan ve yağ limon sos ile",   
          fiyat:"80" 
        },
        {
          baslik: "Kinoalı Izgara Tavuk Salata",
          img: "/img/kinoalitavuk.jpg",
          aciklama:"tavuk bonfile dilimleri, akdeniz yeşillikleri, maydonoz, kapya biber, mısır, yeşil mercimek, maş fasulyesi, buğday, domates, salatalık ve yağ limon sos ile",
          fiyat:"80"
        },
        {
          baslik: "Kinoalı Izgara Köfte Salata",
          img: "/img/kinoalikofte.jpg",
          aciklama:"ızgara köfte, akdeniz yeşillikleri, maydonoz, kapya biber, mısır,yeşil mercimek, maş fasülyesi, buğday, domates, salatalık ve yağ limon sos ile",
          fiyat:"80"
        },
        {
          baslik: "Beef Salata",
          img: "/img/beefsalata.jpg",
          aciklama:"akdeniz yeşillikleri, jülyen dana bonfile dilimleri, soya filizi, mısır, elma , renkli biberler, mozzarella peyniri ve balsemic sos ile",
          fiyat:"80"
        },
        {
          baslik: "Ispanaklı Detoks Salata",
          img: "/img/detokssalata.jpg",
          aciklama:"baby ıspanak, yaban mersini, kuru üzüm, kuru incir, kuru kayısı, çam fıstığı, susam, nar ekşili ve yağ limon sos ile",
          fiyat:"80"
        },
        {
        baslik: "Greek Salata",
        img: "/img/greeksalata.jpg",
        aciklama:"roka, marul, cherry domates, salatalık, çarliston biber, kapari, siyah dilim zeytin, kruton, ezine beyaz peynir ve yağ limon sos ile",
        fiyat:"80"
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
        <h1 style={{textAlign:"center", color:"white"}}>Salatalar</h1>
            {SalatalarDetay.map((item,index) => (
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

export default Salatalar;