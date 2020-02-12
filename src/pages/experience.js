import React from 'react';

function Experience() {
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex justify-content-center"
            id="experience"
        >
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Software Engineer Intern</h3>
                        <div className="subheading mb-3">MongoDB</div>
                        <p>
                            Part of the MongoDB Charts Team working on incorporating interactive Charts into the product
                        </p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">December 2019 - Present</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Software Engineer Intern</h3>
                        <div className="subheading mb-3">Australian Bureau of Statistics</div>
                        <p>
                            Developed a progressive web application for Census Field Officers using typescript and react.
                            Liasing with business clients to fulfil their needs about the product
                          </p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">June 2019 - December 2019</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;