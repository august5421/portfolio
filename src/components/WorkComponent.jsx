import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import LogoFont from './LogoFont';
import Fade from '@mui/material/Fade';
import { keyframes } from '@emotion/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import BriefcaseIcon from '@mui/icons-material/Work';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProjectBox from './ProjectBox';
import TDAMWimg from '../assets/images/TDAMWbanner.jpg';
import quilistImg from '../assets/images/quilistBanner.jpg';
import jeopardyImg from '../assets/images/jeopardyBanner.jpg';
import w360Img from '../assets/images/weather360.jpg';
import fishbowlImg from '../assets/images/fishbowlBanner.jpg';
import huskReactImg from '../assets/images/huskwellness.png';
import marketplace from '../assets/images/marketplace.png';
import virtual from '../assets/images/virtual.png'; 
import shopProducts from '../assets/images/shopProducts.png'; 

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
  40% {transform: translateY(-30px);} 
  60% {transform: translateY(-15px);}
`;
const professionalProjects = [
  {
    name: "Huskwellness.com",
    startDate: "August 2023",
    endDate: "June 2024",
    technologiesUsed: ["React", "Redux", "MySQL", "JS", "CSS"],
    description: `This project was the complete rebuild of the companies WordPress application using ReactJSX and Redux, integrating a custom CMS tool designed specifically for non-developers. The goal was to circumvent the complexities and limitations of the traditional WordPress CMS, which many non-technical users found daunting and confusing. By leveraging the power of ReactJSX for a modern, component-based frontend and Redux for efficient state management, I was able to create a user-friendly and highly intuitive CMS that simplifies content management tasks.

The new application interfaces with a MySQL database, ensuring data consistency and reliability while maintaining the performance benefits of a relational database system. The ReactJSX components are designed to be reusable and modular, allowing for a clean and maintainable codebase. Redux is employed to manage the global state, providing a predictable and centralized state management system that enhances the application's scalability and ease of maintenance.

One of the primary motivations for this rebuild was to address and improve upon several security concerns inherent in the WordPress CMS. The new system incorporates robust security measures, including sanitized inputs, strict access controls, and regular security audits to protect against common vulnerabilities such as SQL injection and cross-site scripting (XSS) attacks. By designing a custom CMS from the ground up, I was able to implement security best practices and tailor the application to meet the specific needs of the users, providing them with a secure and efficient platform for managing their content.

