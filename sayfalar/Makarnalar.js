import React from "react";
import alfredo from '../img/alfredo.jpg';
import napoliten from '../img/napoliten.jpg';
import bolognese from '../img/bolognese.jpg';
import arabiata from '../img/arabiata.jpg';
import tortellini from '../img/tortellini.jpg';
import macandcheese from '../img/macandcheese.jpg';
import macbolognese from '../img/macbolognese.jpg';
import manti from '../img/manti.jpg';
import citirmanti from '../img/citirmanti.jpg';
import { useState , useEffect} from "react"


function Makarna(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);


  const images =  [alfredo,napoliten,bolognese,arabiata,tortellini,macandcheese,macbolognese,manti,citirmanti];


    const MakarnaDetay = [
        {
          baslik: "Fettuccine Alfredo",
          img: "/img/alfredo.jpg",
          aciklama:"dilimlenmiş tavuk bonfile, mantar, pesto sos, krema ve parmesan ile",
          fiyat:"110"
        },
        {
          baslik: "Spagetti Napoliten",
          img: "/img/napoliten.jpg",
          aciklama:"domates sos, pesto sos, sarımsak ve parmesan ile" ,
          fiyat:"110"
        },
        {
          baslik: "Spagetti Bolognese",
          img: "/img/bolognese.jpg",
          aciklama:"bolognese sos, pesto sos, sarımsak ve parmesan ile",
          fiyat:"110"
    
        },
        {
          baslik: "Penne Arabiata",
          img: "/img/arabiata.jpg",
          aciklama:"hafif acılı domates sos, pesto sos, sarımsak ve parmesan ile",
          fiyat:"110"
        },
        {
          baslik: "Tortellini",
          img: "/img/tortellini.jpg",
          aciklama:"krema, pesto sos ve parmesan ile",
          fiyat:"110"
        },
        {
          baslik: "Mac and Cheese Chicken",
          img: "/img/macandcheese.jpg",
          aciklama:"cheddar peynirli beşamel sos, dirsek makarna, kaşar gratine ve tavuk parçaları ile",
          fiyat:"110"
        },
        {
          baslik: "Mac and Cheese Bolognese",
          img: "/img/macbolognese.jpg",
          aciklama:"cheddar peynirli beşamel sos, dirsek makarna, kaşar gratine ve bolognese sos ile",
          fiyat:"110"
        },
        {
          baslik: "Mantı",
          img: "/img/manti.jpg",
          aciklama:"yoğurt ve tereyağı ile",
          fiyat:"110"
        },
        {
        baslik: "Çıtır Mantı",
        img: "/img/citirmanti.jpg",
        aciklama:"yoğurt ve tereyağı ile",
        fiyat:"110"
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
        <h1 style={{textAlign:"center", color:"white"}}>Makarnalar</h1>
            {MakarnaDetay.map((item,index) => (
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

export default Makarna;
