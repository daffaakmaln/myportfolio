import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const CertificatesCarousel = ({ certificates }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <Carousel indicators={false} prevLabel="" nextLabel="">
        {certificates.map((certificate, index) => (
          <Carousel.Item key={index}>
            <div className="certificate-card">
              <img
                className="d-block w-100"
                src={certificate.image}
                alt={`Certificate ${index + 1}`}
              />
              <div className="certificate-info">
                <h3>{certificate.year}</h3>
                <p>{certificate.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShow(certificate.image)}
                >
                  View
                </button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Modal untuk memperbesar gambar */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        fullscreen
        className="custom-modal"
      >
        <div className="modal-overlay" onClick={handleClose}>
          <img
            src={selectedImage}
            alt="Certificate"
            className="full-modal-img"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
        </div>
      </Modal>
    </>
  );
};

export default CertificatesCarousel;