In addition to the technical improvements, the user experience has been significantly enhanced. The new CMS tool offers a clean and straightforward interface, making it easy for non-developers to perform tasks such as editing content, managing media, and organizing site structure without needing extensive training or technical knowledge. This project not only streamlined the content management process but also empowered users to take full control of their website's content with confidence and ease.`,
    company: "HUSK Wellness",
    link: "https://huskwellness.com/",
    image: huskReactImg
  },
  {
    name: "Rebranded to HUSK",
    startDate: "January 2023",
    endDate: "July 2023",
    technologiesUsed: ["PHP", "MySQL", "Twig", "JS", "CSS"],
    description: `A comprehensive rebranding project, transforming the identity of our applications from GlobalFit to HUSK Wellness. This rebranding effort was an extensive process that involved reskinning all our applications and updating the branding on our marketplace website: marketplace.huskwellness.com. The primary objective was to reflect the new brand identity of HUSK Wellness, ensuring a cohesive and engaging experience for our users across all platforms.

The reskinning process required meticulous attention to detail, as every element of the user interface had to be updated to align with HUSK Wellness's brand guidelines. This included redesigning logos, updating color schemes, and modifying typography to reflect the new brand's aesthetics. I worked closely with our design team to create a fresh and modern look that embodied the values and vision of HUSK Wellness. The new design aimed to be not only visually appealing but also intuitive and user-friendly, enhancing the overall user experience.

On the technical side, I ensured that all applications, including the marketplace website, were seamlessly transitioned to the new branding. This involved updating HTML, CSS, and JavaScript files across the board, ensuring consistency in every aspect of the user interface. The marketplace website, in particular, underwent significant changes, with all branding elements being replaced to reflect the HUSK Wellness identity. The website's functionality was also reviewed and optimized to provide users with a smooth and efficient browsing experience.

This rebranding project also included comprehensive testing and quality assurance to ensure that the new branding was implemented flawlessly. I coordinated with various teams to identify and address any issues that arose during the transition, ensuring that the final product was polished and professional. The successful completion of this project not only revitalized our brand image but also reinforced our commitment to providing a high-quality, cohesive experience for our users. The new HUSK Wellness branding has been well-received, marking a significant milestone in our company's growth and evolution.`,
    company: "HUSK Wellness",
    link: "https://marketplace.huskwellness.com/fitness",
    image: marketplace
  },
  {
    name: "Shop Products Page",
    startDate: "March 2022",
    endDate: "July 2022",
    technologiesUsed: ["PHP", "MySQL", "Twig", "JS", "CSS"],
    description: `I developed a comprehensive shop products page for our e-commerce platform, utilizing the iRedeem API to manage our product inventory efficiently. This page is designed to seamlessly integrate third-party data with our internal systems, enhancing both the user experience and our product management processes. By retrieving a list of products from iRedeem and storing them in our internal database, we ensure that our product offerings are always up-to-date. The product team is notified whenever new products are available, and products that are no longer available are automatically disabled.

The shop products page is user-friendly, featuring advanced filtering options that allow customers to browse products by brand, category, and sort them alphabetically or by price. Each product is displayed in a card format, providing a clear and concise view of the product's details, including images, descriptions, and prices. Users can easily add products to their cart through direct links embedded in each product card, streamlining the shopping experience.

Upon purchase, our system records the transaction and sends the purchase details to the iRedeem API, ensuring that fulfillment is handled promptly and accurately by iRedeem. This integration not only simplifies our operations but also provides a reliable and efficient fulfillment process, enhancing customer satisfaction.

Additionally, I built a CMS tool using ASP VBScript that allows our team to manage the product listings effectively. This tool provides functionalities to activate and deactivate products, giving our team full control over the inventory displayed on the shop products page. The CMS tool is designed to be intuitive and accessible, enabling non-technical team members to manage products without needing extensive training.

Overall, the shop products page and the accompanying CMS tool represent a significant improvement in our e-commerce capabilities. By integrating with the iRedeem API, we can offer a dynamic and responsive product catalog, ensuring that our customers have access to the latest products while maintaining operational efficiency. The combination of advanced filtering options, a streamlined shopping experience, and robust product management tools has greatly enhanced our online store, positioning us for continued growth and success in the competitive e-commerce landscape.`,
    company: "HUSK Wellness",
    link: "https://marketplace.huskwellness.com/setEligibility.asp?employerGUID=BFD92FDE-C2A7-4307-A2DD-1E17A1663183&destination=/shop-products",
    image: shopProducts
  },
  {
    name: "Virtual Subscriptions Page",
    startDate: "June 2021",
    endDate: "December 2021",
    technologiesUsed: ["PHP", "MySQL", "Twig", "JS", "CSS"],
    description: `In response to the challenges posed by the pandemic, our gym membership company took a significant step to adapt and thrive by introducing virtual subscriptions. To support this new offering and increase sales, I was tasked with building a comprehensive virtual subscriptions page. This centralized page was designed to showcase the various virtual fitness programs available, providing potential customers with an easy and informative way to explore our new services.

The main virtual subscriptions page serves as a hub, displaying all available virtual fitness offerings in an organized and visually appealing manner. Each subscription is highlighted with key details, such as the type of fitness program, duration, and pricing. This layout ensures that users can quickly find the information they need and make informed decisions about which virtual subscription best suits their fitness goals. The design is intuitive and user-friendly, reflecting our commitment to providing an excellent customer experience even in a virtual setting.

In addition to the centralized virtual subscriptions page, I also created individual pages for each virtual subscription company we partnered with. These pages follow a specific template, maintaining consistency across the site while allowing each subscription to stand out with its unique content and branding. The template includes sections for program descriptions, instructor bios, testimonials, and sign-up options, ensuring that all relevant information is easily accessible.

For virtual subscription clients who desired a more personalized touch, the option of a custom layout for an additional fee was offered. These custom pages were tailored to the client's specific branding and content requirements, providing a distinctive look and feel that set them apart from the standard template. This flexibility allowed us to cater to a wide range of clients, from large fitness brands to smaller, boutique fitness providers, enhancing the overall appeal and diversity of our virtual subscription offerings.

The creation of the virtual subscriptions page and the individual company pages was a pivotal project that enabled our company to pivot effectively during the pandemic. By expanding our services to include virtual fitness programs, we were able to meet the evolving needs of our customers and continue to support their fitness journeys, even when in-person classes were not possible. The project was not only a technical success but also a strategic move that contributed significantly to our company's resilience and growth during challenging times.`,
    company: "HUSK Wellness",
    link: "https://marketplace.huskwellness.com/gyms-and-more/virtual-subscriptions",
    image: virtual
  },
]

