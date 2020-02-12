import React from 'react';

function About(props) {
    const { config } = props;

    const renderSocialLink = (socialLinks) => {
        return socialLinks.map(social => {
            const { icon, url } = social;
            return (
                <a key={url} href={url}>
                    <i className={`fab ${icon}`}></i>
                </a>
            );
        })
    }

    const { firstName, lastName, email, socialLinks } = config;

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="about"
        >
            <div className="w-100">
                <h1 className="mb-0">
                    {firstName}
                    <span className="text-primary">{lastName}</span>
                </h1>
                <div className="subheading mb-5">
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <p className="lead mb-5">
                    I am a Software Engineer with a passion for solving real-world problems that impact people's lives through programming.
                </p>
                <div className="social-icons">
                    {renderSocialLink(socialLinks)}
                </div>
            </div>
        </section>
    )
}

export default About;