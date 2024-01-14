import education from "../../data/education.json";
import "./MyEducation.css";



export default function MyEducation() {
  return (
    <section className="education--section" id="myEducation">
      <div className="education--container-box">
        <div className="education-table-container">
          {/*<p className="sub--title">Recent Projects</p>*/}
          <h2 className="section--heading">Education</h2>
          <table className="education-table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Institution</th>
              <th>Period</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {education.education.map((item, index) => (
              <tr key={index} onClick={() => window.open(item.url, '_blank')} style={{ cursor: 'pointer' }}>
                <td className="education--item-img" ><img src={item.image} width={250} height={250} /></td>
                <td>{item.title}</td>
                <td>{item.school}</td>
                <td>{item.start} - {item.end}</td>
                <td>{item.location}</td>
                <td className="education--item-description">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}
