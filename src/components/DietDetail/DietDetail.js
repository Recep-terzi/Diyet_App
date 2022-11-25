import { getDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";
import { listDetail } from "../../redux/dietSlice";
import ExtraNavbar from "../ExtraNavbar/ExtraNavbar";
import Navbar from "../Navbar/Navbar";
const DietDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listdetail = useSelector((state) => state.diet.listDetail);
  useEffect(() => {
    const ref = doc(db, "dietList", id);
    const data = [];
    getDoc(ref).then((snap) => {
      if (snap.exists) {
        data.push(snap.data());
      } else {
        console.log("error");
      }
      dispatch(listDetail(data));
    });
  }, [dispatch, id]);
  console.log(listdetail);
  return (
    <>
      <ExtraNavbar />
      <Navbar />
    </>
  );
};

export default DietDetail;
