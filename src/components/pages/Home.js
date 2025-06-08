import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import "../pages/assets/css/home.scss";

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="pagecontainer">
      <div className="outersec intro">
        <h2 className="sectionTitle title1">About Us</h2>
        <p>
          By learning the custom needs of each individual client, we at Hometech
          Harmony aim to implement bespoke technological solutions to enhance
          the safety and security each user experiences and feels. We believe
          the pride we take in creating strong lasting relationships with our
          clients is tantamount to our success, and we aim to achieve this with
          every customer through individually personalized training with
          whichever systems we happen to be installing and up-front low-cost
          pricing that won't hurt your wallet. Whether you’re just setting up
          your first smart device, building out a whole-home network, or trying
          to jump into the fun world of gaming with a custom PC build, we're
          here to help you feel confident and comfortable with your tech.
        </p>
        <a href="/#About" className="button">
          Learn More
        </a>
      </div>

      <div className="discounts">
        <h2 className="sectionTitle title2">Discounts & Perks</h2>

        <div className="cardcontainer">

          <div className="disccard disccard1">
            <div className="cardcontent">
              <h3 className="disctype cardtitle1" >MultiDevice-Discount</h3>
              <div className="descdiv">
                <center>
                  <div class="line"></div>
                </center>
                <p className="carddesc">
                  For most services, the first device is full price and
                  additional similar devices are 25% off when installed during
                  the same visit. 
                </p>
                <p className="carddesc fineprint">POE systems, bundles, and large installs
                  already include bulk pricing.</p>
              </div>
            </div>
          </div>
          <div className="disccard disccard2">
            <div className="cardcontent">
              <h3 className="disctype">Refer a Friend</h3>
              <div className="descdiv">
                <center>
                  <div class="line"></div>
                </center>
                <p className="carddesc">
                  Get $25 off your next service and so does the friend when they
                  mention your name.
                </p>
              </div>
            </div>
          </div>
          <div className="disccard disccard3">
            <div className="cardcontent">
              <h3 className="disctype">High Frequency</h3>
            
            <div className="descdiv">
              <center>
                <div class="line"></div>
              </center>
              <p className="carddesc">
                Can't get enough of our top notch customer service?
                <br></br>6TH INSTALL IS FREE!
              </p>
            </div>
            </div>
          </div>

        </div>
      </div>
      <div className="outersec testimonials">
        <h2 className="sectionTitle title3">Testimonials</h2>
          <Carousel>
            <Carousel.Item interval={3000}>
              <Carousel.Caption>
                <p>"Brad installed 3 security cameras outside my home.  He’s very thorough, very professional 
                and reasonably priced.  I highly recommend giving him a call for your security installations."</p>
                <h3>-Pam Roberts</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Carousel.Caption>
                <p>"Brad installed my doorbell camera and did a great job doing so. I would recommend hiring his services."</p>
                <h3>-Sean Hodgkins</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Carousel.Caption>
                <p>"Brad recently installed a Ring Doorcam and Driveway Floodlight Camera for me. 
                His install was very clean and hid the wiring well. Very professional and polite!"</p>
                <h3>-Brandon Arriola</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Carousel.Caption>
                <p>"Brad installed my family's doorbell system and did a fantastic job! 
                He was very professional and friendly... highly recommend his service!"</p>
                <h3>-Andrew Anstrom</h3>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <a href="https://www.facebook.com/hometechharmonyllc/reviews" className="button">
          See More
        </a>
      </div>
    </div>
  );
}
