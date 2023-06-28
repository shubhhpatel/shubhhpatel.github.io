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
import signature from './assets/images/Shubh Patel.mp4';
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

  return React.createElement(
    Accordion,
    { className: 'custom-accordion' },
    React.createElement(
      Accordion.Item,
      { eventKey: '0', active: accordion1Open ? 'true' : 'false' },
      React.createElement(
        Accordion.Body,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            Button,
            { variant: 'link', className: 'button', onClick: toggleAccordion1 },
            'How I get unreleased music on Spotify \uD83D\uDE40'
          ),
          accordion1Open && React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: { width: '32%' } },
                  React.createElement(
                    'p',
                    null,
                    'Web application made using ',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      'Flask'
                    ),
                    ' and ',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      'Python'
                    ),
                    ' that streamlines the process of converting YouTube audio tracks into custom Spotify tracks. Security certificate from ',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      'ZeroSSL'
                    ),
                    '. Hosted using ',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      'GoDaddy'
                    ),
                    ' and ',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      'PythonAnywhere'
                    ),
                    '. Check it out at  ',
                    React.createElement(
                      'a',
                      { href: 'https://www.localify.online', target: '_blank', rel: 'noopener noreferrer' },
                      'www.localify.online'
                    ),
                    '.'
                  )
                ),
                React.createElement('td', { style: { width: '4%' } }),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'h3',
                    null,
                    'Stuff I learned'
                  ),
                  React.createElement(
                    'p',
                    null,
                    '1. How to use Python as a backend platform and Flask as a frontend platform for web applications',
                    React.createElement('br', null),
                    '2. How to host websites online (domains, DNS, SSL)',
                    React.createElement('br', null),
                    '3. Domain security certificates (http vs https) using ZeroSSL',
                    React.createElement('br', null),
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold' } },
                      '4. Hosting websites is extremely annoying and tedious'
                    )
                  )
                )
              )
            ),
            React.createElement(
              'h3',
              null,
              'Check it out ',
              React.createElement(
                'a',
                { href: 'https://github.com/shubhhpatel/localify', target: '_blank', rel: 'noopener noreferrer' },
                'here'
              ),
              '.'
            ),
            React.createElement('br', null),
            React.createElement(
              'p',
              { style: { display: 'flex', justifyContent: 'center' } },
              React.createElement('video', { src: videoDemo, autoPlay: true, loop: true, style: { width: '90%' } })
            )
          )
        ),
        React.createElement('br', null)
      )
    ),
    React.createElement(
      Accordion.Item,
      { eventKey: '1', active: accordion2Open },
      React.createElement(
        Accordion.Body,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            Button,
            { className: 'button', variant: 'link', onClick: toggleAccordion2 },
            'Western Student Hub \uD83D\uDC7E'
          ),
          accordion2Open && React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: { width: '28%' } },
                  React.createElement(
                    'p',
                    null,
                    'Collaborative web application made using',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' React'
                    ),
                    ' and',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' MongoDB'
                    ),
                    '. Allows for students to upload a syllabus and have a summarized view of all important dates, assignments, and exams using a file scraper. My contribution was mainly focused on the syllabus upload page.'
                  )
                ),
                React.createElement('td', { style: { width: '4%' } }),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'h3',
                    null,
                    'Stuff I learned'
                  ),
                  React.createElement(
                    'p',
                    null,
                    '1. ReactJS (wow that was a tough learning curve)',
                    React.createElement('br', null),
                    '2. API Calls from the frontend and requesting information from the backend',
                    React.createElement('br', null),
                    '3. BootStrapping for easy CSS',
                    React.createElement('br', null),
                    '4. GitHub. Pretty much everything from push, pull, and more advanced stuff like pull requests.',
                    React.createElement('br', null),
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold' } },
                      '5. Editing code as a large team is very meticulous and you have to be constantly communicating so that you don\'t overwrite someone else\'s code \uD83D\uDE2C'
                    )
                  )
                )
              )
            ),
            React.createElement(
              'h3',
              null,
              'Check it out ',
              React.createElement(
                'a',
                { href: 'https://github.com/Breaking-Binary/WebApp', target: '_blank', rel: 'noopener noreferrer' },
                'here'
              ),
              '.'
            )
          )
        ),
        React.createElement('br', null)
      )
    ),
    React.createElement(
      Accordion.Item,
      { eventKey: '2', active: accordion3Open },
      React.createElement(
        Accordion.Body,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            Button,
            { className: 'button', variant: 'link', onClick: toggleAccordion3 },
            'My personal website \uD83C\uDF0E'
          ),
          accordion3Open && React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: { width: '28%' } },
                  React.createElement(
                    'p',
                    null,
                    'The thing you are viewing right now.'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'Made using',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' React'
                    ),
                    ' and',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' Spotify API'
                    ),
                    '. Bootstrapped with',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' Netlify '
                    ),
                    'and hosted on',
                    React.createElement(
                      'span',
                      { style: { fontWeight: 'bold', color: 'green' } },
                      ' GitHub Pages'
                    ),
                    '. Special shoutout to ChatGPT for being the best troubleshooter in the world.'
                  )
                ),
                React.createElement('td', { style: { width: '4%' } }),
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'h3',
                    null,
                    'Stuff I learned'
                  ),
                  React.createElement(
                    'p',
                    null,
                    '1. Customizing Bootstrap components',
                    React.createElement('br', null),
                    '2. Integrating Spotify API into a live website',
                    React.createElement('br', null),
                    '3. The design process for creating a front-end application (something that is pretty new to me since I\'m not the most creative person)',
                    React.createElement('br', null),
                    '4. Hosting a website on GitHub pages'
                  )
                )
              )
            ),
            React.createElement(
              'h3',
              null,
              'Check it out ',
              React.createElement(
                'a',
                { href: 'https://github.com/shubhhpatel/personalWebsite', target: '_blank', rel: 'noopener noreferrer' },
                'here'
              ),
              '.'
            )
          )
        ),
        React.createElement('br', null)
      )
    ),
    React.createElement(
      'h2',
      null,
      'Stuff I\'ve done in the past'
    ),
    React.createElement(
      Accordion.Item,
      { eventKey: '4', active: accordion5Open },
      React.createElement(
        Accordion.Body,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            Button,
            { className: 'button', variant: 'link', onClick: toggleAccordion5 },
            'Western Software Engineering \uD83D\uDC68\u200D\uD83D\uDCBB'
          ),
          accordion5Open && React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: { width: '30%' } },
                  React.createElement(
                    'p',
                    null,
                    'As part of the ',
                    React.createElement(
                      'strong',
                      { style: { color: 'RGB(88, 44, 131' } },
                      'Projects Team on WSE'
                    ),
                    ', I worked with six other team members (one is missing from the picture) to fully plan, develop and deploy a full-stack application using ',
                    React.createElement(
                      'strong',
                      { style: { color: 'RGB(88, 44, 131' } },
                      'React and MongoDB'
                    ),
                    '. I learned a lot throughout the year and I can definitely say it took me from being a ',
                    React.createElement(
                      'strong',
                      { style: { color: 'RGB(88, 44, 131' } },
                      'wannabe-coder to a semi-legit coder'
                    ),
                    ' \uD83D\uDE0E.'
                  ),
                  React.createElement(
                    'p',
                    null,
                    React.createElement(
                      'strong',
                      null,
                      'Skills Developed:'
                    )
                  ),
                  React.createElement(
                    'p',
                    null,
                    '- Github',
                    React.createElement('br', null),
                    '- React and JS',
                    React.createElement('br', null),
                    '- MongoDB',
                    React.createElement('br', null),
                    '- API Calls'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('img', { src: 'src/assets/images/WSE.JPG', alt: 'Hoodies for Hope Demons', style: { width: '600px', marginLeft: "20px" } })
                )
              )
            )
          )
        ),
        React.createElement('br', null)
      )
    ),
    React.createElement(
      Accordion.Item,
      { eventKey: '3', active: accordion4Open },
      React.createElement(
        Accordion.Body,
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            Button,
            { className: 'button', variant: 'link', onClick: toggleAccordion4 },
            'Hoodies for Hope \uD83D\uDC55'
          ),
          accordion4Open && React.createElement(
            'div',
            null,
            React.createElement(
              'table',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  { style: { width: '30%' } },
                  React.createElement(
                    'p',
                    null,
                    React.createElement(
                      'strong',
                      { style: { color: 'orange' } },
                      'Hoodies for Hope'
                    ),
                    ' is a business started as part of the ',
                    React.createElement(
                      'strong',
                      { style: { color: 'orange' } },
                      'Junior Achievement Company Program'
                    ),
                    '. I decided to pitch a business that sells apparel with designs created by an Indigenous artist and colored by Indigenous children. Profits from the business would go towards supporting a yearly trip for a fly-in reserve in Western Canada.'
                  ),
                  React.createElement(
                    'p',
                    null,
                    'By the end of the program, ',
                    React.createElement(
                      'strong',
                      { style: { color: 'orange' } },
                      'we did $1700 in revenue! '
                    ),
                    'We were also Featured on ',
                    React.createElement(
                      'a',
                      { href: 'https://www.breakfasttelevision.ca/videos/this-clothing-brands-designs-are-created-by-indigenous-youth/', target: '_blank', rel: 'noopener noreferrer' },
                      'Breakfast TV'
                    ),
                    ' and ',
                    React.createElement(
                      'a',
                      { href: 'https://www.thestar.com/local-brampton/life/2022/05/12/hoodies-for-hope-brampton-students-set-out-to-help-indigenous-youth.html', target: '_blank', rel: 'noopener noreferrer' },
                      'Toronto Star'
                    ),
                    '. Pretty cool.'
                  )
                ),
                React.createElement(
                  'td',
                  null,
                  React.createElement('img', { src: 'src/assets/images/H4H.jpeg', alt: 'Hoodies for Hope Demons', style: { width: '600px', marginLeft: "20px" } })
                )
              )
            )
          )
        ),
        React.createElement('br', null)
      )
    )
  );
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
      gsap.fromTo(section, { opacity: 0, y: 50 }, {
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

  return React.createElement(
    'div',
    { className: 'App-container' },
    React.createElement(
      motion.div,
      { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } },
      React.createElement(
        'h1',
        { style: { marginBottom: '5px', fontSize: "58px" } },
        'What\'s up, I\'m Shubh Patel'
      ),
      React.createElement(
        'h2',
        { style: { marginTop: '0', display: 'flex', alignItems: 'center' } },
        React.createElement(
          'span',
          null,
          staticString
        ),
        React.createElement(
          'span',
          { style: { marginLeft: '5px' } },
          React.createElement(Typewriter, {
            options: {
              strings: dynamicWords,
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
              delay: 50
            }
          })
        )
      ),
      React.createElement(
        'table',
        null,
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { rowSpan: 2, style: { width: '550px', paddingRight: "20px" } },
              React.createElement(
                SyntaxHighlighter,
                { language: 'jsx', style: materialDark },
                `let aboutMe = getShubhBiography();

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
}`
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'div',
                { className: 'slideshow1' },
                React.createElement(
                  Carousel,
                  {
                    showThumbs: false,
                    showStatus: false,
                    showIndicators: false,
                    infiniteLoop: true,
                    autoPlay: true
                  },
                  faces.map((image, index) => React.createElement(
                    'div',
                    { key: index },
                    React.createElement('img', { src: image,
                      style: { minHeight: '30rem', minWidth: "fit-content" } })
                  ))
                )
              )
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              React.createElement(
                'div',
                { className: 'socials-bar' },
                React.createElement(
                  'a',
                  { href: 'https://github.com/shubhhpatel', target: '_blank' },
                  React.createElement(
                    'div',
                    { className: 'social-icon github-icon' },
                    React.createElement('img', { src: github, alt: 'GitHub', className: 'icon' })
                  )
                ),
                React.createElement(
                  'a',
                  { href: 'https://www.linkedin.com/in/-shubhpatel/', target: '_blank' },
                  React.createElement(
                    'div',
                    { className: 'social-icon linkedin-icon' },
                    React.createElement('img', { src: linkedin, alt: 'LinkedIn', className: 'icon' })
                  )
                ),
                React.createElement(
                  'a',
                  { href: 'mailto:spate768@uwo.com' },
                  React.createElement(
                    'div',
                    { className: 'social-icon email-icon' },
                    React.createElement('img', { src: email, alt: 'Email', className: 'icon' })
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 }
        },
        React.createElement(
          'h2',
          null,
          'Stuff I\'ve been working on'
        ),
        React.createElement(AlwaysOpenExample, null)
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 }
        },
        React.createElement(
          'h2',
          null,
          'Now, for some fun stuff... I really like concert photography, so here are a few of my favourite shots.'
        ),
        React.createElement(
          Carousel,
          {
            showThumbs: false,
            showStatus: false // Hide the carousel status
            , showIndicators: false // Hide the carousel indicators
            , renderArrowPrev: (onClickHandler, hasPrev, label) => hasPrev && React.createElement(
              'button',
              {
                type: 'button',
                className: 'carousel-arrow carousel-arrow-prev',
                onClick: onClickHandler,
                title: label
              },
              React.createElement(
                'span',
                { className: 'carousel-arrow-icon' },
                '\u2039'
              )
            ),
            renderArrowNext: (onClickHandler, hasNext, label) => hasNext && React.createElement(
              'button',
              {
                type: 'button',
                className: 'carousel-arrow carousel-arrow-next',
                onClick: onClickHandler,
                title: label
              },
              React.createElement(
                'span',
                { className: 'carousel-arrow-icon' },
                '\u203A'
              )
            ),
            renderThumbs: () => {} // Hide the carousel thumbnails
            , renderIndicator: () => {} // Hide the carousel indicators
            , showArrows: true // Show the carousel arrows
            , infiniteLoop: true // Enable infinite loop
            , swipeable: true // Enable swipe gestures
            , emulateTouch: true // Enable touch gestures
            , centerMode: true // Enable center mode
            , centerSlidePercentage: 33.33 // Set the percentage width of the center slide
            , selectedItem: 1 // Start at the second item (to show 3 images initially)
          },
          images.map((image, index) => React.createElement(
            motion.div,
            { key: index, className: 'carousel-image-wrapper', whileHover: { scale: 1.075 } },
            React.createElement(
              motion.div,
              {
                className: 'carousel-image-container',
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5 }
              },
              React.createElement(motion.img, { className: 'carousel-image', src: image, whileHover: { boxShadow: '0 64px 512px rgba(0, 0, 0, 0.4)' } })
            )
          ))
        )
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 }
        },
        React.createElement(
          'h2',
          null,
          'Songs I can\'t get enough of recently'
        ),
        React.createElement(
          'div',
          { style: { display: 'flex', justifyContent: 'center', borderRadius: '12px' } },
          React.createElement('iframe', {
            style: { borderRadius: '12px' },
            src: 'https://open.spotify.com/embed/playlist/2UiX47VboU8cd9A48ho6Il?utm_source=generator',
            width: '100%',
            height: '525',
            frameBorder: '0',
            allowFullScreen: '',
            allow: 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
            loading: 'lazy'
          })
        )
      ),
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1 }
        },
        React.createElement(
          'h2',
          null,
          'And yea... that\'s pretty much it, thanks for stopping by!'
        ),
        React.createElement(
          'h3',
          null,
          React.createElement(
            'i',
            null,
            'P.S... I\'m open to opportunities for the fall and winter so contact me and we can talk!'
          )
        )
      )
    )
  );
}

export default App;