const freelanceProjects = [
  {
    name: "The Dance & Movement Workshop",
    startDate: "June 2024",
    endDate: "Present",
    technologiesUsed: ["React", "Redux", "Firebase", "JS", "CSS"],
    description: `The Dance & Movement Workshop website is a sophisticated single-page application (SPA) developed to provide a dynamic and engaging experience for its users. Built using React and Redux, the site leverages modern web technologies to deliver a seamless and interactive interface. The website is designed to feature five main pages: Home, Gallery, Blog, Calendar, and Contact. 

    The Home Page is crafted to captivate users with its visually appealing fading animations, enhancing the overall user experience. It serves as the primary landing page, setting the tone for the rest of the site. The Gallery Page showcases images pulled from Firestore Storage, each accompanied by captions stored in a Firestore collection. This page is designed to be both functional and aesthetically pleasing, offering users an intuitive way to view and interact with gallery content.

    On the Blog Page, users can explore various blog posts that are dynamically fetched from a Firestore collection. This page includes filtering options by category, allowing users to easily navigate and find content relevant to their interests. The Calendar Page integrates with the Google Calendar API to display upcoming events in a stylized calendar layout. This feature ensures that users are kept informed about important dates and activities related to the Dance & Movement Workshop.

    The Contact Page is equipped with emailJS for client-side mailing, facilitating smooth communication between users and the organization. Additionally, it incorporates Google reCAPTCHA for enhanced spam protection, ensuring that all interactions remain secure.

    Behind the scenes, a custom-built CMS backend provides a robust management system for the site. This password-protected admin panel allows users to manage various aspects of the site, including altering site colors, updating the logo, and managing active and inactive pages. It also supports CRUD operations for blog posts and gallery images, and enables editing of homepage content. The combination of these features ensures that the site remains flexible and easy to maintain, meeting the evolving needs of The Dance & Movement Workshop.`,
    link: "https://thedanceandmovementworkshop.com/",
    image: TDAMWimg
  },
];


