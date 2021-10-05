import web1 from '../images/rob_web/preview.png';
import web2 from '../images/sapori_alpeadria/preview.png';
import web3 from '../images/portfolio/preview.jpg';
import clickUp from '../images/icons/click-up.jpg';
import css from '../images/icons/css.jpg';
import express from '../images/icons/express.jpg';
import figma from '../images/icons/figma.jpg';
import gitHub from '../images/icons/github.jpg';
import html from '../images/icons/html-.jpg';
import js from '../images/icons/js.jpg';
import materialUI from '../images/icons/materialUI.jpg';
import mongoDB from '../images/icons/mongoDB.jpg';
import mongoose from '../images/icons/mongoose.jpg';
import nodeJS from '../images/icons/nodeJS.jpg';
import react from '../images/icons/react.jpg';
import redux from '../images/icons/redux.jpg';
import wordpress from '../images/icons/wordpress.jpg';
import robMobHome from '../images/rob_web/mobile-home.png';
import rebMobEvent from '../images/rob_web/mobile-events.png';
import rebMobContact from '../images/rob_web/mobile-contact.png';
import saaHome from '../images/sapori_alpeadria/Home_preview.jpg';
import saaProdukte from '../images/sapori_alpeadria/Produkte_desktop.jpg';
import saaRezepte from '../images/sapori_alpeadria/Rezepte_desktop.jpg';
import saaMobile1 from '../images/sapori_alpeadria/Home_mobile.jpg';
import saaMobile2 from '../images/sapori_alpeadria/Rezepte_mobile.jpg';
import portfolioHome from '../images/portfolio/preview.jpg';
import greetnowHome from '../images/greet_now/greet-now-home.jpg';
import greetnowLogin from '../images/greet_now/greet-now-login.jpg';
import greetnowCard from '../images/greet_now/greet-now-card.jpg';

export const SliderData = [
    {
        id:0,
        projName: 'Roberto Vicchio - musician',
        preview: web1,
        description: 'I am currently working on this project.',
        fullDescription: 'I am creating this website for a musician. This project will have a back-end side, in order to change easily texts, images and events. I will create a page where the Client can change everything by himself.',
        technology: [css, html, js, react, nodeJS, express, mongoDB, mongoose],
        images: [{image:robMobHome, desc:'Mobile version'}, {image:rebMobEvent, desc:'Mobile version'}, {image:rebMobContact, desc:'Mobile version'}],
        gitHubLink: null
    },
    {
        id:1,
        projName: 'Sapori Alpe Adria',
        preview: web2,
        description: 'A website to promote Italian fine food.',
        fullDescription: 'I created this website to ensure my presence in Internet, promoting my business. For this project I used Wordpress creating every part inside of it. This website is no more reachable because I decided to change carrier.',
        technology: [css, html, js, wordpress],
        images: [{image:saaHome, desc:'Desktop version'}, {image:saaProdukte, desc:'Desktop version'}, {image:saaRezepte, desc:'Desktop version'}, {image:saaMobile1, desc:'Mobile version'}, {image:saaMobile2, desc:'Mobile version'}],
        gitHubLink: null
    },
    {
        id:2,
        projName: 'Portfolio',
        preview: web3,
        description: 'This is the website you are navigating on',
        fullDescription: 'This is my first portfolio responsive website, I am still working and practicing on it, so it could be that there is some bugs yet. You can check it just navigating. Every comment is welcome. The contact form is disabled, so please mail me on LinkedIn or to my private e-mail if you got it. You find this project on ',
        technology: [css, html, js, react],
        images: [{image:portfolioHome, desc:'Desktop version'}],
        gitHubLink: 'https://github.com/Pio-js/My-portfolio'
    },
    {
        id:3,
        projName: 'Greet Now',
        preview: greetnowHome,
        description: 'A web app to create and send greeting cards',
        fullDescription: 'This is a team project. We created an app to send greeting cards. This project was a good practice and we use it as final project for our graduation day. I created the first SPA structure, authentication component in the front and back-end using JWT and Bcrypt. Furthermore I created several components. This is a MVP and you can find it on ',
        technology: [css, html, js, react, redux, materialUI, nodeJS, mongoDB, mongoose, clickUp, gitHub, figma],
        images: [{image:greetnowHome, desc:'Desktop version'}, {image:greetnowLogin, desc:'Desktop version'}, {image:greetnowCard, desc:'Desktop version'}],
        gitHubLink: "https://github.com/kornavol/GreetNow-front"
    }
];

