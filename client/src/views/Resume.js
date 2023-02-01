import placeholder from './images/300x200.png';
import ContactForm from '../components/ContactForm';
import axios from "../api/axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Resume() {

      // Add user and errors to the state
      const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
      });

      // Variables
      const navigate = useNavigate();
      const [msg, setMsg] = useState('');
    
      // Active form handling (Updates with the state)
      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
    
      // Send an axios request to log the user in
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios
            .post("api/contact", {
              name: inputs.name,
              email: inputs.email,
              message: inputs.message,
            })
            setMsg("Successfully Sent");
        } catch (error) {
          if (error) {
            setMsg(error.response.data.msg);
          }
        }
        navigate("/resume");
      };
      

  return (
    <>
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-6">
            <h1>Michael Lee Haddon II</h1>
          </div>
          <div className="col-6">
            <p className="text-right"></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="media">
              <img className="mr-3" src={placeholder} alt="Generic placeholder"></img>
              <div className="media-body">
                <h5 className="mt-0">Full Stack Developer</h5>
                <div className="text-body font-weight-bolder text-lg-center" style={{fontSize: "1.25em"}}></div>
                <div className="text-body text-md-center">
                  Trained and certified in the MERN stack using both SQL and noSQL Cloud/Local DBMS's.
                  Built and deployed through the AWS and Heroku platforms. 
                  Prior six year career serving in the medical corps of the US armed forces. 
                  I always aim to collaborate and work resourcefully in order to provide practical and innovative solutions.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="row justify-content-md-around m-1">
              <address>
                <strong>Michael Lee Haddon II</strong><br />
                31587 county road 3501<br />
                Murchison, TX 75778<br />
                Cell: (972) 741-7848 <br />
                <a href="mailto:#">haddon.mike2@outlook.com</a>
              </address>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Education</h2>
            <hr />
            <div className="row">
              <div className="col-6">
                <h4>Coding Dojo Fast-Paced Immersive</h4>
              </div>
              <div className="col-6">
                <h5 className="text-right"><span aria-hidden="true"></span> Sept 2020 - May 2021</h5>
              </div>
            </div>
            <ul>
              <li>Built and deployed several Full Stack Web Applications within several frameworks such as MERN, Django and DOTNet.</li>
              <li>Provided Front-End / Back-End Structure, Middle-Ware, Authorization, Web-sockets, within each of the software development lifecycle sprints.</li>
              <li>Developed exception handling and security services for RESTful, responsive, multithreaded and single threaded user-facing applications.</li>
              <li>Built full-scale applications utilizing SDLC methodologies from Planning to Maintenance.</li>
              <li>Defined and implemented working models of computer science core concepts and data structures with JavaScript and Node.js such as single-core capabilities and working with JavaScript on a local node server.</li>
              <li>Built and deployed full-stack serviced web applications through AWS 's cloud hosting service.</li>
              <li>Built scalable, responsive Web and unit-testing applications through Node.js and React, utilizing service workers, security and other middleware in order to attain a RESTful, deployed web application that stands up to industry standards.</li>
              <li>Performed in sprints, utilizing various software's such as Trello, Github and Zoom to streamline workflow.</li>
            </ul>
            </div>
            <div>
                <div>
                  <h5>SNHU Bachelors in Computer Science Major in Game Development</h5>
                </div>
                <h5><span aria-hidden="true"></span> Sept 2021 - Present</h5>
            </div>
          <div className="col-md-6 col-sm-12">
            <h2>Skill Set</h2>
            <h5>This graph is to represent the time that I've put into each category. not my experience level.</h5>
            <hr />
            <div className="progress mt-4">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}> JAVASCRIPT</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}> HTML</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> React/Nodejs</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> CSS</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}> MySQL Shell / Workbench</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}> PYTHON</div>
            </div>
            <div className="progress mt-4">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}> C++</div>
            </div>
          </div>
        </div>
        <hr />
        <h2>Portfolio</h2>
        <hr />
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
          </div>
          <div className="row text-center">
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
            <div className="col-sm-4 col-12 p-0"><img className="img-thumbnail"  src={placeholder} alt=""></img></div>
          </div>
        </div>
        <hr />
        <h2>Contact</h2>
        <hr />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8  col-12 jumbotron">
              <p className="has-text-centered">{msg}</p>
              <ContactForm 
                inputs={inputs}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;