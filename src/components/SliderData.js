import web1 from '../images/rob_web/preview.png';
import web2 from '../images/sapori_alpeadria/preview.png';
import web3 from '../images/portfolio/preview.jpg';
import web4 from '../images/portfolio/preview.jpg';
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
import slack from '../images/icons/slack.jpg';
import VSC from '../images/icons/VSC.jpg';
import wordpress from '../images/icons/wordpress.jpg';
import robMobHome from '../images/rob_web/mobile-home.png';
import rebMobEvent from '../images/rob_web/mobile-events.png';
import rebMobContact from '../images/rob_web/mobile-contact.png';

export const SliderData = [
    {
        id:0,
        projName: 'Roberto Vicchio - musician',
        preview: web1,
        description: 'I am actually working on this project.',
        fullDescription: 'todo',
        technology: [css, html, js, react, nodeJS, express, mongoDB, mongoose],
        images: [robMobHome, rebMobEvent, rebMobContact]
    },
    {
        id:1,
        projName: 'Sapori Alpe Adria',
        preview: web2,
        description: 'This was a project that I created to sell italian fine food, using wordpress.',
        fullDescription: 'todo',
        technology: [css, html, js, wordpress],
        images: ['to do', 'try it']
    },
    {
        id:2,
        projName: 'This project: portfolio',
        preview: web3,
        description: 'This is my first portfolio website',
        fullDescription: 'todo',
        technology: [css, html, js, react],
        images: ['to do', 'try it']
    },
    {
        id:2,
        projName: 'This project: portfolio',
        preview: web4,
        description: 'This is my first portfolio website',
        fullDescription: 'todo',
        technology: [css, html, js, react],
        images: ['to do', 'try it']
    }
];

