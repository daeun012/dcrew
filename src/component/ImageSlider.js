import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageSlider.css"


class CustomSlide extends Component {
  render() {
    const {title, poster} = this.props;
    return (
      <div className="slider_list">
        <img src={poster} alt={title} title={title}/>
        <h6>{title}</h6>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


export default class ImageSlider extends Component {
  state={
    slider_lists:[
        {id:1,title:"축구 동아리", poster:"image/1.jpg"},
        {id:2,title:"볼링 동아리", poster:"image/2.jpg"},
        {id:3,title:"농구 동아리", poster:"image/3.jpg"},
        {id:4,title:"배구 동아리", poster:"image/4.jpg"}
    ]
  }
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };   

    const {slider_lists}=this.state;
    return (
      <div className="custom_slide">
        <h2>Custom Slides</h2>
        <Slider {...settings}>
          {slider_lists.map(list=>(
            <CustomSlide key={list.id} title={list.title} poster={list.poster}></CustomSlide>
          ))}
          {slider_lists.map(list=>(
            <CustomSlide  key={list.id} title={list.title} poster={list.poster}></CustomSlide>
          ))}
        </Slider>
      </div>
    );
  }
}
