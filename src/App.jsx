import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from '@fengkx/react-syntax-highlighter';
import { materialDark } from '@fengkx/react-syntax-highlighter/dist/esm/styles/prism';
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
import linkedin from './assets/images/linkedin.png';
import github from './assets/images/github.png';
import email from './assets/images/envelope.png';
import H4H from "./assets/images/H4H.jpeg";
import WSE from "./assets/images/WSE.png";
import '@fontsource/cascadia-code';
import 'typeface-inter';


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

  return (
    <Accordion className="custom-accordion">
      <Accordion.Item eventKey="0" active={accordion1Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion1}>
              How I get unreleased music on Spotify 🙀
            </Button>
            {accordion1Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '32%' }}>
                      <p>Web application made using <span style={{ fontWeight: 'bold', color: 'green' }}>Flask</span> and <span style={{ fontWeight: 'bold', color: 'green' }}>Python</span> that streamlines the process of converting YouTube audio tracks into custom Spotify tracks. Security certificate from <span style={{ fontWeight: 'bold', color: 'green' }}>ZeroSSL</span>. Hosted using <span style={{ fontWeight: 'bold', color: 'green' }}>GoDaddy</span> and <span style={{ fontWeight: 'bold', color: 'green' }}>PythonAnywhere</span>. Check it out at  <a href="https://www.localify.online" target="_blank" rel="noopener noreferrer">
                        www.localify.online
                      </a>.</p>
                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. How to use Python as a backend platform and Flask as a frontend platform for web applications<br></br>2. How to host websites online (domains, DNS, SSL)<br></br>3. Domain security certificates (http vs https) using ZeroSSL<br></br><span style={{ fontWeight: 'bold' }}>4. Hosting websites is extremely annoying and tedious</span></p>
                    </td>
                  </tr>
                </table>
                <h3>
                  Check it out <a href="https://github.com/shubhhpatel/localify" target="_blank" rel="noopener noreferrer">here</a>.
                </h3>
                <br></br>
                <p style={{ display: 'flex', justifyContent: 'center' }}>
                  <video src={videoDemo} autoPlay loop style={{ width: '90%' }} />
                </p>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" active={accordion2Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion2}>
              Western Student Hub 👾
            </Button>
            {accordion2Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '28%' }}>
                      <p>
                        Collaborative web application made using
                        <span style={{ fontWeight: 'bold', color: 'green' }}> React</span> and
                        <span style={{ fontWeight: 'bold', color: 'green' }}> MongoDB</span>.
                        Allows for students to upload a syllabus and have a summarized view of all important dates, assignments, and exams using a file scraper. My contribution was mainly focused on the syllabus upload page.
                      </p>
                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. ReactJS (wow that was a tough learning curve)<br></br>2. API Calls from the frontend and requesting information from the backend<br></br>3. BootStrapping for easy CSS<br></br>4. GitHub. Pretty much everything from push, pull, and more advanced stuff like pull requests.<br></br><span style={{ fontWeight: 'bold' }}>5. Editing code as a large team is very meticulous and you have to be constantly communicating so that you don't overwrite someone else's code 😬</span></p>
                    </td>
                  </tr>
                </table>
                <h3>
                  Check it out <a href="https://github.com/Breaking-Binary/WebApp" target="_blank" rel="noopener noreferrer">here</a>.
                </h3>
              </div>
            )}

          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" active={accordion3Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion3}>
              My personal website 🌎
            </Button>
            {accordion3Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '28%' }}>
                      <p>The thing you are viewing right now.</p>
                      <p>
                        Made using
                        <span style={{ fontWeight: 'bold', color: 'green' }}> React</span> and
                        <span style={{ fontWeight: 'bold', color: 'green' }}> Spotify API</span>.
                        Bootstrapped with
                        <span style={{ fontWeight: 'bold', color: 'green' }}> Netlify </span>
                        and hosted on
                        <span style={{ fontWeight: 'bold', color: 'green' }}> GitHub Pages</span>.
                        Special shoutout to ChatGPT for being the best troubleshooter in the world.
                      </p>
                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. Customizing Bootstrap components<br></br>2. Integrating Spotify API into a live website<br></br>3. The design process for creating a front-end application (something that is pretty new to me since I'm not the most creative person)<br></br>4. Hosting a website on GitHub pages</p>
                    </td>
                  </tr>
                </table>
                <h3>
                  Check it out <a href="https://github.com/shubhhpatel/" target="_blank" rel="noopener noreferrer">here</a>.
                </h3>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <h2>Stuff I've done in the past</h2>
      <Accordion.Item eventKey="4" active={accordion5Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion5}>
              Western Software Engineering 👨‍💻
            </Button>
            {accordion5Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '30%' }}>
                      <p>
                        As part of the <strong style={{ color: 'RGB(88, 44, 131' }}>Projects Team on WSE</strong>, I worked with six other team members (one is missing from the picture) to fully plan, develop and deploy a full-stack application using <strong style={{ color: 'RGB(88, 44, 131' }}>React and MongoDB</strong>. I learned a lot throughout the year and I can definitely say it took me from being a <strong style={{ color: 'RGB(88, 44, 131' }}>wannabe-coder to a semi-legit coder</strong> 😎.
                      </p>

                      <p><strong>Skills Developed:</strong></p>
                      <p>- Github<br></br>- React and JS<br></br>- MongoDB<br></br>- API Calls</p>
                    </td>
                    <td>
                      <img src={WSE} alt="WSE Demons" style={{ width: '600px', marginLeft: "20px" }} />
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" active={accordion4Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion4}>
              Hoodies for Hope 👕
            </Button>
            {accordion4Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '30%' }}>
                      <p>
                        <strong style={{ color: 'orange' }}>Hoodies for Hope</strong> is a business started as part of the <strong style={{ color: 'orange' }}>Junior Achievement Company Program</strong>. I decided to pitch a business that sells apparel with designs created by an Indigenous artist and colored by Indigenous children.
                        Profits from the business would go towards supporting a yearly trip for a fly-in reserve in Western Canada.
                      </p>
                      <p>By the end of the program, <strong style={{ color: 'orange' }}>we did $1700 in revenue! </strong>
                        We were also Featured on <a href="https://www.breakfasttelevision.ca/videos/this-clothing-brands-designs-are-created-by-indigenous-youth/" target="_blank" rel="noopener noreferrer">Breakfast TV</a> and <a href="https://www.thestar.com/local-brampton/life/2022/05/12/hoodies-for-hope-brampton-students-set-out-to-help-indigenous-youth.html" target="_blank" rel="noopener noreferrer">Toronto Star</a>.
                        Pretty cool.
                      </p>

                    </td>
                    <td>
                      <img src={H4H} alt="Hoodies for Hope Demons" style={{ width: '600px', marginLeft: "20px" }} />
                    </td>

                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

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

  const dynamicWords = [
    'film photography',
    'concerts',
    'chatGPT',
    'underground hip-hop',
    'procrastinating',
    'toronto r&b',
    'concert photography',
    'bedroom pop',
    'sitcoms',
    'spotify',
    'startups',
    'greek mythology',
    'product management',
    'the raptors',
  ];

  const staticString = "I like ";

  return (
    <div className="App-container">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
        <h1 style={{ marginBottom: '5px', fontSize: "58px" }}>What's up, I'm Shubh Patel</h1>
        <h2 style={{ marginTop: '0', display: 'flex', alignItems: 'center' }}>
          <span>{staticString}</span>
          <span style={{ marginLeft: '5px' }}>
            <Typewriter
              options={{
                strings: dynamicWords,
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 50,
              }}
            />
          </span>
        </h2>

        <table>
          <tbody>
            <tr>
              <td rowSpan={2} style={{ width: '650px', maxWidth: '650px', paddingRight: "20px" }}>
                <SyntaxHighlighter language="js" style={materialDark}>
                  {`let aboutMe = getShubhBiography();

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
}`}
                </SyntaxHighlighter>
              </td>
              <td>
                <div className="facesSlides" style={{ minWidth: '33rem' }}>
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop
                    autoPlay
                  >
                    {faces.map((image, index) => (
                      <div key={index}>
                        <img src={image}
                          style={{ minHeight: '33rem', minWidth: "fit-content" }} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="socials-bar">
                  <a href="https://github.com/shubhhpatel" target="_blank">
                    <div className="social-icon github-icon">
                      <img src={github} alt="GitHub" className="icon" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/-shubhpatel/" target="_blank">
                    <div className="social-icon linkedin-icon">
                      <img src={linkedin} alt="LinkedIn" className="icon" />
                    </div>
                  </a>
                  <a href="mailto:spate768@uwo.com">
                    <div className="social-icon email-icon">
                      <img src={email} alt="Email" className="icon" />
                    </div>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <br></br><br></br>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Stuff I've been working on</h2>
          <AlwaysOpenExample />
        </motion.div>


        <br></br><br></br>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >


          <h2>Now, for some fun stuff... I really like concert photography, so here are a few of my favourite shots.</h2>
          <div style={{ minWidth: "fit-content" }}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-prev"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <span className="carousel-arrow-icon">&#8249;</span>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    className="carousel-arrow carousel-arrow-next"
                    onClick={onClickHandler}
                    title={label}
                  >
                    <span className="carousel-arrow-icon">&#8250;</span>
                  </button>
                )
              }
              renderThumbs={() => { }}
              renderIndicator={() => { }}
              showArrows
              infiniteLoop
              swipeable
              emulateTouch
              centerMode
              centerSlidePercentage={33.33}
              selectedItem={1}
            >
              {images.map((image, index) => (
                <motion.div key={index} className="carousel-image-wrapper" whileHover={{ scale: 1.075 }}>
                  <motion.div
                    className="carousel-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img className="carousel-image" src={image} style={{ Width: 'fit-content' }} whileHover={{ boxShadow: '0 64px 512px rgba(0, 0, 0, 0.4)' }} />
                  </motion.div>
                </motion.div>
              ))}
            </Carousel>
          </div>
        </motion.div>

        <br></br><br></br>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Songs I can't get enough of recently</h2>

          <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '12px' }}>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/2UiX47VboU8cd9A48ho6Il?utm_source=generator"
              width="100%"
              height="525"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
        <br></br><br></br>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>And yea... that's pretty much it, thanks for stopping by!</h2>
          <h3><i>P.S... I'm open to opportunities for the fall and winter so contact me and we can talk!</i></h3>
        </motion.div>
      </motion.div >
    </div >
  );
}

export default App;