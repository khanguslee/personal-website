import React from 'react';

function Extracurriculars(props) {
  const { studentClubs, hackathons } = props;

  const renderStudentClubs = clubs => {
    if (!clubs || !clubs.length) return <> </>;

    const clubList = clubs.map((club, index) => {
      return (
        <div key={club + index}>
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
    if (!hackathons || !hackathons.length) return <> </>;

    const hackathonList = hackathons.map((hackathon, index) => {
      const { name, project, projectLinks, description } = hackathon;

      const hackathonTitle = `${name} - ${project}`;

      // Create links to project
      let hackathonProjectLinks;
      if (projectLinks) {
        hackathonProjectLinks = projectLinks.map((projectLink, index) => {
          return (
            <a
              href={projectLink.link}
              className="mr-3"
              key={projectLink.link + index}
            >
              <i>{projectLink.name}</i>
            </a>
          );
        });
      }

      return (
        <div key={hackathonTitle + index}>
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
