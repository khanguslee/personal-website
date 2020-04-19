import React from 'react';

function Extracurriculars(props) {
  const { studentClubs, hackathons } = props;

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

  const renderHackathons = hackathons => {
    const hackathonList = hackathons.map(hackathon => {
      const { name, project, projectLinks, description } = hackathon;

      const hackathonTitle = `${name} - ${project}`;

      // Create links to project
      const hackathonProjectLinks = projectLinks.map(projectLink => {
        return (
          <a href={projectLink.link} className="mr-3">
            <i>{projectLink.name}</i>
          </a>
        );
      });

      return (
        <div>
          <h4 className="mb-0">{hackathonTitle}</h4>
          {!!projectLinks && <div>{hackathonProjectLinks}</div>}
          <p>{description}</p>
        </div>
      );
    });

    return (
      <>
        <h3>Hackathons</h3>
        {hackathonList}
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
        {renderHackathons(hackathons)}
      </div>
    </section>
  );
}

export default Extracurriculars;
