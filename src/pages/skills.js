import React from 'react';

function Skills() {
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="skills"
        >
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">
                    Programming Languages &amp; Tools
          </div>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="fab fa-js-square"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-react"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-node-js"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fab fa-python"></i>
                    </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-check"></i>
                        Agile Development &amp; Scrum
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;