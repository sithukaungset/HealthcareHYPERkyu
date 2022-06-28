import Patientrecords from './Patientrecords';
import Patienttransactions from './Patienttransactions';
import Patientpredictions from './Patientpredictions';

import '../css/Menubar.css';

function Menubar_nav({state}) {
    return (
        <div >
            {state == 1 ? <Patienttransactions /> :
             state == 2 ? <Patientpredictions /> :
             <Patientrecords />}
        </div>
    )
}

export default Menubar_nav;