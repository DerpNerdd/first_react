import React from 'react';
import ProfileCard from '../components/ProfileCard';

function Profile() {
  return (
    <div>
      <ProfileCard
        profileImage="https://res.cloudinary.com/dmrevelyc/image/upload/v1732049622/alan_trjy4d.jpg"
        firstName="John"
        lastName="Doe"
        title="Full Stack Developer"
        bio="Passionate developer with a love for creating dynamic web applications."
        email="johndoe@example.com"
        phone="+1 (555) 123-4567"
        location="San Francisco, CA"
        socialLinks={{
          github: 'https://github.com/johndoe',
          linkedin: 'https://linkedin.com/in/johndoe',
          twitter: 'https://twitter.com/johndoe',
          instagram: 'https://instagram.com/johndoe',
          facebook: 'https://facebook.com/johndoe',
          youtube: 'https://youtube.com/johndoe',
        }}
        skills={['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'GraphQL']}
      />
    </div>
  );
}

export default Profile;
