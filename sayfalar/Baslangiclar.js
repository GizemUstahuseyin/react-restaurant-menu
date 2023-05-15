import React from "react";
import cacjunchicken from '../img/cacjunchicken.jpg';
import sigaraboregi from '../img/sigaraboregi.jpg';
import patates from '../img/patates.jpg';
import cheddarlipatates from '../img/cheddarlipatates.jpg';
import mozerellasticks from '../img/mozerellasticks.jpg';
import combo from '../img/combo.jpg';
import fitcorba from '../img/fitcorba.jpg';
import balkabagi from '../img/balkabagi.jpg';
import balikcorbasi from '../img/balikcorbasi.jpg';
import { useState , useEffect} from "react"




function Baslangiclar(props) {

  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);

  const images =  [cacjunchicken,sigaraboregi,patates,cheddarlipatates,mozerellasticks,combo,fitcorba,balkabagi,balikcorbasi];

    const BaslangiclarDetay = [
        {
          baslik: "Cajun Chicken Fingers",
          img: "/img/cacjunchicken.jpg",
          aciklama:"cajun baharatı ile marine edilmiş çıtır tavuk parçaları, parmak patates ve ballı hardal sos ile",
          fiyat:"120"
          
        },
        {
          baslik: "Sigara Böreği",
          img: "/img/sigaraboregi.jpg",
          aciklama:"sigara böreği, patates tava ve ranch sos ile", 
          fiyat:"80"
        },
        {
          baslik: "Patates Tava",
          img: "/img/patates.jpg",
          aciklama:"tercihen cajun baharat ile servis edilebilir",
          fiyat:"80"

    
        },
        {
          baslik: "Cheddar Soslu Patates Tava",
          img: "/img/cheddarlipatates.jpg",
          aciklama:"cheddar sos ile servis edilir ",  
          fiyat:"90"
  
        },
        {
          baslik: "Mozerella Sticks",
          img: "/img/mozerellasticks.jpg",
          aciklama:"patates tava, ranch sos ile", 
          fiyat:"110"
  
        },
        {
          baslik: "Combo Tabağı",
          img: "/img/combo.jpg",
          aciklama:"mozzarella sticks, chicken fingers, soğan halkası, sigara böreği, patates tava, ranch sos ve sweet chilli sos ile",
          fiyat:" 160"    
        },
        	
{
  baslik:"Sebzeli Fit Çorba",
  img:"/img/fitcorba.jpg",
  aciklama:"Brokoli ve mevsim sebzeleriyle hazırlanır.",
  fiyat:"120"

},
{
  baslik:"Balkabağı Çorbası",
  img:"/img/balkabagi.jpg",
  aciklama:"domates püresi, balkabağı ve Parmesan peyniri ile hazırlanır, bir tutam mercanköşk ve nane ile servis edilir. ",
  fiyat:"120"

},
{
  baslik:"Aljotta (Balık Çorbası)",
  img:"/img/balikcorbasi.jpg",
  aciklama:"alabalık ile hazırlanır, ekmek dilimleri ile servis edilir.",
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

        <h1 style={{textAlign:"center", color:"white"}}>Baslangıçlar</h1>
            {BaslangiclarDetay.map((item,index) => (
            <div className="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"35rem" , float: "left"}} id="detay">
            <div key={item.baslik} className="mx-3 py-2">
                <img src={images[index]} className="card-img-top" />
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

export default Baslangiclar;
