/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ContactUs = () => {
  return (
    <div className="contact">
      <h3 className="contactTitle">Trouvez nous</h3>
      <div className="contactDiv">
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.55067342336!2d-7.657033124308539!3d33.57241080726465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1675026091727!5m2!1sen!2sus"
            width="800"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contactDiv">
        <div className="contactDivLeft">
          <div className="contactInfo">
            <h3 className="contactInfoTitle">Info</h3>
            <p className="contactInfoDesc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              sapiente eveniet illo facilis! Earum at totam quibusdam
              praesentium eum officiis asperiores dolorem mollitia eos non?
              Natus, est? Modi, cum ducimus?
            </p>
            <p className="contactInfo">
              RicpeTaxi <br />
              20200 Casablanca <br />
               Bg Roudani Maarif <br />
               +212 614789632 <br />
              <span>EmsiG3-4IIR@emsi.ma</span>
            </p>
          </div>
        </div>
        <div className="contactDivRight">
          <div className="contactForm">
            <h3 className="contactFormTitle">Contactez Nous</h3>
            <div className="contactForm">
              <form>
                <div className="contactGroups">
                  <div className="contactGroup">
                    <input type="text" placeholder="Nom:" />
                    <input type="text" placeholder="Email:" />
                    <input type="text" placeholder="Télephone:" />
                  </div>
                  <div className="contactGroup">
                    <textarea
                      name=""
                      placeholder="Message:"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="contactGroup">
                    <button className="contactBtn">Envoyée</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
