import { MdLightbulb } from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5";
import Question from "../components/Question";
import ProfileCard from '../components/ProfileCard';
import React from 'react';


function Test(){
    const sport = "Baseball"
    let src = "https://pbs.twimg.com/profile_images/1610231810201636870/Nj3OUXrQ_400x400.jpg"
    let w = "250", h = "250", alt = "Oneshot Nico"
    let triggered = [1, 2, 3]
    let info = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nam totam, nesciunt fugit corrupti illo rem possimus voluptate reiciendis architecto."
    return(
        <>
        <h1>Alan Sanchez</h1>
        <p>Hello, my name is Alan Sanchez :3</p>
        <h3>Boy do I love {sport} </h3>
        <img src={src} width={w} height={h} alt= {alt} />
        <button><MdLightbulb  size="250px" style= {{backgroundColor: "purple", color:"yellow"}} /></button>
        <h1><IoLogoDiscord /></h1>
        <Question title="Bojack Horseman" info={info} />

        {
            triggered.length > 0 ? <h1>Hello Data</h1>: <h1>Nothing Found </h1>
        }
    <div>
      <ProfileCard
        profileImage="https://cloudinary.com/150"
        firstName="John"
        lastName="Doe"
        email="johndoe@example.com"
        socialLinks={{
          github: "https://github.com/johndoe",
          instagram: "https://instagram.com/johndoe",
          facebook: "https://facebook.com/johndoe"
        }}
      />
    </div>

        </>

    )
}

export default Test;