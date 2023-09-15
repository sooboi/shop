import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} className=" mb-3.5 font-[Giants-Inline]">
        <div className="relative">
          <img
            className="w-full max-h-96 object-cover"
            src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="banner1"
          />
          <div className="absolute w-full top-40 text-center text-gray-800 drop-shadow-4xl ">
            <h2 className="text-3xl">걱정없이 쇼핑하자</h2>
            <p>맘에 안들면 바로 반품가능</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full max-h-96 object-cover "
            src="https://images.unsplash.com/photo-1507553532144-b9df5e38c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2113&q=80"
            alt="banner2"
          />
          <div className="absolute w-full top-40 text-center text-gray-700 drop-shadow-4xl ">
            <h2 className="text-3xl">각종 의류</h2>
            <p>득템할 수 있는 쇼핑몰</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full max-h-96 object-cover "
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="banner3"
          />
          <div className="absolute w-full top-40 text-center text-white drop-shadow-4xl ">
            <h2 className="text-3xl">사장님이 미쳤어요</h2>
            <p>정신병원 내원 이력 다수</p>
          </div>
        </div>
      </Slider>
    );
  }
}
