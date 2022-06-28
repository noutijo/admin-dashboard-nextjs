import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Right: NextPage = () => {
  return (
    <>
      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Oreol Noumodong</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img
                src="https://pbs.twimg.com/profile_images/1514681845304242184/FtI21TMl_400x400.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="recent-updates">
          <h2>Recents Upddates</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img
                  src="https://cdn6.f-cdn.com/ppic/141780185/logo/41022312/ekYZm/profile_logo_.jpg"
                  alt=""
                />
              </div>
              <div className="message">
                <p>
                  <b>Nkemtakeh Cels</b> received his order of MacBook Pro 2021.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img
                  src="https://images.pexels.com/photos/3760918/pexels-photo-3760918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="message">
                <p>
                  <b>Pricilia Ken</b> received his order of Iphone 14 Pro Max.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img
                  src="https://images.pexels.com/photos/7193070/pexels-photo-7193070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="message">
                <p>
                  <b>Kenfack Léa</b> received his order of nooutidev T-shirt.
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="sales-analytics">
          <h2>Sales Analytics</h2>

          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>ONLINE ORDERS</h3>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <div className="success">+32%</div>
              <h3>3282</h3>
            </div>
          </div>
          <div className="item offline">
            <div className="icon">
              <span className="material-icons-sharp">local_mall</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>OFFLINE ORDERS</h3>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <div className="danger">-12%</div>
              <h3>1000</h3>
            </div>
          </div>
          <div className="item customers">
            <div className="icon">
              <span className="material-icons-sharp">person</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>NEW CUSTOMERS</h3>
                <small className="text-muted">Last 24 hours</small>
              </div>
              <div className="success">+25%</div>
              <h3>998</h3>
            </div>
          </div>
          <div className="item add-product">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
