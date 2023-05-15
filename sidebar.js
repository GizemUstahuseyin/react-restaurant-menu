import { Link, Outlet } from "react-router-dom";
import { FaGlassCheers } from "react-icons/fa";

export default function Sidebar(props) {
  const menuItems = [    
    { id: 1, title: "Kahvaltılar", link: "/Kahvaltilar",  }, 
    { id: 2, title: "Başlangıçlar", link: "/Baslangiclar" },   
    { id: 3, title: "Ana Yemekler", link: "/Anayemekler" },
    { id: 4, title: "Pizzalar", link: "/Pizzalar" },
    { id: 5, title: "Burgerlar", link: "/Burgerlar" },
    { id: 6, title: "Makarnalar", link: "/Makarnalar" },
    { id: 7, title: "Salatalar", link: "/Salatalar" },  
    { id: 8, title: "Kids", link: "/Kids" },  
    { id: 9, title: "Tatlılar", link: "/Tatlilar" }, 
    { id: 10, title: "İçecekler", link: "/Icecekler" }];

    const iconStyle = { fontSize: "80px" };


  return (
    <>
    
      <div class="container-fluid bg-dark" style={{float:"left"}}>
        <div class="row flex-nowrap">
          <div class="col-2 col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100" >
              <div class="d-flex align-items-center mt-4 mb-4 text-white text-decoration-none">
                  <FaGlassCheers style={iconStyle} /><span class="fs-5 d-none d-sm-inline fa-xl" style={{textAlign:"center",fontSize: "20px" }}>Mystery Cafe & Restaurant</span>
              </div>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center text-white align-items-sm-start ms-3"
                id="menu"
              >
                {menuItems.map((props) => (
                  <li key={props.id} className="py-3">
                    <Link className="text-white text-decoration-none" to={props.link}
                    >{props.title}</Link>
                    <hr />
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          </div>
          <div className="col-10 mt-4" id="outlet">
            <Outlet />
          </div>
        </div>
    </div>
    </>
  );

  
}