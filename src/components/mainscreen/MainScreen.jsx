import React from "react";
import "./mainscreen.scss";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedoIcon from '@mui/icons-material/Redo';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function MainScreen() {

const data={
    "mainImage":"https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg",
    "subImage1":"https://s3.amazonaws.com/gallerist-live/products/17827/large/the-nature-4.jpg?1550728700",
    "subImage2":"https://i.ytimg.com/vi/j2ZOEL4DkKM/maxresdefault.jpg"

  }





  return (
    <div className="main_screen">
      <div className="header">
        <h1>Summer Art camp! 5 Days of Artists and Painting Monet,</h1>
        <h1>Van Gogh,Matisee,& More</h1>
        <span>Multi Day course </span>
      </div>
      <div className="footer">
        <div className="details">
          <div className="description">
            In this 5 day of class we will explore artists Monet, Matisee,Van
            Gogh, among others and then recreate paintings using cryon and
            watercolor. Students will have fun learing about the artists &
            creating their on art inspired by their work .
          </div>
          <div className="userDetails">
            <div className="user">
              <span>
              
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </span>
              <h4>Kimberly R Moseler</h4>
            </div>
            <div className="rating">
              <div className="teacherReview">
                <Rating name="read-only" className="star" value={3} readOnly />
                <span>467 total review for this teacher</span>
              </div>
              <div className="classReview">
                <Rating className="star" name="read-only" value={4} readOnly />
                <span> 5 review for this class</span>
              </div>
            </div>
          </div>
          <span className="completed">completed by 21 learners</span>
          <div className="buttons">
            <div className="main_button">

            <button>See class Schedule <ArrowForwardIosIcon/></button>
            </div>

          <div className="sub_button">
            <div className="save">
              
              <button><FavoriteBorderIcon/> save </button>
            </div>
            <div className="share">
           
              <button><RedoIcon/>share</button>
            </div>
          </div>
          </div>
        </div>
        <div className="images">
          <div className="main_images">
            <img src={data.mainImage} alt="" />
          </div>
          <div className="sub_images">
            <div className="firstImage">
            <img src={data.subImage1} alt="" />
            </div>
            <div className="secondImage">
            <img src={data.subImage2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
