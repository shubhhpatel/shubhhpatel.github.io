import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Typewriter from 'typewriter-effect';
import './App.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import videoDemo from './assets/images/localify_demo.mp4';
import { motion } from 'framer-motion';
import images from './images';
import faces from './faces';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Kursor from 'kursor';
import 'kursor/dist/kursor.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import linkedin from './assets/images/linkedin.png';
import github from './assets/images/github.png';
import email from './assets/images/envelope.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
function AlwaysOpenExample() {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);
  const [accordion5Open, setAccordion5Open] = useState(false);
  const toggleAccordion1 = () => {
    setAccordion1Open(!accordion1Open);
  };
  const toggleAccordion2 = () => {
    setAccordion2Open(!accordion2Open);
  };
  const toggleAccordion3 = () => {
    setAccordion3Open(!accordion3Open);
  };
  const toggleAccordion4 = () => {
    setAccordion4Open(!accordion4Open);
  };
  const toggleAccordion5 = () => {
    setAccordion5Open(!accordion5Open);
  };
  return /*#__PURE__*/React.createElement(Accordion, {
    className: 'custom-accordion'
  }, /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: '0',
    active: accordion1Open ? 'true' : 'false'
  }, /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Button, {
    variant: 'link',
    className: 'button',
    onClick: toggleAccordion1
  }, 'How I get unreleased music on Spotify \uD83D\uDE40'), accordion1Open && /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    style: {
      width: '32%'
    }
  }, /*#__PURE__*/React.createElement('p', null, 'Web application made using ', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, 'Flask'), ' and ', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, 'Python'), ' that streamlines the process of converting YouTube audio tracks into custom Spotify tracks. Security certificate from ', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, 'ZeroSSL'), '. Hosted using ', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, 'GoDaddy'), ' and ', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, 'PythonAnywhere'), '. Check it out at  ', /*#__PURE__*/React.createElement('a', {
    href: 'https://www.localify.online',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'www.localify.online'), '.')), /*#__PURE__*/React.createElement('td', {
    style: {
      width: '4%'
    }
  }), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('h3', null, 'Stuff I learned'), /*#__PURE__*/React.createElement('p', null, '1. How to use Python as a backend platform and Flask as a frontend platform for web applications', /*#__PURE__*/React.createElement('br', null), '2. How to host websites online (domains, DNS, SSL)', /*#__PURE__*/React.createElement('br', null), '3. Domain security certificates (http vs https) using ZeroSSL', /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold'
    }
  }, '4. Hosting websites is extremely annoying and tedious'))))), /*#__PURE__*/React.createElement('h3', null, 'Check it out ', /*#__PURE__*/React.createElement('a', {
    href: 'https://github.com/shubhhpatel/localify',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'here'), '.'), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('p', {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement('video', {
    src: videoDemo,
    autoPlay: true,
    loop: true,
    style: {
      width: '90%'
    }
  })))), /*#__PURE__*/React.createElement('br', null))), /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: '1',
    active: accordion2Open
  }, /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Button, {
    className: 'button',
    variant: 'link',
    onClick: toggleAccordion2
  }, 'Western Student Hub \uD83D\uDC7E'), accordion2Open && /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    style: {
      width: '28%'
    }
  }, /*#__PURE__*/React.createElement('p', null, 'Collaborative web application made using', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' React'), ' and', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' MongoDB'), '. Allows for students to upload a syllabus and have a summarized view of all important dates, assignments, and exams using a file scraper. My contribution was mainly focused on the syllabus upload page.')), /*#__PURE__*/React.createElement('td', {
    style: {
      width: '4%'
    }
  }), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('h3', null, 'Stuff I learned'), /*#__PURE__*/React.createElement('p', null, '1. ReactJS (wow that was a tough learning curve)', /*#__PURE__*/React.createElement('br', null), '2. API Calls from the frontend and requesting information from the backend', /*#__PURE__*/React.createElement('br', null), '3. BootStrapping for easy CSS', /*#__PURE__*/React.createElement('br', null), '4. GitHub. Pretty much everything from push, pull, and more advanced stuff like pull requests.', /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold'
    }
  }, '5. Editing code as a large team is very meticulous and you have to be constantly communicating so that you don\'t overwrite someone else\'s code \uD83D\uDE2C'))))), /*#__PURE__*/React.createElement('h3', null, 'Check it out ', /*#__PURE__*/React.createElement('a', {
    href: 'https://github.com/Breaking-Binary/WebApp',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'here'), '.'))), /*#__PURE__*/React.createElement('br', null))), /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: '2',
    active: accordion3Open
  }, /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Button, {
    className: 'button',
    variant: 'link',
    onClick: toggleAccordion3
  }, 'My personal website \uD83C\uDF0E'), accordion3Open && /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    style: {
      width: '28%'
    }
  }, /*#__PURE__*/React.createElement('p', null, 'The thing you are viewing right now.'), /*#__PURE__*/React.createElement('p', null, 'Made using', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' React'), ' and', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' Spotify API'), '. Bootstrapped with', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' Netlify '), 'and hosted on', /*#__PURE__*/React.createElement('span', {
    style: {
      fontWeight: 'bold',
      color: 'green'
    }
  }, ' GitHub Pages'), '. Special shoutout to ChatGPT for being the best troubleshooter in the world.')), /*#__PURE__*/React.createElement('td', {
    style: {
      width: '4%'
    }
  }), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('h3', null, 'Stuff I learned'), /*#__PURE__*/React.createElement('p', null, '1. Customizing Bootstrap components', /*#__PURE__*/React.createElement('br', null), '2. Integrating Spotify API into a live website', /*#__PURE__*/React.createElement('br', null), '3. The design process for creating a front-end application (something that is pretty new to me since I\'m not the most creative person)', /*#__PURE__*/React.createElement('br', null), '4. Hosting a website on GitHub pages')))), /*#__PURE__*/React.createElement('h3', null, 'Check it out ', /*#__PURE__*/React.createElement('a', {
    href: 'https://github.com/shubhhpatel/personalWebsite',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'here'), '.'))), /*#__PURE__*/React.createElement('br', null))), /*#__PURE__*/React.createElement('h2', null, 'Stuff I\'ve done in the past'), /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: '4',
    active: accordion5Open
  }, /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Button, {
    className: 'button',
    variant: 'link',
    onClick: toggleAccordion5
  }, 'Western Software Engineering \uD83D\uDC68\u200D\uD83D\uDCBB'), accordion5Open && /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    style: {
      width: '30%'
    }
  }, /*#__PURE__*/React.createElement('p', null, 'As part of the ', /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'RGB(88, 44, 131'
    }
  }, 'Projects Team on WSE'), ', I worked with six other team members (one is missing from the picture) to fully plan, develop and deploy a full-stack application using ', /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'RGB(88, 44, 131'
    }
  }, 'React and MongoDB'), '. I learned a lot throughout the year and I can definitely say it took me from being a ', /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'RGB(88, 44, 131'
    }
  }, 'wannabe-coder to a semi-legit coder'), ' \uD83D\uDE0E.'), /*#__PURE__*/React.createElement('p', null, /*#__PURE__*/React.createElement('strong', null, 'Skills Developed:')), /*#__PURE__*/React.createElement('p', null, '- Github', /*#__PURE__*/React.createElement('br', null), '- React and JS', /*#__PURE__*/React.createElement('br', null), '- MongoDB', /*#__PURE__*/React.createElement('br', null), '- API Calls')), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('img', {
    src: 'src/assets/images/WSE.JPG',
    alt: 'WSE Demons',
    style: {
      width: '600px',
      marginLeft: "20px"
    }
  })))))), /*#__PURE__*/React.createElement('br', null))), /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: '3',
    active: accordion4Open
  }, /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement(Button, {
    className: 'button',
    variant: 'link',
    onClick: toggleAccordion4
  }, 'Hoodies for Hope \uD83D\uDC55'), accordion4Open && /*#__PURE__*/React.createElement('div', null, /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    style: {
      width: '30%'
    }
  }, /*#__PURE__*/React.createElement('p', null, /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'orange'
    }
  }, 'Hoodies for Hope'), ' is a business started as part of the ', /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'orange'
    }
  }, 'Junior Achievement Company Program'), '. I decided to pitch a business that sells apparel with designs created by an Indigenous artist and colored by Indigenous children. Profits from the business would go towards supporting a yearly trip for a fly-in reserve in Western Canada.'), /*#__PURE__*/React.createElement('p', null, 'By the end of the program, ', /*#__PURE__*/React.createElement('strong', {
    style: {
      color: 'orange'
    }
  }, 'we did $1700 in revenue! '), 'We were also Featured on ', /*#__PURE__*/React.createElement('a', {
    href: 'https://www.breakfasttelevision.ca/videos/this-clothing-brands-designs-are-created-by-indigenous-youth/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'Breakfast TV'), ' and ', /*#__PURE__*/React.createElement('a', {
    href: 'https://www.thestar.com/local-brampton/life/2022/05/12/hoodies-for-hope-brampton-students-set-out-to-help-indigenous-youth.html',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, 'Toronto Star'), '. Pretty cool.')), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('img', {
    src: 'src/assets/images/H4H.jpeg',
    alt: 'Hoodies for Hope Demons',
    style: {
      width: '600px',
      marginLeft: "20px"
    }
  })))))), React.createElement('br', null))));
}
function App() {
  useEffect(() => {
    new Kursor({
      type: 4,
      removeDefaultCursor: true,
      color: '#a1e244'
    });
  }, []);
  const [videoPlayed, setVideoPlayed] = useState(false);
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);
  const dynamicWords = ['film photography', 'small concerts', 'chatGPT', 'underground hip-hop', 'procrastinating', 'toronto r&b', 'concert photography', 'bedroom pop', 'sitcoms', 'spotify', 'startups', 'greek mythology', 'product management', 'the raptors'];
  const staticString = "I like ";
  return /*#__PURE__*/React.createElement('div', {
    className: 'App-container'
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement('h1', {
    style: {
      marginBottom: '5px',
      fontSize: "58px"
    }
  }, 'What\'s up, I\'m Shubh Patel'), /*#__PURE__*/React.createElement('h2', {
    style: {
      marginTop: '0',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement('span', null, staticString), /*#__PURE__*/React.createElement('span', {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/React.createElement(Typewriter, {
    options: {
      strings: dynamicWords,
      autoStart: true,
      loop: true,
      deleteSpeed: 10,
      delay: 50
    }
  }))), /*#__PURE__*/React.createElement('table', null, /*#__PURE__*/React.createElement('tbody', null, /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', {
    rowSpan: 2,
    style: {
      width: '550px',
      paddingRight: "20px"
    }
  }, /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: 'jsx',
    style: materialDark
  }, `let aboutMe = getShubhBiography();

function getShubhBiography() {
  return {
    location: "Toronto",
    university: "Western University",
    program: [
      "Computer Science", 
      "Business"
    ],
    year: 2,
    careerInterests: [
      "Product Management",
      null // uh, I'm still figuring it out
    ],
    otherInterests: [
      "Big Data",
      "Machine Learning",
      "Blockchain",
      "Artificial Intelligence",
      "Digital Manufacturing",
      "Quantum Communication",
      "Internet of Things"
    ],
    doYouGetTheReference: true
  };
}`)), /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('div', {
    className: 'slideshow1'
  }, /*#__PURE__*/React.createElement(Carousel, {
    showThumbs: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    autoPlay: true
  }, faces.map((image, index) => /*#__PURE__*/React.createElement('div', {
    key: index
  }, /*#__PURE__*/React.createElement('img', {
    src: image,
    style: {
      minHeight: '30rem',
      minWidth: "fit-content"
    }
  }))))))), /*#__PURE__*/React.createElement('tr', null, /*#__PURE__*/React.createElement('td', null, /*#__PURE__*/React.createElement('div', {
    className: 'socials-bar'
  }, /*#__PURE__*/React.createElement('a', {
    href: 'https://github.com/shubhhpatel',
    target: '_blank'
  }, /*#__PURE__*/React.createElement('div', {
    className: 'social-icon github-icon'
  }, /*#__PURE__*/React.createElement('img', {
    src: github,
    alt: 'GitHub',
    className: 'icon'
  }))), /*#__PURE__*/React.createElement('a', {
    href: 'https://www.linkedin.com/in/-shubhpatel/',
    target: '_blank'
  }, /*#__PURE__*/React.createElement('div', {
    className: 'social-icon linkedin-icon'
  }, /*#__PURE__*/React.createElement('img', {
    src: linkedin,
    alt: 'LinkedIn',
    className: 'icon'
  }))), /*#__PURE__*/React.createElement('a', {
    href: 'mailto:spate768@uwo.com'
  }, /*#__PURE__*/React.createElement('div', {
    className: 'social-icon email-icon'
  }, /*#__PURE__*/React.createElement('img', {
    src: email,
    alt: 'Email',
    className: 'icon'
  })))))))), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement('h2', null, 'Stuff I\'ve been working on'), /*#__PURE__*/React.createElement(AlwaysOpenExample, null)), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement('h2', null, 'Now, for some fun stuff... I really like concert photography, so here are a few of my favourite shots.'), /*#__PURE__*/React.createElement(Carousel, {
    showThumbs: false,
    showStatus: false // Hide the carousel status
    ,
    showIndicators: false // Hide the carousel indicators
    ,
    renderArrowPrev: (onClickHandler, hasPrev, label) => hasPrev && /*#__PURE__*/React.createElement('button', {
      type: 'button',
      className: 'carousel-arrow carousel-arrow-prev',
      onClick: onClickHandler,
      title: label
    }, /*#__PURE__*/React.createElement('span', {
      className: 'carousel-arrow-icon'
    }, '\u2039')),
    renderArrowNext: (onClickHandler, hasNext, label) => hasNext && /*#__PURE__*/React.createElement('button', {
      type: 'button',
      className: 'carousel-arrow carousel-arrow-next',
      onClick: onClickHandler,
      title: label
    }, /*#__PURE__*/React.createElement('span', {
      className: 'carousel-arrow-icon'
    }, '\u203A')),
    renderThumbs: () => { } // Hide the carousel thumbnails
    ,
    renderIndicator: () => { } // Hide the carousel indicators
    ,
    showArrows: true // Show the carousel arrows
    ,
    infiniteLoop: true // Enable infinite loop
    ,
    swipeable: true // Enable swipe gestures
    ,
    emulateTouch: true // Enable touch gestures
    ,
    centerMode: true // Enable center mode
    ,
    centerSlidePercentage: 33.33 // Set the percentage width of the center slide
    ,
    selectedItem: 1 // Start at the second item (to show 3 images initially)
  }, images.map((image, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: index,
    className: 'carousel-image-wrapper',
    whileHover: {
      scale: 1.075
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: 'carousel-image-container',
    initial: {
      opacity: 0,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.5
    }
  }, /*#__PURE__*/React.createElement(motion.img, {
    className: 'carousel-image',
    src: image,
    whileHover: {
      boxShadow: '0 64px 512px rgba(0, 0, 0, 0.4)'
    }
  })))))), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement('h2', null, 'Songs I can\'t get enough of recently'), /*#__PURE__*/React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '12px'
    }
  }, /*#__PURE__*/React.createElement('iframe', {
    style: {
      borderRadius: '12px'
    },
    src: 'https://open.spotify.com/embed/playlist/2UiX47VboU8cd9A48ho6Il?utm_source=generator',
    width: '100%',
    height: '525',
    frameBorder: '0',
    allowFullScreen: '',
    allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
    loading: 'lazy'
  }))), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement('br', null), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement('h2', null, 'And yea... that\'s pretty much it, thanks for stopping by!'), /*#__PURE__*/React.createElement('h3', null, /*#__PURE__*/React.createElement('i', null, 'P.S... I\'m open to opportunities for the fall and winter so contact me and we can talk!')))));
}
export default App;