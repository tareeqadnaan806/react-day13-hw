import React from "react";

const Header = () => {
  return (
    <div className="container ">
      <div className="flex mt-4 md:flex-col justify-between items-center">
        <div className="flex items-center justify-center">
          <img
            src="https://st4.depositphotos.com/4396953/19860/v/450/depositphotos_198602274-stock-illustration-gym-or-fitness-logo-sign.jpg"
            alt=""
            className="w-20 "
          />
          <h1 className="text-4xl text-slate-800 ml-3 font-momo font-bold">
            BodyRevive
          </h1>
        </div>
        <div className="sm:mb-3">
          <button className="px-3 rounded-xl m-2 py-2 hover:text-white border-2 border-slate-600 hover:bg-red-700 ">
            Meet Trainer
          </button>
          <button className="px-3 rounded-xl m-2 py-2 hover:text-white border-2 border-slate-600 hover:bg-red-700 ">
            Join Our Community
          </button>
        </div>
      </div>
      <p className="text-2xl  ml-5 mb-5">
        Where Fitness Meets Fun and Results Are Achieved
      </p>
      <div className="grid header ">
        <div className="img-1 ">
          <img
            src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
            alt=""
          />
        </div>
        <div className="img-2 ">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg  "
            className="image-1q"
            alt=""
          />
        </div>
        <div className="img-3 ">
          <img src="https://wallpaperaccess.com/full/1087621.jpg" alt="" />
        </div>
        <div className="img-4 ">
          <img
            src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
            alt=""
          />
        </div>
        <div className="img-5  ">
          <img src="https://wallpapercave.com/wp/wp6331008.jpg" alt="" />
        </div>
        <div className="img-6  ">
          <img
            src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
