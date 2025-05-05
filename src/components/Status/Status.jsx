import React, { useState } from "react";
import status1 from "../../assets/image/status1.png";
import status2 from "../../assets/image/status2.png";
import status3 from "../../assets/image/status3.png";
import status4 from "../../assets/image/status4.png";
import status5 from "../../assets/image/status5.png";
import status6 from "../../assets/image/status6.png";
import "./Status.scss";

function Status() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="main1-status">
      <div className="status">
        <div className="status-item" onClick={() => openModal(status1)}>
          <img src={status1} alt="Статус 1" />
        </div>
        <div className="status-item" onClick={() => openModal(status2)}>
          <img src={status2} alt="Статус 2" />
        </div>
        <div className="status-item" onClick={() => openModal(status3)}>
          <img src={status3} alt="Статус 3" />
        </div>
        <div className="status-item" onClick={() => openModal(status4)}>
          <img src={status4} alt="Статус 4" />
        </div>
        <div className="status-item" onClick={() => openModal(status5)}>
          <img src={status5} alt="Статус 5" />
        </div>
        <div className="status-item" onClick={() => openModal(status6)}>
          <img src={status6} alt="Статус 6" />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Статус модал" className="modal-image" />
            <button className="close-btn2" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Status;
