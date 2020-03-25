import React from 'react';

function Education() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
      data-testid="education-section"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Monash University</h3>
            <div className="subheading mb-3">
              Bachelor of Science / Bachelor of Engineering (Honours)
            </div>
            <div>Computational Science (Extended major)</div>
            <div>Electrical and Computer Systems Engineering</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2015 - June 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
