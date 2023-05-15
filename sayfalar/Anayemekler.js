import React from "react";
import cokertmekebabi from '../img/cokertmekebabi.jpg';
import tavuklucokertme from '../img/tavuklucokertme.jpg';
import iskendercokertme from '../img/iskendercokertme.jpg';
import begendilidurum from '../img/begendilidurum.jpg';
import cafedeparis from '../img/cafedeparis.jpg';
import tavuksis from '../img/tavuksis.jpg';
import tavuksinitzel from '../img/tavuksinitzel.jpg';
import pilickulleme from '../img/pilickulleme.jpg';
import SosluBonfile from '../img/SosluBonfile.jpg';
import { useState , useEffect} from "react"


function AnaYemekler(props) {


  const [siparisListesi, setSiparisListesi] = useState([]);

  useEffect(() => {
    const Siparisler = JSON.parse(sessionStorage.getItem("Siparisler"));
    if (Siparisler) {
      setSiparisListesi(Siparisler);
    }
  }, []);


  const images =  [cokertmekebabi,tavuklucokertme,iskendercokertme,begendilidurum,cafedeparis,tavuksis,tavuksinitzel,pilickulleme,SosluBonfile];


    const AnaYemeklerDetay = [
        {
          baslik: "Çökertme Kebabı",
          img: "/img/cokertmekebabi.jpg",
          aciklama:"julyen doğranmış kontrafile parçaları , süzme yoğurt, kibrit patates ve domates sos ile ",
          fiyat:250
          
        },
        {
          baslik: "Tavuklu Çökertme",
          img: "/img/tavuklucokertme.jpg",
          aciklama:"julyen doğranmış tavuk parçaları , süzme yoğurt, kibrit patates ve domates sos ile" ,
          fiyat:240

        },
        {
          baslik: "İskender Çökertme",
          img: "/img/iskendercokertme.jpg",
          aciklama:"kırmızı et, kibrit patates, domates sos ve süzme yoğurt ile",
          fiyat:240

        },
        {
          baslik: "Beğendili Dürüm",
          img: "/img/begendilidurum.jpg",
          aciklama:"dana bonfile, beğendi, haşlanmış sebze ve patates tava ile",
          fiyat:200

        },
        {
          baslik: "Cafe de Paris",
          img: "/img/cafedeparis.jpg",
          aciklama:"rokfor peyniriyle harmanlanmış özel soslu bonfile ve patates tava ile",
          fiyat:280

        },
        {
          baslik: "Tavuk Şiş",
          img: "/img/tavuksis.jpg",
          aciklama:"şişe takılı tavuk pirzola parçaları, haşlanmış sebze, pirinç pilavı ve patates tava ile",
          fiyat:250

        },
        {
          baslik: "Tavuk Şinitzel",
          img: "/img/tavuksinitzel.jpg",
          aciklama:"özel harç ile panelenmiş tavuk bonfile, patates püresi, cherry domates, parmesan peynir ve roka ile",
          fiyat:230

        },
        {
          baslik: "Piliç Külleme",
          img: "/img/pilickulleme.jpg",
          aciklama:"Izgara 2 but parçası arasından sıcak közde patlıcan, haşlanmış sebze ve patates tava ile",
          fiyat:200

        },
        {
        baslik: "Demi Glace Soslu Bonfile",
        img: "/img/SosluBonfile.jpg",
        aciklama:"istiridye mantarı , sote patates , pepper sos ve maydanoz yağı ile",
        fiyat:280

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
        
<h1 style={{textAlign:"center", color:"white"}}>Ana Yemekler</h1> 
            {AnaYemeklerDetay.map((item,index) => (
              
            <div className="card mx-1 ms-2 mt-3" style={{width: "25rem", height:"29rem" , float: "left"}} id="detay">
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


export default AnaYemekler;