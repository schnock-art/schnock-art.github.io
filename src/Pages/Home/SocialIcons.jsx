
import { SocialIcon } from 'react-social-icons'
import cvPdf from "../../data/CV Jan Gebert.pdf"
export default function     () {
    return (
        <div className="footer--social--icon">
          <ul>
            <li>
              <a className='cv-download'
                href={cvPdf}
                download="CV Jan Gebert"
                target="_blank"
                rel="noreferrer"
              >
            <button className="btn btn-navbar">
              Download CV</button>
            </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/data-scientist-engineer-tech-lead-jan-gebert/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon url="https://www.linkedin.com/in/data-scientist-engineer-tech-lead-jan-gebert/" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/schnock-art"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon url="https://github.com/schnock-art" />
              </a>
            </li>
            </ul>
        </div>);
}