import React from "react";
import "./Main.Module.css";
import breakfast from "../../assets/breakfast.jpg";
import lunch from "../../assets/lunch.jpg";
import dinner from "../../assets/dinner.jpg";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div className="container ">
        <div className="main-head-title"> ~ Öğün Diyet Programlarımız ~</div>
        <div className="row main-row">
          <div className="col-md-6">
            <div className="main-title">
              <a href="#breakfast">Sabahların vazgeçilmezi. Kahvaltı</a>
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
            <img src={breakfast} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
        </div>
        <div className="row main-row">
          <div className="col-md-6">
            <img src={lunch} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
          <div className="col-md-6">
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
          <div className="col-md-6">
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
        <div id="breakfast">Kahvaltı</div>
        <div id="lunch">Ara öğün</div>
        <div id="dinner">Akşam yemeği</div>
      </div>
    </>
  );
};

export default Main;