const personalProjects = [
  {
    name: "Quilist",
    startDate: "March 2024",
    endDate: "August 2024",
    technologiesUsed: ["React", "Redux", "Firebase", "JS", "CSS"],
    description: `Quilist is an innovative social media application designed for creating and managing lists tailored to various occasions, combined with robust social networking features. Built with React, Redux, JavaScript, and CSS, Quilist offers a comprehensive platform where users can not only make and manage lists but also connect with friends to share these lists in a dynamic and interactive way. The application leverages Firebase for user authentication and data storage, providing a seamless and secure experience for its users.

Upon first visiting Quilist, users are greeted with a user dashboard that allows them to start building lists even before they sign up. This introductory feature is designed to give new users a taste of the app's capabilities while offering an option to log in or create an account. The sign-up process requires users to provide their email, name, and password, along with selecting an avatar for their profile. Passwords are securely hashed using a robust algorithm to ensure user data protection. Once registered, users can access their full dashboard, which includes five distinct modules: My Lists, Existing Friends, Find New Friends, and two New List creation modules.

The "My Lists" module offers a comprehensive view of all the user's lists stored in the Firebase database, allowing users to perform CRUD operations on each list. Users can edit their lists through a dedicated new list module, which enables detailed modifications and updates. A unique feature is the modal view for lists, where users can check off items, with real-time updates visible to all list users if the list owner has enabled this feature.

The friends module facilitates managing social connections by allowing users to unfriend or approve new friend requests. The add friends module provides a search function for finding users by name, and upon acceptance of a friend request, users can share lists with their new friends. The new list modules offer extensive functionality, including naming, description, quantity, units, image uploads, notes, and due dates. The left pane allows assigning roles such as Readers, Editors, and Admins to friends, each with specific permissions for interacting with the list. The right pane features an auto-incrementing list of text fields for item entry, with special fields for images and other options, seamlessly integrating with Firebase storage for image uploads.

Quilist also includes a settings page with three modules: General, Password, and Theme. In the General module, users can customize their avatar and update their name and email, with changes reflected in the Firebase database. The Password module allows users to change their password by verifying their existing password. The Theme module offers choices between light and dark modes and six different color themes, giving users full control over the app’s appearance. These preferences are stored in the database and applied upon user login.

Overall, Quilist stands out as a highly advanced project that combines list-making capabilities with rich social features, all while providing a secure and customizable user experience. The integration of Firebase for backend services and the use of React for frontend development ensures a responsive and engaging application that caters to a wide range of user needs.`,
    link: "https://august5421.github.io/Quilist/",
    image: quilistImg,
    githubLink: 'https://github.com/august5421/Jeopardy'
  },
  {
    name: "Weather 360",
    startDate: "March 2024",
    endDate: "August 2024",
    technologiesUsed: ["React", "Redux", "REST APIs", "Local Storage", "JS", "CSS"],
    description: `Weather360 is a feature-rich weather application designed to provide users with comprehensive weather information tailored to their preferences. Utilizing the OpenWeather API, Weather360 delivers accurate and up-to-date weather data for the user's current location. The application leverages local storage to remember the user's location, ensuring that weather updates are readily available upon user consent. With a user-friendly interface built using React, Redux, JavaScript, and CSS, Weather360 offers an engaging and customizable experience for weather enthusiasts.

The core functionality of Weather360 includes an hourly forecast, a 7-day forecast, and detailed air quality conditions on the home page. This allows users to easily access vital weather information at a glance. In addition to the current location data, users can search for weather information for various cities worldwide. The application supports adding these cities to a dedicated city tab, where users can switch between their favorite locations. Local storage plays a crucial role in maintaining a record of the cities the user has expressed interest in, ensuring a personalized and efficient experience.

The settings tab in Weather360 enhances user control by offering options to switch between dark and light mode, as well as customize the color theme according to individual preferences. Users can also specify their preferred units for temperature, wind speed, and choose between military or standard time formats. These features contribute to a tailored user experience, allowing Weather360 to adapt to different needs and preferences. Additionally, the settings tab includes an option to clear all local storage data, providing users with the ability to reset the application and start anew if desired.

Overall, Weather360 combines React's efficient UI management, Redux's state handling, JavaScript's dynamic data interactions, and CSS's responsive design to create a robust and user-friendly weather application. Whether tracking local weather conditions or exploring forecasts for cities around the globe, Weather360 offers a seamless and customizable experience that meets a wide range of user needs.`,
    link: "https://august5421.github.io/Weather360/",
    image: w360Img,
    githubLink: 'https://github.com/august5421/Weather360'
  },
  {
    name: "Jeopardy",
    startDate: "March 2024",
    endDate: "August 2024",
    technologiesUsed: ["React", "Redux", "REST APIs", "JS", "CSS"],
    description: `The Jeopardy clone application offers an immersive and interactive experience that faithfully replicates the excitement of the popular television quiz game. Developed using React and integrated with the Open Trivia Database (opentdb) API, this application provides a dynamic platform for up to three players to engage in a competitive trivia challenge. The onboarding process allows players to sign up and get ready for the game, setting the stage for a series of challenging questions across various categories.

Upon completion of the onboarding process, the gameboard is populated with a diverse range of trivia categories, each containing five questions of increasing difficulty. The application employs a scoring system where more challenging questions yield higher point values. The opentdb API ensures that each question is tokenized, preventing duplicates from appearing within the same session and maintaining the game's freshness and fairness. Players are selected randomly to choose questions, and a dedicated question card is displayed when a choice is made.

Gameplay in this Jeopardy clone is designed to be both competitive and engaging. Each player is equipped with a key on the keyboard to buzz in when they are ready to answer. Once a player buzzes in, others are temporarily locked out until the question is either answered or the timer runs out. If the initial player answers correctly, the game board updates to remove the question, and the player earns points while choosing the next question. In the event of an incorrect answer, other players have the opportunity to buzz in and provide the correct response, earning points and the right to select the next question.

The game progresses through all categories and then transitions to the "Double Jeopardy" round, where point values are doubled for an added layer of excitement and challenge. This round mirrors the initial gameplay but with increased stakes. At the end of the game, the player with the highest score is declared the winner. The application offers the option to restart the game for another round of trivia fun or to quit, providing players with flexibility and replayability. Utilizing React for dynamic UI rendering and JavaScript for game logic, this Jeopardy clone delivers an engaging and authentic trivia experience.`,
    link: "https://august5421.github.io/Jeopardy",
    image: jeopardyImg,
    githubLink: 'https://github.com/august5421/Quilist'
  },
  {
    name: "Fishbowl",
    startDate: "January 2024",
    endDate: "June 2024",
    technologiesUsed: ["React", "Redux", "JS", "CSS"],
    description: `Fishbowl is a dynamic and engaging web application that digitizes the popular party game known as Fishbowl, tailored for interactive group play. Developed using React and Redux, Fishbowl enhances the traditional gameplay experience with a modern, digital twist. The application enables seamless integration of game elements and provides a user-friendly interface to manage gameplay effectively. With JavaScript handling the core logic and CSS ensuring a polished and responsive design, Fishbowl offers a comprehensive solution for party enthusiasts looking to enjoy the game in a digital format.

At the heart of Fishbowl is its dynamic onboarding process, which allows for an infinite number of players to join the game. Users can customize the gameplay by adjusting settings such as the time allocated per turn and the number of entries each player receives. This flexibility ensures that the game can accommodate various group sizes and preferences, making it versatile for different settings and occasions. Once onboarding is complete, players are sorted into teams using an intuitive drag-and-drop interface, simplifying team organization and enhancing the overall user experience.

During gameplay, Fishbowl automatically manages essential aspects such as time tracking and scorekeeping, allowing players to focus on the fun of the game rather than logistical details. The application features a streamlined interface where players can either attempt to get their teammates to guess the entry or use the skip button to return an entry to the pool if they are unable to describe it. This real-time interaction keeps the game engaging and ensures that the pace remains lively.

As players progress through the rounds, Fishbowl handles the transition between each round smoothly, automatically advancing the game to the next stage unless all rounds have been completed. At the conclusion of the final round, the application announces the winning team, providing a satisfying end to the game. The combination of React's efficient rendering, Redux's state management, JavaScript's game logic, and CSS's design elements culminates in a well-rounded digital experience that brings the excitement of Fishbowl to the screen.`,
    link: "https://august5421.github.io/Fishbowl/",
    image: fishbowlImg,
    githubLink: 'https://github.com/august5421/Fishbowl'
  },
  
  
]

