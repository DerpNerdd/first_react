import React from 'react';
import Gallery from '../components/Gallery';

function GalleryPage() {
  const images = [
    {
      pictureName: 'Gato jumping in joy',
      pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297770/PetImages/sny1drl5iaanfarcb88o.jpg',
      altText: 'No one can control it',
    },
    {
      pictureName: 'Dog experiencing pure joy',
      pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297331/PetImages/lyyw7eaccpst3phx0un8.jpg',
      altText: 'He doesnt pay taxes',
    },
    {
      pictureName: 'Dog with 0 braincells',
      pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297103/PetImages/pslv0x1befc7byzar7yg.jpg',
      altText: 'Head empty brain smooth',
    },
    {
        pictureName: 'Bailey Doppleganger',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731017224/full-cloud-tasks/dog2.jpg.jpg',
        altText: 'I just grabbed this from google',
      },
      {
        pictureName: 'Loaf of bread',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297649/PetImages/nbesixfauouvr1nlj2ue.jpg',
        altText: 'Dangerous loaf of bread',
      },
      {
        pictureName: 'What is it looking at',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297902/PetImages/rk4uztujphtcpp3km392.jpg',
        altText: 'Its looking at its prey.',
      },
      {
        pictureName: 'Some weird looking bird',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731298257/PetImages/u5bzcxe9hq1oyzgyutjj.jpg',
        altText: 'Does cooked bird taste good?',
      },
      {
        pictureName: 'That same weird looking bird',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731298257/PetImages/ubyz6auegs4h2gvfbpzw.jpg',
        altText: 'Do they taste like chicken or..',
      },
      {
        pictureName: 'That one gerbil from South Park',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731298428/PetImages/mttwbhgotdesch5lbznc.jpg',
        altText: 'It is the King',
      },
      {
        pictureName: 'Funny looking reptile',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731298584/PetImages/vvrddyx7qtex5cvwsesi.jpg',
        altText: 'Boop',
      },
      {
        pictureName: 'Ugly looking cat',
        pictureURL: 'https://res.cloudinary.com/dmrevelyc/image/upload/v1731297835/PetImages/eezsi0uk8vq1zudv1rls.jpg',
        altText: 'I dont like the hairless ones why do they look like that',
      }
  ];

  return (
    <div>
      { }
      <Gallery images={images} />
    </div>
  );
}

export default GalleryPage;
