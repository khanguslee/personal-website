import React from 'react';
import avatar from '../assets/images/avatar.png';

function About(props) {
  const { config } = props;

  const renderSocialLink = socialLinks => {
    return socialLinks.map(social => {
      const { icon, url } = social;
      return (
        <a key={url} href={url}>
          <i className={`fab ${icon}`}></i>
        </a>
      );
    });
  };

  const { firstName, lastName, email, socialLinks } = config;

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      data-testid="about-section"
      id="about"
    >
      <div className="w-100">
        <div className="row mb-5">
          <div className="col-md-4 col-sm-5 mb-sm-0 mb-2">
            <div className="text-center">
              <span className="d-lg-none">
                <img
                  className="img-profile rounded-circle"
                  src={avatar}
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="col col-lg-12 my-auto">
            <div className="text-center">
              <h1 className="mb-0">
                {firstName}
                <span className="text-primary">{lastName}</span>
              </h1>
              <div className="subheading">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </div>
        </div>
        <p className="lead mb-5">
          I am a Software Engineer with a passion for solving real-world
          problems that impact people's lives through programming.
        </p>
        <div className="social-icons">{renderSocialLink(socialLinks)}</div>
      </div>
    </section>
  );
}

export default About;
