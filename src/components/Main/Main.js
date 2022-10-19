import React from "react";
import "./Main.Module.css";
import saglik from "../../assets/saglik.jpg";
import saglik2 from "../../assets/saglik2.jpg";
import saglik3 from "../../assets/saglik3.jpg";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="main-title">Lorem, ipsum dolor.</div>
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
            <img src={saglik} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={saglik2} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
          <div className="col-md-6">
            <div className="main-title">Lorem, ipsum dolor.</div>
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
        <div className="row">
          <div className="col-md-6">
            <div className="main-title">Lorem, ipsum dolor.</div>
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
            <img src={saglik3} alt="Sağlıklı yaşam" className="saglik-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
