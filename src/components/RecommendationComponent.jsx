import React from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import RecommendationBox from './RecommendationBox'; 
import rec1 from '../assets/pdfs/Recommendation1.pdf';
import rec2 from '../assets/pdfs/Recommendation2.pdf';
import rec3 from '../assets/pdfs/Recommendation3.pdf';
import rec4 from '../assets/pdfs/Recommendation4.pdf';
import ObfuscatedEmail from './ObfuscateEmail';

const RecommendationComponent = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);

  const Recommendations = [
    {name: 'Alena Gladkova', role: 'Technical Product Manager', company: 'HUSK Wellness', linkedin: 'https://www.linkedin.com/in/alena-gladkova/', email: '&#097;&#108;&#101;&#110;&#097;&#046;&#103;&#108;&#097;&#100;&#107;&#111;&#118;&#097;&#048;&#055;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;', relationship: 'Direct Superior', preview: "<p>Alena Gladkova</p> <p>Technical Product Manager</p> <p> HUSK Wellness</p> <p> To Whom It May Concern,</p> <p> I have had the distinct honor of working closely with August Brown for over 1.5 years at HUSK Wellness, where he has consistently impressed me with his technical expertise, dedication, and leadership in software development.</p> <p> As a software developer, August has been instrumental in numerous critical projects that have significantly contributed to our company's success. We have collaborated on initiatives such as rebranding our marketplace and main website, integrating third-party APIs to enhance member experience, and rebuilding our e-commerce shopping cart. His proficiency spans both front-end and back-end development, utilizing technologies such as PHP, Symfony, MySQL, ReactJS, Twig, HTML, CSS, and JavaScript to deliver polished and user-friendly solutions.</p> <p> August's ability to bridge communication across teams has been exemplary. He effectively gathers requirements from stakeholders across design, marketing, finance, operations, and sales, ensuring that all perspectives are integrated into the development process. His leadership qualities shine through his proactive approach to project management, fostering a culture of continuous learning and improvement within our development team.</p> <p> One of August's standout traits is his reliability in meeting deadlines without compromising on quality. His exceptional communication skills and willingness to go above and beyond expectations have consistently impressed both colleagues and supervisors alike. August actively participates in roadmap planning, daily stand-up meetings, backlog grooming, and sprint planning, demonstrating his commitment to project success and team cohesion.</p> <p> August's contributions to our team have been invaluable, and I have no doubt that he will bring the same level of dedication and expertise to any future endeavors. He is not only a talented developer but also a proactive and collaborative team member who would be a tremendous asset to your organization.</p> <p> Please feel free to contact me at 314-295-7504 or alena.gladkova07@gmail.com if you would like to discuss August's qualifications in more detail. I wholeheartedly recommend him for the software developer position at your company and am confident that he will excel in any role he undertakes.</p> <p> Sincerely, Alena Gladkova.</p>", download: rec1},
    {name: 'Giovanna Martosella', role: 'Vice President of IT', company: 'HUSK Wellness', linkedin: 'https://www.linkedin.com/in/gmartosella/', email: '&#103;&#105;&#111;&#099;&#111;&#114;&#114;&#105;&#100;&#111;&#110;&#105;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;', relationship: 'Direct Superior', preview: "<p>Novemeber 8th, 2023</p> <p> To Whom It May Concern,</p> <p> August is an absolute pleasure to work with and I would recommend him to any team. From my two  years managing August, I found that he is a fast learner, a team player and generally just a good human!  He was always willing to step up and go the extra mile, whether it was recreating an existing website in a  more modern framework or completing a last minute change to one of our applications, I could always  count on him to get it done. When I started working with August, he was primarily a front-end  developer, however he quickly learned how to use back-end technologies to complete full-stack  projects. More than anything, I always appreciated his positive attitude and flexibility.</p> <p>  Sincerely,</p> <p> Giovanna Corridoni Martosella,</p> <p> Former Vice President of Innovation &amp; IT Shared Services</p> <p>  HUSK Wellness, Inc.</p>", download: rec2},
    {name: 'David Wondero', role: 'Senior Program Specialist', company: 'Shift Digital', linkedin: 'https://www.linkedin.com/in/davidwondero/', email: null, relationship: 'Direct Superior', preview: "<p>July 8, 2021</p> <p> To Whom it May Concern,</p> <p>My name is David Wondero and I am a team lead at Shift Digital. In my role, I am responsible for leading a group of  Personal Digital Assistants (PDAs), who consult automotive retailers in digitally optimizing their tier three</p> <p> websites. Since the beginning of 2021, I have had the pleasure of working alongside August Brown as his team lead within the  Toyota Dealer Digital Solutions 2.0 program. Over the last several months, August continues to accomplish his primary  account workload, collaborates with teammates to problem solve website issues and has made improvements to the  program&rsquo;s overall website development process via his coding subject matter expert position.</p> <p> August currently manages 40+ Toyota retailer websites, making multiple proactive communications every month through  phone and email to discuss updated OEM initiatives, consultative points and project manages a variety of technological  issues. Additionally, August flawlessly balances managing two separate regions as a &ldquo;hybrid&rdquo; PDA, showing his readiness  to adapt. Along with retailer clients, August communicates directly with the Toyota eCommerce client teams on a weekly  basis, providing status reports for open projects as well as updates for any inventory, incentives, or general website  maintenance issues. Furthermore, August communicates directly with various provider support contacts to ensure all  projects are completed accordingly.</p> <p> Throughout August&rsquo;s tenure on the TDDS 2.0 team, he has become a beacon of knowledge about the program&rsquo;s offerings and internal processes. During our team touch bases, which take place Tuesdays and Thursdays, August effectively  collaborates with internal teammates, dissecting issues and assisting his services to problem solve various scenarios.  Additionally, August leads the &ldquo;workload organization&rdquo; onboarding training for new hires. August&rsquo;s increased focus on  teamwork shows that he is a leader on this team and a resource his colleagues can trust.</p> <p> Speaking of leadership, August developed his own position as the coding subject matter expert, a role in which he  continues to enhance within the program. Within this secondary position, August utilizes his coding skills to develop  efficient best practices for adding customizable website pages, contact forms and buttons for retailer websites.  Additionally, August coded and developed a website, which houses all current projects as well as instructions for ease of  use.</p> <p> Overall, August continues to demonstrate his leadership, teamwork, and problem-solving skills at an accelerated rate, can  adapt to needed changes, and proactively takes initiative on projects to better our team&rsquo;s processes. I highly recommend  August&rsquo;s professional services if an opportunity arises. Please reach out to me if you would like to further discuss  August&rsquo;s qualifications.</p> <p> Sincerely,</p> <p>David J. Wondero July 8, 2021</p>", download: rec3},
    {name: 'Kim West', role: 'Director of Enterprise Delivery', company: 'Modis', linkedin: 'https://www.linkedin.com/in/kkwest/', email: null, relationship: 'Direct Superior', preview: "<p>March 12th, 2021</p> <p> To Whom It May Concern,</p> <p> It is with great pleasure that I write this recommendation for August Brown. August reported to me for  approximately a year and a half at Modis, Inc. working as a Technical Recruiter.</p> <p> I found August to be reliable, hard-working and a fast learner. He had a high technical acumen,  especially when it came to complex excel spreadsheets and reporting. He spent extra hours, often  during his own time, perfecting reports and spreadsheets that proved to make the entire team more  productive. No matter how busy August was he more than happy to help the team improve efficiencies  and stay more organized.</p> <p>  Moreover, August always had a positive attitude and warm demeanor. There is no doubt in my mind he  would be a strong asset to any company, and I would happily rehire him if the opportunity presented  itself.</p> <p>  If you would like any other information, please do not hesitate to contact me.</p> <p>  Sincerely,</p> <p> Kim West</p> <p> Director of Enterprise Delivery Modis, Inc.</p>", download: rec4},
  ];

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
        overflow: 'scroll' 
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          marginBottom: "20px"
        }}
      >
        {Recommendations.map((recommendation, index) => (
          <RecommendationBox
            key={index}
            name={recommendation.name}
            role={recommendation.role}
            company={recommendation.company}
            linkedin={recommendation.linkedin}
            email={recommendation.email ? recommendation.email : null}
            relationship={recommendation.relationship}
            preview={recommendation.preview}
            download={recommendation.download}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecommendationComponent;
