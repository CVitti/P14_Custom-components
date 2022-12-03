// @ts-nocheck

import React, { useState } from "react";
import Modal from "./components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus, faIdCard, faCalendarDay, faUsersRectangle, faHouseChimneyUser} from '@fortawesome/free-solid-svg-icons';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function manageModalState(){
    setIsModalOpen(!isModalOpen); 
  }

  const testEmployee = {
    firstName: "Prénom",
    lastName: "Nom",
    dateOfBirth: "1997-05-22",
    startDate: "2019-02-18",
    department: "Engeneering",
    street: "Rue",
    city: "Ville",
    state: "Etat",
    zipCode: "Code postal"
  };

  return (
    <React.Fragment>
      <button onClick={manageModalState}>Open</button>
      <Modal
        isOpen={isModalOpen}
        modalClose={manageModalState}
      >
        <ul className="createModalList">
          <li className="createModalTitle createModalItem">
            <FontAwesomeIcon icon={faUserPlus} color="#0ca00c" fixedWidth size="xl"/>
            <span className="bold">User added to the list !</span>
          </li>
          <li className="createModalItem">
            <FontAwesomeIcon icon={faIdCard} color="#146EBE" fixedWidth size="xl"/>
            <span className="employeData">{testEmployee.lastName} {testEmployee.firstName} </span>
            (Born on <span className="employeData">{testEmployee.dateOfBirth}</span>)
          </li>
          <li className="createModalItem">
            <FontAwesomeIcon icon={faCalendarDay} color="#146EBE" fixedWidth size="xl"/> Started on 
            <span className="employeData">{testEmployee.startDate}</span>
          </li>
          <li className="createModalItem">
            <FontAwesomeIcon icon={faUsersRectangle} color="#146EBE" fixedWidth size="xl"/>
            <span className="employeData">{testEmployee.department}</span>Department
          </li>
          <li className="createModalItem">
            <FontAwesomeIcon icon={faHouseChimneyUser} color="#146EBE" fixedWidth size="xl"/>
            <span className="employeData">{testEmployee.street}, {testEmployee.city}, {testEmployee.zipCode}, {testEmployee.state}</span>
          </li>
        </ul>       
      </Modal>
    </React.Fragment>
    
  );
}

export default App;
