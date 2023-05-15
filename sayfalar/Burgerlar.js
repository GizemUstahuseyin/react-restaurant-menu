import React from "react";
import hamburger from '../img/hamburger.jpg';
import cheesetekli from '../img/cheeseburger.jpg';
import cheesesteak from '../img/cheesesteak.png';
import tavuklu from '../img/tavuklu.jpg';
import cheeseburger from '../img/chedarlıhamburger.jpg';
import turco from '../img/turco.png';
import { useState , useEffect} from "react"

function Burgerlar(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);

  const images =  [hamburger,cheesetekli,cheesesteak,tavuklu,cheeseburger,turco];


    const BurgerlarDetay = [
        {
          baslik: "Hamburger",
          img: "/img/hamburger.jpg",
          aciklama:"El yapımı köfte ve kızarmış patates ile",
          fiyat:"200"
        },
        {
          baslik: "Cheese Burger",
          img: "/img/cheeseburger.jpg",
          aciklama:"El yapımı köfte, cheddar peyniri ve kızarmış patates ile",
          fiyat:"200"
        },
        {
          baslik: "Tavuklu Burger",
          img: "/img/tavuklu.jpg",
          aciklama:"Tavuk parçaları, cheddar peyniri, kibrit patates ve kızarmış patates ile",
          fiyat:"200"
        },
        {
        baslik: "Philly Cheese Steak Burger",
        img: "/img/cheesesteak.png",
        aciklama:"Sotelenmiş steak, mantar, alman turşusu, kibrit patates, cheddar sosu ve kızarmış patates ile",
        fiyat:"250"
        },
        {
          baslik: "Cheddar Peyniri Soslu Burger",
          img: "/img/chedarlıhamburger.jpg",
          aciklama:"El yapımı köfte, eritilmiş cheddar peynir sosu ve kızarmış patates ile",
          fiyat:"250"
    
        },
        {
          baslik: "Turco Burger",
          img: "/img/turco.png",
          aciklama:"El yapımı köfte, pastırma, közlenmiş patlıcan, yumurta, kaşar peyniri ve kızarmış patates ile",
          fiyat:"250"
    
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
        <h1 style={{textAlign:"center", color:"white"}}>Burgerlar</h1>
            {BurgerlarDetay.map((item,index) => (
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

export default Burgerlar;