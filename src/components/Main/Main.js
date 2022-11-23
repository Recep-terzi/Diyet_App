import React from "react";
import "./Main.Module.css";
import breakfast from "../../assets/breakfast.jpg";
import lunch from "../../assets/lunch.jpg";
import dinner from "../../assets/dinner.jpg";
import Breakfast from "../Breakfast/Breakfast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
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
            <BsFillSunFill />

            <div className="main-title">
              <a href="#breakfast">Sabahların vazgeçilmezi. Kahvaltı</a>
            </div>
            <div className="main-description">
              Tüm öğünler içinde başka bir yeri vardır kahvaltının; hem fiziksel
              hem de psikolojik olarak. Pazartesi'den Cuma’ya ayaküstü ve hızlı
              bir öğünken hafta sonları bir ritüele dönüşür. Bir Fransız
              kruvasansız, Türk ise simitsiz kahvaltıya oturmaz. İtalyanların
              espressosuna karşı ince belli bardakta tavşan kanı çay içilir
              Türkiye’de. Van’da 40 çeşit masaya sığmaz, Ege’de sızma
              zeytinyağsız kahvaltıya oturulmaz, Hatay’da nar ekşisiz sofra
              kurulmaz. Nerede olursanız olun güne atılan ilk adımın
              habercisidir kahvaltı ve gün nasıl başlarsa öyle gider. Daha
              ilkokul çağlarımızdan itibaren şarkılarla önemi anlatılan bu
              öğünün günün en aktif dönemlerinde enerji ihtiyacımızı karşılıyor
              olması bir gerçek. Bu nedenle bir yumurta sütle çırpılıp birazcık
              ekmek, biraz da peynir yenmeden gün içinde verimli olmanın çok da
              mümkün olmadığı söylenebilir. İşte daha okul çağlarımızda
              şarkılarla verilen mesajı biraz açacak olursak dengeli beslenmenin
              ve kahvaltıda yenmesi gereken gıdaların formülünü yakalamış
              oluruz. Her öğünde olduğu gibi kahvaltıda da
              protein-yağ-karbonhidrat dengesini kurmak önemlidir. Bunun yanında
              çocukluk çağında çeşitli gıdaların tadına alışmak açısından da
              kahvaltıdaki çeşitliliğin önemini vurgulamak gerekir.
            </div>
          </div>
          <div className="col-md-6">
            <img src={breakfast} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
        </div>
        <div className="row main-row">
          <div className="col-md-6">
            <img src={lunch} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
          <div className="col-md-6 lunch">
            <BsFillCloudFill />

            <div className="main-title">
              <a href="#lunch">Olmazsa olmaz. Ara Öğün</a>
            </div>
            <div className="main-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              aliquam fuga maxime consequuntur iusto minima deserunt alias, nemo
              reprehenderit mollitia nihil similique saepe expedita dicta?
              Recusandae suscipit voluptatum aliquid ratione dicta, quia harum
              ipsam eos culpa iste sed. Adipisci laudantium porro dolorum sed
              blanditiis neque atque corrupti, expedita eveniet asperiores eum
              exercitationem animi deserunt, dolore, commodi maxime illo iusto
              ex vel at. Sunt tempore alias voluptatibus earum ipsum dolorem
              deserunt doloribus, quam distinctio odio aperiam quia suscipit id
              repudiandae laudantium ab exercitationem voluptate ut eveniet
              placeat impedit quas, sequi numquam sapiente. Ipsum, nemo qui?
              Sunt qui doloribus blanditiis nisi! Quod.
            </div>
          </div>
        </div>
        <div className="row main-row">
          <div className="col-md-6 dinner">
            <BsFillMoonStarsFill />
            <div className="main-title">
              <a href="#dinner">Ve tabi ki Akşam Yemeği</a>
            </div>
            <div className="main-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              aliquam fuga maxime consequuntur iusto minima deserunt alias, nemo
              reprehenderit mollitia nihil similique saepe expedita dicta?
              Recusandae suscipit voluptatum aliquid ratione dicta, quia harum
              ipsam eos culpa iste sed. Adipisci laudantium porro dolorum sed
              blanditiis neque atque corrupti, expedita eveniet asperiores eum
              exercitationem animi deserunt, dolore, commodi maxime illo iusto
              ex vel at. Sunt tempore alias voluptatibus earum ipsum dolorem
              deserunt doloribus, quam distinctio odio aperiam quia suscipit id
              repudiandae laudantium ab exercitationem voluptate ut eveniet
              placeat impedit quas, sequi numquam sapiente. Ipsum, nemo qui?
              Sunt qui doloribus blanditiis nisi! Quod.
            </div>
          </div>
          <div className="col-md-6">
            <img src={dinner} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
        </div>
        <div id="breakfast">
          <div className="breakfast-title">Kahvaltı Programlarımız</div>
          <p className="breakfast-description">
            Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip kendinize
            uygun programı hazırlatabilirsiniz.
          </p>
          <Breakfast />
        </div>
        <div id="lunch">
          <div className="lunch-title">Ara Öğün Programlarımız</div>
          <p className="lunch-description">
            Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip kendinize
            uygun programı hazırlatabilirsiniz.
          </p>
          <Lunch />
        </div>
        <div id="dinner">
          <div className="dinner-title">Akşam Yemeği Programlarımız</div>
          <p className="dinner-description">
            Daha detaylı bilgi için diyetisyenimiz ile iletişime geçip kendinize
            uygun programı hazırlatabilirsiniz.
          </p>
          <Dinner />
        </div>
      </div>
    </>
  );
};

export default Main;
