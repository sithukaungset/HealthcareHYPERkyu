import '../css/PatientPrediction.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

function Patientpredictions() {
  window.location.replace('http://203.247.240.226:3000');


  return (
    <div className="structure">
      <Link to="/">Machine Learning</Link>
      <div className="UserDatalist"> user Data Choose</div>
      <div className="UserResult"> Data Machine Learning result</div>
      <a href="http://203.247.240.226:3000" target="_blank" rel="noreferrer"></a>
      </div>
      

      
  )
}


export default Patientpredictions;      
