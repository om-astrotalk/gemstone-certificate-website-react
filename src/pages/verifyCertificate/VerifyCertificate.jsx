import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './verifyCertificate.scss';

const VerifyCertificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    certificateNo: '',
  });

  const [errors, setErrors] = useState({});
  const [verificationStatus, setVerificationStatus] = useState('idle');
  const [isVerifying, setIsVerifying] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.mobile || formData.mobile.length < 10) {
      newErrors.mobile = 'Please enter a valid mobile number.';
    }

    if (!formData.certificateNo || formData.certificateNo.length < 10) {
      newErrors.certificateNo = 'Please enter a valid certificate number.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      const isValid = Math.random() > 0.3;

      if (isValid) {
        setVerificationStatus('success');
        alert('Certificate Verified');
      } else {
        setVerificationStatus('error');
        alert('Verification Failed');
      }

      setIsVerifying(false);
    }, 1500);
  };

  return (
    <section className="verify-section">
      <div className="container">
        <div className="header">
          <h2>VERIFY YOUR CERTIFICATE</h2>
          <p>
            Enter your details to verify the authenticity of your gemstone certificate
            issued by our gemological laboratory.
          </p>
        </div>

        <div className="verify-grid">
          <div className="image-box">
            <div className="circle-container">
              <div className="circle-inner">
                {verificationStatus === 'idle' && (
                  <div className="image-wrapper">
                    <img
                      src="/lovable-uploads/3c255739-a1b4-4010-80d3-3cfb477249a6.png"
                      alt="Certificate"
                    />
                    <span className="badge">Verification Portal</span>
                  </div>
                )}
                {verificationStatus === 'success' && (
                  <div className="status success">
                    <FaCheckCircle className="icon" />
                    <h3>Certificate Verified</h3>
                    <p>Authentic Certificate</p>
                  </div>
                )}
                {verificationStatus === 'error' && (
                  <div className="status error">
                    <FaTimesCircle className="icon" />
                    <h3>Verification Failed</h3>
                    <p>Please check your details</p>
                  </div>
                )}
              </div>
            </div>

            {(verificationStatus === 'idle' || verificationStatus === 'success') && (
              <div className="verified-stamp">VERIFIED</div>
            )}
          </div>

          <div className="form-box">
            <div className="form-header">
              <span className="lab-badge">GEMOLOGICAL LABORATORY</span>
              <h3>Verify your Certificate</h3>
              <p>Please enter the details as they appear on your certificate</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name as on certificate"
                />
                <p className="error">{errors.name}</p>
              </div>

              <div className="form-group">
                <label>Mobile No.</label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter registered mobile number"
                />
                <p className="error">{errors.mobile}</p>
              </div>

              <div className="form-group">
                <label>Certificate No.</label>
                <input
                  name="certificateNo"
                  value={formData.certificateNo}
                  onChange={handleChange}
                  placeholder="Ex: 20210001-G-GL452680556"
                />
                <p className="error">{errors.certificateNo}</p>
              </div>

              <button type="submit" disabled={isVerifying}>
                {isVerifying ? 'VERIFYING...' : 'VERIFY CERTIFICATE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyCertificate;
