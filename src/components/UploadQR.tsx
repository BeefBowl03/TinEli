import React from 'react';
import './UploadQR.css';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf3f0AF8G9SW8o3zbkr9veKMXOs5D2OnnDu0cMaxQSSpzySPQ/viewform?usp=sharing&ouid=117261575142225620547';

const UploadQR: React.FC = () => {
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(FORM_URL)}`;

  return (
    <section className="upload-qr" id="uploads">
      <div className="upload-qr__container">
        <h2 className="upload-qr__title">Share Your Photos & Videos</h2>
        <p className="upload-qr__subtitle">Scan the QR to upload directly to our album</p>
        <div className="upload-qr__card">
          <img className="upload-qr__image" src={qrSrc} alt="Upload QR Code" />
          <a className="upload-qr__link" href={FORM_URL} target="_blank" rel="noreferrer">
            Open upload form
          </a>
        </div>
      </div>
    </section>
  );
};

export default UploadQR;


