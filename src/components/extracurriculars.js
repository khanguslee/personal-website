import React from 'react';

function Extracurriculars() {
    const renderStudentClubs = () => {
        return (
            <>
                <h3>Student Clubs</h3>
                <ul className="fa-ul mb-0">
                    <li>
                        Monash Human Power (MHP) 2018-2020 - Electrical Team Lead
                    </li>
                    <li>
                        Monash Association of Coding (MAC) 2019/20 - Technology Director
                    </li>
                    <li>
                        Society of Monash Electrical Engineers (SMEE) 2019 - Careers and Sponsorship Representative
                    </li>
                    <li>
                        Society of Monash Electrical Engineers (SMEE) 2018 - 3<sup>rd</sup> Year Representative
                    </li>
                </ul>
            </>
        )
    }

    const renderHackathons = () => {
        return (
            <>
                <h3>Hackathons</h3>
                <ul className="fa-ul mb-0">
                    <li>
                        <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
                        Place - Hackamon 2019 - perspective
            </li>
                    <li>
                        Unihack 2019 - meta
            </li>
                    <li>
                        Hard Hackathon 2018 - Guarden
            </li>
                </ul>
            </>
        )
    }

    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="extracurriculars"
        >
            <div className="w-100">
                <h2 className="mb-5">Extracurriculars</h2>
                {renderStudentClubs()}
                <br></br>
                {renderHackathons()}

            </div>
        </section>
    )
}

export default Extracurriculars;