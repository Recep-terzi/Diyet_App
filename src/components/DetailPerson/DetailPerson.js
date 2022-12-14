import React, { useEffect, useState } from "react";
import detailbg from "../../assets/detailbg.jpeg";
import Loading from "../Loading/Loading";
import "./DetailPerson.Module.css";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
const DetailPerson = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [tc, setTc] = useState();
  const [age, setAge] = useState();
  const [boy, setBoy] = useState();
  const [kilo, setKilo] = useState();
  const [yemek, setYemek] = useState();
  const [hedefKilo, setHedefKilo] = useState();
  const [ilgi, setIlgi] = useState();
  const [kronik, setKronik] = useState(false);
  const [alerji, setAlerji] = useState(false);
  const [evli, setEvli] = useState(false);
  const [özel, setOzel] = useState(false);
  const detailPerson = useSelector((state) => state.diet.personDetail);
  const user = useSelector((state) => state.diet.user);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      name: name,
      surname: surname,
      tc: tc,
      age: age,
      boy: boy,
      kilo: kilo,
      yemek: yemek,
      hedefKilo: hedefKilo,
      ilgi: ilgi,
      kronik: kronik,
      alerji: alerji,
      evli: evli,
      özel: özel,
    };
    const ref = collection(db, "personDetail");
    try {
      await addDoc(ref, {
        ...doc,
        email: user.email,
      });
      console.log("eklendi");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(detailPerson);
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${detailbg})`;
      document.body.style.backgroundSize = "cover";
      setLoading(false);
    }, 2000);
  }, []);
  const handleChange2 = (event) => {
    if (event.target.checked) {
      setKronik(true);
    } else {
      setKronik(false);
    }
  };
  const handleChange = (event) => {
    if (event.target.checked) {
      setAlerji(true);
    } else {
      setAlerji(false);
    }
  };
  const handleChange3 = (event) => {
    if (event.target.checked) {
      setEvli(true);
    } else {
      setEvli(false);
    }
  };
  const handleChange4 = (event) => {
    if (event.target.checked) {
      setOzel(true);
    } else {
      setOzel(false);
    }
  };
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
            <form onSubmit={handleSubmit}>
              <div className="name-surname">
                <div className="person-name">
                  <label> İsim </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="surname">
                  <label> Soyisim </label>
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div className="tc-number">
                <label> Tc Kimlik Numara </label>
                <input
                  type="number"
                  value={tc}
                  onChange={(e) => setTc(e.target.value)}
                  maxLength={11}
                />
              </div>
              <div className="age-boy-kilo">
                <div className="age">
                  <label> Yaş </label>
                  <input
                    type="number"
                    maxLength={3}
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="boy">
                  <label> Boy </label>
                  <input
                    type="number"
                    maxLength={3}
                    value={boy}
                    onChange={(e) => setBoy(e.target.value)}
                  />
                </div>
                <div className="kilo">
                  <label> Kilo </label>
                  <input
                    type="number"
                    maxLength={3}
                    value={kilo}
                    onChange={(e) => setKilo(e.target.value)}
                  />
                </div>
              </div>
              <div className="yemek-hedefKilo-ilgi">
                <div className="yemek">
                  <label> En Sevdiğin Yemek Nedir? </label>
                  <input
                    type="text"
                    value={yemek}
                    onChange={(e) => setYemek(e.target.value)}
                  />
                </div>
                <div className="hedefKilo">
                  <label> Hedef Kilon Nedir? </label>
                  <input
                    type="text"
                    value={hedefKilo}
                    onChange={(e) => setHedefKilo(e.target.value)}
                  />
                </div>
                <div className="ilgi">
                  <label> İlgi Alanın Nedir? </label>
                  <input
                    type="text"
                    value={ilgi}
                    onChange={(e) => setIlgi(e.target.value)}
                  />
                </div>
              </div>
              <div className="saglik-detay">
                <div className="kronik">
                  <span>Kronik Hastalık</span>
                  <input
                    type="checkbox"
                    value={kronik}
                    onChange={handleChange2}
                  />
                </div>
                <div className="alerji">
                  <span>Alerji</span>
                  <input
                    type="checkbox"
                    value={alerji}
                    onChange={handleChange}
                  />
                </div>
                <div className="evli">
                  <span>Evli</span>
                  <input
                    type="checkbox"
                    value={evli}
                    onChange={handleChange3}
                  />
                </div>
                <div className="ozel-durum">
                  <span>Özel Durum</span>
                  <input
                    type="checkbox"
                    value={özel}
                    onChange={handleChange4}
                  />
                </div>
              </div>
              <div className="detailperson-button">
                <button type="submit">Bilgileri ekle</button>
                <button>
                  <Link to="/"> İptal </Link>
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPerson;
