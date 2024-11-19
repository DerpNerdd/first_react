import React from 'react';
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../pages/css/ProfileCard.css'; // Import the CSS for styling

const ProfileCard = ({ profileImage, firstName, lastName, email, socialLinks }) => {
  const defaultImage = 'https://via.placeholder.com/150'; // Default image if none is provided

  return (
    <div className="profile-card">
      <img
        src={profileImage || defaultImage}
        alt={`${firstName} ${lastName}`}
        className="profile-picture"
      />
      <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
      <a href={`mailto:${email}`} className="profile-email">{email}</a>
      <div className="social-links">
        {socialLinks.github && (
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        )}
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        )}
        {socialLinks.facebook && (
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
