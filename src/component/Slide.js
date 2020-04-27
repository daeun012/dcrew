import React,{Component} from 'react';
import Slider from "react-slick";
import "./Slide.css"

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div className="slide_list">
         <img src="image/1.jpg" style={{width:"200px"
    ,height:"300px", display:"inline"}}/>
         <h5>축구 동아리</h5>
      </div>
    );
  }
}

export default class Slide extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <CustomSlide index={1} />
            </div>
            <div>
              <CustomSlide index={2} />
            </div>
            <div>
              <CustomSlide index={3} />
            </div>
            <div>
              <CustomSlide index={4} />
            </div>
            <div>
              <CustomSlide index={5} />
            </div>
            <div>
              <CustomSlide index={6} />
            </div>
          </Slider>
        </div>
      );
    }
  }

