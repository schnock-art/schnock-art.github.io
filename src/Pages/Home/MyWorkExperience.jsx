import workExperience from "../../data/workExperience.json";
import "./MyWorkExperience.css";


export default function MyWorkExperience() {
  return (
    <section className="career--section" id="myWorkExperience">
      <div className="career--container-box">
        <div className="career-table-container">
          {/*<p className="sub--title">Recent Projects</p>*/}
          <h2 className="section--heading">Work Experience</h2>
          <table className="career-table">
          <thead>
            <tr>
              <th></th>
              <th>Role</th>
              <th>Company</th>
              <th>Period</th>
              <th>Location</th>
              <th>Achievements</th>
            </tr>
          </thead>
          <tbody>
            {workExperience.workExperience.map((item, index) => (
              <tr key={index} onClick={() => window.open(item.url, '_blank')} style={{ cursor: 'pointer' }}>
                <td className="career--item-img" ><img src={item.image} width={250} height={250} /></td>
                <td>{item.role}</td>
                <td>{item.company}</td>
                <td>{item.start} - {item.end}</td>
                <td>{item.location}</td>
                <td className="career--item-description">
                  <ul>
                    {item.description.map((achievementItem, index) => (
                  <li className="achievement-item">{achievementItem}</li>
                ))}
                </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}
