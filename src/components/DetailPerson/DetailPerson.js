import React, { useEffect, useState } from "react";
import bg from "../../assets/detailperson.png";
import Loading from "../Loading/Loading";
import "./DetailPerson.Module.css";

const DetailPerson = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${bg})`;
      document.body.style.backgroundSize = "cover";
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="detailperson-container">
            <div className="detailperson-title">Kullanıcı detayları</div>
            <form>
              <div className="tc-number">
                <label> Tc Kimlik Numara </label>
                <input type="text" />
              </div>
              <div className="age-boy-kilo">
                <div className="age">
                  <label> Yaş </label>
                  <input type="text" />
                </div>
                <div className="boy">
                  <label> Boy </label>
                  <input type="text" />
                </div>
                <div className="kilo">
                  <label> Kilo </label>
                  <input type="text" />
                </div>
              </div>
              <div className="yemek-hedefKilo-ilgi">
                <div className="yemek">
                  <label> En Sevdiğin Yemek Nedir? </label>
                  <input type="text" />
                </div>
                <div className="hedefKilo">
                  <label> Hedef Kilon Nedir? </label>
                  <input type="text" />
                </div>
                <div className="ilgi">
                  <label> İlgi Alanın Nedir? </label>
                  <input type="text" />
                </div>
              </div>
              <div className="saglik-detay">
                <div className="kronik">
                  <span>Kronik Hastalık</span>
                  <input type="checkbox" />
                </div>
                <div className="alerji">
                  <span>Alerji</span>
                  <input type="checkbox" />
                </div>
                <div className="evli">
                  <span>Evli</span>
                  <input type="checkbox" />
                </div>
                <div className="ozel-durum">
                  <span>Özel Durum</span>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="detailperson-button">
                <button>Bilgileri ekle</button>
                <button>İptal</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPerson;
