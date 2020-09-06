import React from "react";
import "../../Components/Pages/HomeStyle.sass";
import Tattoo from "../../Assets/Images/tattoo.jpeg";
import TattooArtist from "../../Assets/Images/TattooArtist.jpeg";
import TattooColor from "../../Assets/Images/TattooColor.jpeg";
import TattooBW from "../../Assets/Images/tattooBW.jpeg";

export default function Home() {
  return (
    <>
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={TattooBW} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="secondsld">first slide</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={TattooColor}
                alt="Second slide"
              />
              <div className="carousel-caption d-none d-md-block">
                <h4 className="secondsld">Second slide</h4>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section id="section2" className="p-5">
        <container className="FindTattoo d-block">
          <h2 className="text-light text-center">FIND YOUR DREAM TATTOO</h2>
          <div className="row">
            <div className="col"></div>
            <div className="col-8">
              <article className="text-center p-4 text-dark font-weight-normal">
                <u>
                  We at La Migra Ink works directly with clients to create body
                  art based on their input, but also provides guidance and
                  artistic vision for the process. Make the tattoo of your
                  dreams come true with us. Get in touch today!
                </u>
              </article>
            </div>
            <div className="col"></div>
          </div>
        </container>

        <container className="row pt-5 pb-1">
          <article className="col-10 pt-5">
            <p className="font-weight-light text-justify text-dark">
              <img
                src={Tattoo}
                alt="tattoo"
                className="d-block float-left w-25 mr-2 rounded border"
              />
              <h4 className=" text-center font-italic pb-5">
                CUSTOM TATTOO DESIGN
              </h4>
              <strong>
                <span className="ml-5">Let</span> us create a fresh tattoo for
                you exactly where you want it. You tell us what to do, and we’ve
                got it under control. We know you’ve got many choices when it
                comes to tattoo studios in Swindon area, but there’s only one La
                Migra Ink. We look forward to earning your trust and creating a
                beautiful Custom Tattoo Design tattoo for you.
              </strong>
            </p>
          </article>
        </container>

        <container className="d-flex flex-row-reverse pb-2">
          <article className="col-10">
            <p className="font-weight-light text-right text-dark">
              <img
                src={TattooArtist}
                alt="tattoo"
                className="d-block float-right w-30 ml-2 rounded border"
              />
              <h4 className="text-center font-italic pb-5">
                TATTOO AFTERCARE INSTRUCTIONS
              </h4>
              <strong>
                Want some ink that will set you apart from the crowd? Let us
                design a Tattoo Aftercare Instructions tattoo for you and show
                only who you want to. We have studied art extensively and have a
                vast array of mastered styles. With La Migra Ink, you’re
                guaranteed an original tattoo that will keep you happy for the
                rest of your life.
              </strong>
            </p>
          </article>
        </container>
      </section>

      <section id="section3" className="p-5 border border-dark">
        <container>
          <form onSubmit=""></form>
        </container>
      </section>
    </>
  );
}
