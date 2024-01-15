import languages from "../../data/languages.json";
import "./MyLanguages.css";



export default function MyLanguages() {
  return (
    <section className="languages--section" id="myLanguages">
      <div className="languages--container-box">
        <div className="languages-table-container">
          {/*<p className="sub--title">Recent Projects</p>*/}
          <h2 className="section--heading">Languages</h2>
          <table className="languages-table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Level</th>
              <th>Certification</th>
            </tr>
          </thead>
          <tbody>
            {languages.languages.map((item, index) => (
              <tr key={index} onClick={() => window.open(item.url, '_blank')} style={{ cursor: 'pointer' }}>
                <td>{item.language}</td>
                <td>{item.level}</td>
                <td>{item.certification}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
}
