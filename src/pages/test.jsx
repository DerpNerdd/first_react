import { MdLightbulb } from "react-icons/md";
import { IoLogoDiscord } from "react-icons/io5";
import {default as Topics} from "../components/Question";
import React from 'react';
import Button from '../components/Button';
import {useState} from 'react'


function Test(){
    const sport = "Baseball"
    let src = "https://pbs.twimg.com/profile_images/1610231810201636870/Nj3OUXrQ_400x400.jpg"
    let w = "250", h = "250", alt = "Oneshot Nico"
    // let triggered = [ ]
    // if(triggered.length <= 0){
    //   return(<h1> This rendered first haha </h1>)
    // }
    // let content;
    // if(isLogginIn){
    //   content = <AdminPanel/>
    // }else{
    //   content = <LoginForm/>
    // }
    // return content;
    const [count, setCount] = useState(0)
    const handleClick = () => {
      setCount(count + 1)
    }
    let info = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nam totam, nesciunt fugit corrupti illo rem possimus voluptate reiciendis architecto."
    return(
        <>
        <Button count = {count} onClick = {handleClick}/>
        <Button count = {count} onClick = {handleClick}/>
        <h1>Alan Sanchez</h1>
        <p>Hello, my name is Alan Sanchez :3</p>
        <h3>Boy do I love {sport} </h3>
        <img src={src} width={w} height={h} alt= {alt} />
        <button><MdLightbulb  size="250px" style= {{backgroundColor: "purple", color:"yellow"}} /></button>
        <h1><IoLogoDiscord /></h1>
        <Topics title="Bojack Horseman" info={info} />
        <Button />
        </>

    )
}

export default Test;