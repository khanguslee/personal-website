import React from 'react';

function Extracurriculars(props) {
  const { studentClubs } = props;

  const renderStudentClubs = clubs => {
    const clubList = clubs.map(club => {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="mb-0">{club.name}</h4>
            <div className="text-right">
              <span className="text-primary">
                {club.date.start + ' - ' + club.date.end}
              </span>
            </div>
          </div>
          <p>{club.title}</p>
        </div>
      );
    });
    return (
      <>
        <h3>Student Clubs</h3>
        {clubList}
      </>
    );
  };

  const renderHackathons = () => {
    return (
      <>
        <h3>Hackathons</h3>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
            Place - Hackamon 2019 - perspective
          </li>
          <li>Unihack 2019 - meta</li>
          <li>Hard Hackathon 2018 - Guarden</li>
        </ul>
      </>
    );
  };

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="extracurriculars"
      data-testid="extracurriculars-section"
    >
      <div className="w-100">
        <h2 className="mb-5">Extracurriculars</h2>
        {renderStudentClubs(studentClubs)}
        <br></br>
        {renderHackathons()}
      </div>
    </section>
  );
}

export default Extracurriculars;
