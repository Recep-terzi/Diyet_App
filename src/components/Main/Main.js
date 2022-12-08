import React from "react";
import "./Main.Module.css";
import breakfast from "../../assets/breakfast.jpg";
import lunch from "../../assets/lunch.jpg";
import dinner from "../../assets/dinner.jpg";
import Breakfast from "../Breakfast/Breakfast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

import {
  BsFillSunFill,
  BsFillCloudFill,
  BsFillMoonStarsFill,
} from "react-icons/bs";

const Main = () => {
  return (
    <>
      <div className="container ">
        <div className="main-head-title"> ~ Öğün Diyet Programlarımız ~</div>
        <div className="row main-row">
          <div className="col-md-6">
            <Fade cascade>
              <BsFillSunFill />

              <div className="main-title">
                <a href="#breakfast">Sabahların vazgeçilmezi. Kahvaltı</a>
              </div>
              <div className="main-description">
                Tüm öğünler içinde başka bir yeri vardır kahvaltının; hem
                fiziksel hem de psikolojik olarak. Pazartesi'den Cuma’ya
                ayaküstü ve hızlı bir öğünken hafta sonları bir ritüele dönüşür.
                Bir Fransız kruvasansız, Türk ise simitsiz kahvaltıya oturmaz.
                İtalyanların espressosuna karşı ince belli bardakta tavşan kanı
                çay içilir Türkiye’de. Van’da 40 çeşit masaya sığmaz, Ege’de
                sızma zeytinyağsız kahvaltıya oturulmaz, Hatay’da nar ekşisiz
                sofra kurulmaz. Nerede olursanız olun güne atılan ilk adımın
                habercisidir kahvaltı ve gün nasıl başlarsa öyle gider. Daha
                ilkokul çağlarımızdan itibaren şarkılarla önemi anlatılan bu
                öğünün günün en aktif dönemlerinde enerji ihtiyacımızı
                karşılıyor olması bir gerçek. Bu nedenle bir yumurta sütle
                çırpılıp birazcık ekmek, biraz da peynir yenmeden gün içinde
                verimli olmanın çok da mümkün olmadığı söylenebilir. İşte daha
                okul çağlarımızda şarkılarla verilen mesajı biraz açacak olursak
                dengeli beslenmenin ve kahvaltıda yenmesi gereken gıdaların
                formülünü yakalamış oluruz. Her öğünde olduğu gibi kahvaltıda da
                protein-yağ-karbonhidrat dengesini kurmak önemlidir. Bunun
                yanında çocukluk çağında çeşitli gıdaların tadına alışmak
                açısından da kahvaltıdaki çeşitliliğin önemini vurgulamak
                gerekir.
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade cascade>
              <img
                src={breakfast}
                alt="Sağlıklı yaşam"
                className="saglik-img"
              />
            </Fade>{" "}
          </div>
        </div>
        <div className="row main-row">
          <div className="col-md-6">
            <Fade cascade>
              <img src={lunch} alt="Sağlıklı yaşam" className="saglik-img" />
            </Fade>
          </div>
          <div className="col-md-6 lunch">
            <Fade cascade>
              <BsFillCloudFill />

              <div className="main-title">
                <a href="#lunch">Olmazsa olmaz. Ara Öğün</a>
              </div>
              <div className="main-description">
                Sağlıklı ve dengeli beslenmenin altın kuralıdır 3 ana 3 ara öğün
                şeklinde beslenmek. Ana öğünlerimi düzenli tüketiyorum fakat ara
                öğünlerimi hep atlıyorum veya ara öğünlerde hangi tür besinleri
                seçeceğimi ve ne miktarda tüketeceğini bilmiyorum diye yakınan
                birçok kişi ile karşılaşıyorum… Peki ara öğün tüketmek neden bu
                kadar önemli? Amaç; kan şekerinizi dengede tutup çabuk acıkmayı
                ve bir sonraki öğünde çok fazla yemeyi engellemektir. Bir diğer
                önemli konu ise; Ara öğün yapan kişide sık sık beslenmek
                alışkanlık haline gelecek ve buna bağlı olarak metabolizma hızı
                da artacaktır. Metabolizma hızının artmasına bağlı olarak da
                kilo kaybı hızlanacaktır. Tabi ara öğünlerde ne tür besinler
                tüketildiği çok önemlidir. Genelde ara öğün denildiğinde
                kişilerin aklına abur cuburlar, yağlı ve şekerli yiyecekler
                gelir. Fakat ara öğünlerde bu tür besinleri tüketmek kilo
                almamızla sonuçlanacaktır. Aynı zamanda özellikle şekerli
                besinleri tüketmek, kan şekerinde ani yükselmelere ve sonrasında
                ani düşüşlere sebep olacaktır.
              </div>
            </Fade>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-md-6 dinner">
            <Fade cascade>
              <BsFillMoonStarsFill />
              <div className="main-title">
                <a href="#dinner">Ve tabi ki Akşam Yemeği</a>
              </div>
              <div className="main-description">
                Kahvaltı, öğle yemeği ve ara öğünlerin ardından sıra akşam
                yemeğine gelmektedir. Yatmadan önce tüketeceğiniz besinler ise
                sizlerin kilo kontrolünü etkileyecektir. Kilo vermek ve kilo
                kontrolünü sağlamak adına akşam yatmadan önce hafif gıdalar
                tüketilmelidir. Ağır ve yüksek kalorili yiyecekler hem sindirim
                sisteminizi zorlamakta hem de hareketsiz kalacağınız için kilo
                almanıza neden olacaktır. Diyete başlayan hemen hemen herkesin
                ortak problemi akşam yemeği zamanıdır. Kulaktan kulağa dolaşan
                diyet efsanelerinin en bilineni de akşam 18.00’den sonra bir şey
                yememektir. Oysa ki birçok kişinin geç saatlere kadar
                çalıştığını da göz önüne alacak olursak, yemekte buluşmak için
                plan yaptığımızda buna uymak imkansızdır. Saat 20.00’da
                buluşalım dediğimizde ya aç kalmamız, ya da asosyal yaşamamız
                gerekiyor gibi görünüyor. Tabii ki böyle bir yaşamın
                sürdürebilir olması mümkün değil.
              </div>
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade cascade>
              <img src={dinner} alt="Sağlıklı yaşam" className="saglik-img" />
            </Fade>
          </div>
        </div>
        <div id="breakfast">
          <Zoom>
            <div className="breakfast-title">Kahvaltı Programlarımız</div>
            <p className="breakfast-description">
              Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip
              kendinize uygun programı hazırlatabilirsiniz.
            </p>
            <Breakfast />
          </Zoom>
        </div>
        <div id="lunch">
          <Zoom>
            <div className="lunch-title">Ara Öğün Programlarımız</div>
            <p className="lunch-description">
              Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip
              kendinize uygun programı hazırlatabilirsiniz.
            </p>
            <Lunch />
          </Zoom>
        </div>
        <div id="dinner">
          <Zoom>
            <div className="dinner-title">Akşam Yemeği Programlarımız</div>
            <p className="dinner-description">
              Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip
              kendinize uygun programı hazırlatabilirsiniz.
            </p>
            <Dinner />
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Main;
