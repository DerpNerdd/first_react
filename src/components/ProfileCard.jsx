import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import '../pages/css/ProfileCard.css'; // Import the CSS for styling

const ProfileCard = ({
  profileImage,
  firstName,
  lastName,
  title,
  bio,
  email,
  phone,
  location,
  socialLinks,
  skills = [],
}) => {
  const defaultImage = 'https://via.placeholder.com/150'; // Default image if none is provided

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        {/* Main Content */}
        <div className="profile-card-content">
          {/* Profile Picture */}
          <img
            src={profileImage || defaultImage}
            alt={`${firstName} ${lastName}`}
            className="profile-picture"
          />

          {/* Name and Title */}
          <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
          <h3 className="profile-title">{title}</h3>

          {/* Bio */}
          <p className="profile-bio">{bio}</p>

          {/* Contact Info */}
          <div className="profile-contact">
            <a href={`mailto:${email}`} className="profile-email">
              {email}
            </a>
            <span>|</span>
            <a href={`tel:${phone}`} className="profile-phone">
              {phone}
            </a>
            <span>|</span>
            <span className="profile-location">{location}</span>
          </div>

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="profile-skills">
              <h3>Skills</h3>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-item" style={{ '--i': index }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Links Section */}
          {socialLinks && (
            <div className="profile-social-links">
              <h3>Connect with me</h3>
              <div className="social-links">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon github-icon"
                  >
                    <FaGithub />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon linkedin-icon"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon twitter-icon"
                  >
                    <FaTwitter />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon instagram-icon"
                  >
                    <FaInstagram />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon facebook-icon"
                  >
                    <FaFacebook />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon youtube-icon"
                  >
                    <FaYoutube />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
