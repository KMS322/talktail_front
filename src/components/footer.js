import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box_container">
        <div className="left_box">
          <img src="/img/logo.png" alt="" />
          <div className="logo_box">
            <img src="/img/icon_linkedin.png" alt="" />
            <img src="/img/icon_insta.png" alt="" />
            <img src="/img/icon_youtube.png" alt="" />
            <img src="/img/icon_facebook.png" alt="" />
          </div>
        </div>
        <div className="box center_box">
          <p>Creamoff</p>
          <p>CEO : Do Hyuck Kwon</p>
          <p>Tel. 82)10-4026-5955</p>
          <p>e-mail : creamoff2021@creamoff.co.kr</p>
        </div>
        <div className="box right_box">
          <p>room 309, Global venture building 27,</p>
          <p>Sampung-ro, Gyeongsan-si,</p>
          <p>Gyeongsangbuk-do, Republic of Korea</p>
        </div>
      </div>
      <p>© creamoff inc</p>
    </div>
  );
};

export default Footer;
