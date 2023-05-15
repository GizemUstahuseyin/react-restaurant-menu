import React from "react";
import cikolataliberliner from '../img/cikolataliberliner.jpg';
import beyazberliner from '../img/beyazberliner.jpg';
import brownie from '../img/brownie.jpg';
import cikolatalikek from '../img/cikolatalikek.jpg';
import cikolatalikruvasan from '../img/cikolatalikruvasan.jpg';
import cikolataliprofiterol from '../img/cikolataliprofiterol.jpg';
import ekler from '../img/ekler.jpg';
import cilekliekler from '../img/cilekliekler.jpg';
import cileklitart from '../img/cileklitart.jpg';
import limonlutart from '../img/limonlutart.jpg';
import izmirbombasi from '../img/izmirbombasi.jpg';
import limonlucheesecake from '../img/limonlucheesecake.jpg';
import lotuscheesecake from '../img/lotuscheesecake.jpg';
import lotusdonut from '../img/lotusdonut.jpg';
import visnelidonut from '../img/visnelidonut.jpg';
import { useState , useEffect} from "react"


function Tatlilar(props) {
  const images =  [cikolataliberliner,beyazberliner,brownie,cikolatalikek,cikolatalikruvasan,cikolataliprofiterol,ekler,cilekliekler,izmirbombasi,limonlucheesecake,lotuscheesecake,lotusdonut,visnelidonut,cileklitart,limonlutart];

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);

    const TatlilarDetay = [
        {
          baslik: "Çikolatalı Berliner",
          img: "/img/cikolataliberliner.jpg",
          aciklama:"Özel berlin çikolatası dolgulu",
          fiyat:"80"
        },
        {
          baslik: "Beyaz Çikolatalı Berliner",
          img: "/img/beyazberliner.jpg",
          aciklama:"Özel berlin beyaz çikolatası dolgulu", 
          fiyat:"80"
        },
        {
          baslik: "Brownie",
          img: "/img/brownie.jpg",
          aciklama:"yoğun çikolata dolgulu, kakaolu kek",
          fiyat:"80"
    
        },
        {
          baslik: "Çikolatalı Kek",
          img: "/img/cikolatalikek.jpg",
          aciklama:"Özel berlin çikolatası dolgulu, kakaolu kek",
          fiyat:"80"
    
        },
        {
          baslik: "Çikolatalı Kruvasan",
          img: "/img/cikolatalikruvasan.jpg",
          aciklama:"Özel berlin çikolatası dolgulu",
          fiyat:"80"
    
        },
        {
          baslik: "Çikolatalı Profiterol",
          img: "/img/cikolataliprofiterol.jpg",
          aciklama:"Özel berlin çikolatası dolgulu",
          fiyat:"80"
    
        },
        {
          baslik: "Ekler",
          img: "/img/ekler.jpg",
          aciklama:"Özel berlin çikolatası dolgulu",
          fiyat:"80"
    
        },
        {
          baslik: "Ekler Çilekli",
          img: "/img/cilekliekler.jpg",
          aciklama:"Özel çilek kreması dolgulu",
          fiyat:"80"
        },
        {
          baslik: "İzmir Bombası",
          img: "/img/izmirbombasi.jpg",
          aciklama:"yöresel izmir bombası, yoğun çikolata dolgusu ile",
          fiyat:"80"
          
        },
        {
          baslik: "Limonlu Cheesecake",
          img: "/img/limonlucheesecake.jpg",
          aciklama:"limon aromalı" ,
          fiyat:"80"
        },
        {
          baslik: "Lotus Cheesecake",
          img: "/img/lotuscheesecake.jpg",
          aciklama:"lotus biscoff spread ile",
          fiyat:"80"
    
        },
        {
          baslik: "Lotus Donut",
          img: "/img/lotusdonut.jpg",
          aciklama:"lotus biscoff spread ile",
          fiyat:"80"
    
        },
        {
          baslik: "Vişneli Donut",
          img: "/img/visnelidonut.jpg",
          aciklama:"vişne aromalı",
          fiyat:"80"
    
        },
        {
            baslik: "Tart Çilekli",
            img: "/img/cileklitart.jpg",
            aciklama:"çilekli jole ile",
            fiyat:"80"
            },
            {
                baslik: "Tart Limonlu",
                img: "/img/limonlutart.jpg",
                aciklama:"limonlu jole ile",
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
        <h1 style={{textAlign:"center", color:"white"}}>Tatlılar</h1>
            {TatlilarDetay.map((item,index) => (
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

export default Tatlilar;