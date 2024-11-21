import React, { useState } from "react";
import Footer_Modern from "../components/Footer_Modern";

const Footer = () => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
    };
    
    const loremContent = Array(10)
    .fill(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur sapiente sequi dolor atque beatae dignissimos error itaque ad minus tempore aperiam numquam, hic explicabo incidunt id tenetur quidem blanditiis cupiditate! Optio beatae fugiat, eveniet commodi officia fuga pariatur perspiciatis voluptates tempore omnis suscipit voluptatem architecto maiores distinctio repellat repellendus. Doloribus, mollitia neque? Ratione minus odio perspiciatis voluptatem. Autem, soluta dolorum iste neque tenetur natus ipsum debitis quo libero vel impedit alias at veniam aspernatur explicabo ullam minima dicta dolorem! Facere a culpa omnis perspiciatis modi obcaecati non excepturi odit. Repellendus quaerat exercitationem laudantium accusantium sunt placeat laborum quos, voluptatibus ratione recusandae totam facere harum magni voluptatem optio deleniti accusamus voluptate dolores molestias architecto. Alias nostrum repellendus unde voluptas iste, a quam voluptatem eius quas. Quod ex, quas est tenetur molestias veritatis neque, ipsa molestiae pariatur, nihil a. Sed voluptates ea obcaecati amet aliquam a nobis maxime, voluptatibus temporibus cupiditate porro ad ratione iste vero veniam sit eos dicta, doloribus magni nam iure eligendi aut hic. Accusantium sint maiores non nemo a beatae, quo natus alias repudiandae ab pariatur voluptates, blanditiis facilis voluptatem aperiam commodi id quae? Totam labore mollitia voluptatibus expedita tempore blanditiis aliquid animi delectus molestiae? Sequi, ad."
    )
    .map((text, index) => <p key={index}>{text}</p>);

    return (
        <>

          <main className={`bg-${theme === "dark" ? "gray-800" : "white"} p-4`}>
            {loremContent}
          </main>
          <Footer_Modern
            logo="https://res.cloudinary.com/dmrevelyc/image/upload/v1732220244/GlobalLogo_dpeid0.png"
            footercontent="I am footer content, change me!"
            socialLinks={{
              Github: "#",
              Linkedin: "#",
              Instagram: "#",
              Twitter: "#",
              Facebook: "#",
            }}
            servicesLinks={{
              "Web Development": "#",
              "Mobile App Development": "#",
              "UI/UX Design": "#",
              "Consulting Services": "#",
            }}
            companyLinks={{
              "About Us": "#",
              "Our Team": "#",
              "Careers": "#",
              "Partners": "#",
            }}
            helpfulLinks={{
              "Support": "#",
              "Contact": "#",
              "Privacy Policy": "#",
              "Terms of Service": "#",
            }}
            legalLinks={{
              "Privacy Policy": "#",
              "Terms of Service": "#",
            }}
            copyrightText="© 2022. Company Name. All rights reserved."
          />
        </>
      );
    };

export default Footer;