const WorkComponent = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const activeView = useSelector((state) => state.activeView);
  const [workPane, setWorkPane] = useState('start');
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (pane) => {
    setHovered(pane);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (pane) => {
    setWorkPane(null);
    setTimeout(() => {
      setWorkPane(pane);
    }, 1000);
  };
  
  const renderContent = (pane) => {
    switch (pane) {
      case 'professional':
        return <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {professionalProjects.map((project, index) => (
            <ProjectBox
              key={index}
              name={project.name}
              startDate={project.startDate}
              endDate={project.endDate}
              technologiesUsed={project.technologiesUsed}
              description={project.description}
              company={project.company}
              link={project.link}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </Box>;
      case 'freelance':
        return <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {freelanceProjects.map((project, index) => (
            <ProjectBox
              key={index}
              name={project.name}
              startDate={project.startDate}
              endDate={project.endDate}
              technologiesUsed={project.technologiesUsed}
              description={project.description}
              company={project.company}
              link={project.link}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </Box>;
      case 'personal':
        return <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {personalProjects.map((project, index) => (
            <ProjectBox
              key={index}
              name={project.name}
              startDate={project.startDate}
              endDate={project.endDate}
              technologiesUsed={project.technologiesUsed}
              description={project.description}
              company={project.company}
              link={project.link}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </Box>;
      default:
        return null;
    }
  };

  const renderCircle = (text, pane, icon) => (
    <Box
      onMouseEnter={() => handleMouseEnter(pane)}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick(pane)}
      sx={{
        borderRadius: '50%',
        width: isMobile ? '150px' : '300px',
        height: isMobile ? '150px' : '300px',
        border: isMobile ? `6px solid ${theme.secondary}` : `8px solid ${theme.secondary}`,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: !isMobile && hovered === pane ? '50px' : '0',
        backgroundColor: hovered === pane ? theme.secondary : 'transparent',
        transition: 'margin-bottom 0.3s, background-color 0.3s',
        animation: workPane === pane ? `${bounce} 0.6s` : 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transition: 'color 0.3s',
          color: hovered === pane ? 'white' : theme.black
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: isMobile ? '50px' : '100px', transition: 'color 0.3s', color: hovered === pane ? 'white' : theme.secondary } })}
        <LogoFont
          fontColor={hovered === pane ? 'white' : theme.black}
          text={text}
          fontWeight="700"
          fontSize={isMobile && '15px'}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      style={{
        position: 'absolute',
        left: isMobile ? 0 : '110px',
        top: 0,
        bottom: isMobile ? '75px' : 0,
        right: 0,
        zIndex: 3,
        margin: isMobile ? 20 : 30,
        padding: '5px',
        overflow: 'scroll',
        display: 'flex',
        justifyContent: workPane !== 'professional' && workPane !== 'freelance' && workPane !== 'personal' && 'center',
        flexDirection: isMobile ? 'column' : 'row'
      }}
    >
      <Box style={{ width: '100%' }}>
        {workPane !== 'professional' && workPane !== 'freelance' && workPane !== 'personal' && (
          <Box
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              flex: 1,
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}
          >
            <Fade in={workPane === 'start' && activeView === 'work'} timeout={750}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {renderCircle('Professional', 'professional', <BriefcaseIcon />)}
              </Box>
            </Fade>
            <Fade in={workPane === 'start' && activeView === 'work'} timeout={1250}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '30px'
                }}
              >
                {renderCircle('Freelance', 'freelance', <HandshakeIcon />)}
              </Box>
            </Fade>
            <Fade in={workPane === 'start' && activeView === 'work'} timeout={1750}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {renderCircle('Personal', 'personal', <FavoriteIcon />)}
              </Box>
            </Fade>
          </Box>
        )}
        {['professional', 'freelance', 'personal'].map((pane) => (
          <Fade in={workPane === pane && activeView === 'work'} timeout={1000} key={pane}>
            <Box style={{ display: 'flex', flexDirection: 'row', flex: 1, width: '100%' }}>
              {workPane === pane && (
                <Box style={{width: "100%"}}>
                  <Box style={{ margin: '16px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: 'calc(100% - 32px)' }}>
                    <Box style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                      <IconButton onClick={() => setWorkPane('start')}>
                        <ArrowBackIcon sx={{ color: theme.secondary }} />
                      </IconButton>
                      {!isMobile && (<LogoFont text="Back" />)}
                    </Box>
                    <Box style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                      <LogoFont fontSize="20px" text={pane.charAt(0).toUpperCase() + pane.slice(1) + " Projects"} />
                    </Box>
                    <Box style={{display: 'flex', flex: 1, flexDirection: 'row'}}></Box>
                  </Box>
                  <Box style={{ margin: !isMobile && '16px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {renderContent(pane)}
                  </Box>
                </Box>
              )}
            </Box>
          </Fade>
        ))}
      </Box>
    </Box>
  );
};

export default WorkComponent;
