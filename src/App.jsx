import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from '@fengkx/react-syntax-highlighter';
import { materialDark } from '@fengkx/react-syntax-highlighter/dist/esm/styles/prism';
import Typewriter from 'typewriter-effect';
import './App.css';
import { Accordion, Card, Button } from 'react-bootstrap';
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
  const [accordion6Open, setAccordion6Open] = useState(false);
  const [accordion7Open, setAccordion7Open] = useState(false);

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

  const toggleAccordion6 = () => {
    setAccordion6Open(!accordion6Open);
  };

  const toggleAccordion7 = () => {
    setAccordion7Open(!accordion7Open);
  };

  return (
    <Accordion className="custom-accordion">
      <Accordion.Item eventKey="1" active={accordion1Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion1}>
              Making sure people get paid with Trolley 🛒
            </Button>
            {accordion1Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
                      <p>Working in <span style={{ fontWeight: 'bold', color: '#0092ff' }}>Product</span> at <span style={{ fontWeight: 'bold', color: '#0092ff' }}>Trolley</span>, a cloud-based payouts platform that enables businesses to send payments <span style={{ fontWeight: 'bold', color: '#0092ff' }}>across the globe</span>, to individuals or companies, in any currency, and to all primary payment methods. Check it out at <a href="https://www.trolley.com" target="_blank" rel="noopener noreferrer">www.trolley.com</a>. Series A, 10m raised.</p>
                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I'm learning</h3><p>Check back with me in a few months... I just started!</p>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" active={accordion2Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion2}>
              TicketMaster Product Pitch 🏟️
            </Button>
            {accordion2Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
                      <p>Selected as a fellow in <span style={{ fontWeight: 'bold', color: '#024DDF' }}>Ivey Product Society's 4th annual Product Fellowship</span>. Spent a few months <span style={{ fontWeight: 'bold', color: '#024DDF' }}>ideating and prototyping</span> a solution to increase user confidence when purchasing tickets on <span style={{ fontWeight: 'bold', color: '#024DDF' }}>TicketMaster</span> and pitched it to industry PMs. The pitch deck is below, let me know what you think. Here's the <a href="https://docs.google.com/document/d/16nfTyq_ylCgwl2tjIhWhfhtrkkhoqib9dJPF80uFFrw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">PRD</a>.</p>


                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. Doing structured user interviews to find pain points<br></br>2. Understanding launch strategies and exit criteria for beta tests<br></br>3. Acknowledging both the business case for the company and the value added for the user</p>
                    </td>
                  </tr>
                </table>
                <iframe
                  src="https://shubhhpatel.github.io/src/assets/TicketMaster.pdf"
                  width="1000px"
                  height="621px"
                  allow="autoplay"
                  frameborder="0"
                  style={{ border: 'none', display: 'block', margin: '0 auto' }}
                  allowfullscreen="true"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" active={accordion4Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion4}>
              How I can get any song on Spotify 🙀
            </Button>
            {accordion4Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
                      <p>Web application made using <span style={{ fontWeight: 'bold', color: 'green' }}>Flask</span> and <span style={{ fontWeight: 'bold', color: 'green' }}>Python</span> that streamlines the process of converting YouTube audio tracks into custom Spotify tracks. Security certificate from <span style={{ fontWeight: 'bold', color: 'green' }}>ZeroSSL</span>. Hosted using <span style={{ fontWeight: 'bold', color: 'green' }}>GoDaddy</span> and <span style={{ fontWeight: 'bold', color: 'green' }}>PythonAnywhere</span>. Check it out at  <a href="https://www.localify.live" target="_blank" rel="noopener noreferrer">
                        www.localify.live
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
                <div className="video-container" >
                  <iframe
                    title="Localify Demo"
                    src="https://www.youtube.com/embed/DuKobN0D4ME"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" active={accordion3Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion3}>
              Helping Canadians find jobs 🤝
            </Button>
            {accordion3Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
                      <p>
                        I also had the opportunity to work at <span style={{ fontWeight: 'bold', color: '#6495ed' }}>ImmiCan</span>, a social enterprise dedicated to helping immigrants secure suitable employment. In my role as a <span style={{ fontWeight: 'bold', color: '#6495ed' }}>Product Manager</span>, I focused on developing the <span style={{ fontWeight: 'bold', color: '#6495ed' }}>ImmiAI chatbot</span>. This role significantly enhanced my understanding of <span style={{ fontWeight: 'bold', color: '#6495ed' }}>prioritization</span> through direct user interviews, which provided deep insights into user needs and product development. Also worked on prompt engineering and designing systems to help understand my engineers a little better!
                      </p>

                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. The importance of understanding the actual product before doing anything else<br></br>2. Understanding how to structure user interviews without being too narrowminded with your questions<br></br><span style={{ fontWeight: 'bold' }}>3. Internal communication is key, admitting you really don’t know much and others are there to help you figure it out!</span></p>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <h2>Stuff I've done in the past</h2>
      <Accordion.Item eventKey="5" active={accordion5Open ? 'true' : 'false'}>
        <Accordion.Body>
          <div>
            <Button variant="link" className="button" onClick={toggleAccordion5}>
              Designing robots with Kevares 🦾
            </Button>
            {accordion5Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
                      <p>In the summer after first-year, I worked with a cool startup called <span style={{ fontWeight: 'bold', color: 'orange' }}>Kevares Autonomous Services</span>. They make robots that autonomize municipal processes like <span style={{ fontWeight: 'bold', color: 'orange' }}>side-walk inspections, snow removal, and grass-cutting</span>. I worked with the Embedded Systems team to redesign the second version of their flagship side-walk inspection robot. </p>
                    </td>
                    <td style={{ width: '4%' }}></td>
                    <td>
                      <h3>Stuff I learned</h3>
                      <p>1. Learning engineering concepts while considering the cross-functional team’s priorities with the robot such as sales and design with the chassis was a difficult but rewarding task.<br></br>2. We were able to increase the width of view of the robot so that it wouldn’t have to do multiple rounds to capture one wide sidewalk while decreasing its footprint, which sounds a lot easier than it is!
                        <br></br>3. CAD, Managing a product and communicating with the many teams involved.</p>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" active={accordion6Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion6}>
              Western Software Engineering 👨‍💻
            </Button>
            {accordion6Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
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
      <Accordion.Item eventKey="7" active={accordion7Open}>
        <Accordion.Body>
          <div>
            <Button className="button" variant="link" onClick={toggleAccordion7}>
              Hoodies for Hope 👕
            </Button>
            {accordion7Open && (
              <div>
                <table>
                  <tr>
                    <td style={{ width: '35%' }}>
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
                      <img src={H4H} alt="Hoodies for Hope" style={{ width: '600px', marginLeft: "20px" }} />
                    </td>

                  </tr>
                </table>
              </div>
            )}
          </div>
          <br></br>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion >

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
    'underground hip-hop',
    'concert photography',
    'stoic philosophy',
    'digital cameras',
    'seinfeld',
    'procrastinating',
    'toronto r&b',
    'breaking bad',
    'concerts',
    'bedroom pop',
    'thrifting',
    'sitcoms',
    'startups',
    'building products',
    'the raptors',
    'nostalgia',
    'the office'
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
                  {`function getShubhBiography() {
  return {
    university: [
      "Western University", 
      "Ivey Business School" 
    ],
    program: [
      "Computer Science",
      "Business"
    ],
    year: 3,
    experience: {
      Trolley: "Product Intern",
      Ivey_Product_Society: "Product Fellow",
      ImmiCan_AI: "Product Management Intern",
      Kevares: "Embedded Systems Intern"
    },
    careerInterests: [
      "Product Management",
      "Concert Photography",
      null // uh, i'm still figuring it out
    ],
    funFact: [
      "Has been to 16 concerts"
    ]
  };
}
`}
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
          <h4><i>P.S... I'm open to opportunities for Summer 2025 so contact me and we can talk!</i></h4>
        </motion.div>
      </motion.div >
    </div >
  );
}

export default App;
