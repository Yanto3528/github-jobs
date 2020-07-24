import { createContext, useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";

export const JobContext = createContext();

const tempJobs = [
  {
    id: "bfda54c4-da1a-4487-a579-637f9c7a0ffb",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/bfda54c4-da1a-4487-a579-637f9c7a0ffb",
    created_at: "Thu Jul 02 22:24:18 UTC 2020",
    company: "One More Cloud",
    company_url: "http://bonsai.io",
    location: "Remote",
    title: "Senior Platform Engineer",
    description:
      '<p>Bonsai is hiring a Senior Platform Engineer to help build, scale and support the underlying technical platform that help us manage thousands of Elasticsearch clusters on AWS and GCP. This is a 100% remote full-time position. Salary ranges from $120 to $130k, based on experience.</p>\n<h2>About the job</h2>\n<p>“Hey, we’ve put your add-on in production. Good luck. Don’t crash.” —Heroku</p>\n<p>The essence of platform engineering at Bonsai will be to operate and support Elasticsearch at scale. The emphasis here is more on the scale part than the Elasticsearch part, but you’ll definitely become intimate with Elasticsearch and Lucene along the way.</p>\n<p>There are several key components involved. First we have Elasticsearch itself. Then a handful of proprietary plugins to enhance its functionality and support its operation. From there, the networking stack that handles connections and does diagnostic tracing. Telemetry and observability across the board. Finally our packaging and deployment, and internal services for fleet orchestration.</p>\n<p>If that sounds like more than one person’s job, we agree. Your future colleague Dan is going to be particularly stoked to work with you.</p>\n<p>You can think of this similar to a “SRE” position. When there’s an issue with performance or reliability, you’ll dig in and trace requests and analyze from load balancers down to memory managers, and help code and ship a patch to make it visible, and make it better.</p>\n<p>There’s a heavy dose of Java and Linux involved in all of this, but if you have some experience in systems programming in other languages, we can certainly teach all of that.</p>\n<p>We’re a small team, but we punch above our weight in systems engineering and operations. Launching at the right place and time dropped us into the deep end of early adopters, and we’ve been scaling ever since. Fortunately our early team was heavily engineering minded. Our original founder was previously a database engineer at Twitter when they went through their years of crazy scaling. We also hosted some massive sites like Pinterest whose 100x growth on our platform was a true trial by fire.</p>\n<p>This position does involve wearing the metaphorical pager in a rotation with other engineers on the team. We’re on call not because we expect to be woken up, but so we’re accountable to shipping systems that never need us to!</p>\n<h2>Some example projects</h2>\n<ul>\n<li>Moving decentralized server-initiated threshold alerts into a centralized time-series stream analysis service.</li>\n<li>Building a continuous delivery service that performs gradual fleetwide rollouts of new and updated services, subject to canary stages and operational verification at certain checkpoints.</li>\n<li>Build and package new versions of Elasticsearch OSS, and update our suite of plugins to use the latest plugin interfaces, including customer-supplied proprietary plugins.</li>\n<li>Troubleshoot a customer-supplied Elasticsearch plugin with a performance hot-spot, trace the problem to a likely location and provide support and guidance to improve efficiency.</li>\n<li>Diagnose a server-side agent as having problematic memory usage, and port it from Ruby to Crystal to improve performance and resource usage.</li>\n<li>Collaborate with Product engineers to build a data pipeline to support customer-facing metrics graphs.</li>\n<li>Assist our customer support by triaging operational incidents and performing incident response.</li>\n</ul>\n<h2>The ideal engineer</h2>\n<p>We’re looking for someone experienced, who’s ready to dive in. You don’t need to be an Elasticsearch expert — you’ll learn all of that on the job. We’ll have plenty of conversations about how Lucene is really a data structures library optimized for disk access.</p>\n<p>Experience with Java is more helpful, although C, C++ and Golang would be a good starting points. We’ll also be looking for solid fundamentals in networking, disk access, memory management, and schedulers.</p>\n<p>Several of our systems make heavy use of Netty, as does Elasticsearch itself. So familiarity with Netty or evented systems will be helpful.</p>\n<h2>The ideal teammate</h2>\n<p>One More Cloud (OMC) is small, remote-first, and team-conscious.</p>\n<p>OMC has always been comprised of a small team. As such, each of our colleagues wears many hats. We lack middle managers and dedicated Project Managers that slice and dice out work; OMC managers are also contributors. They serve as a sounding board and for coaching higher level project and career questions. Everyone is expected to manage projects together. So, our team works best with individuals who take responsibility for their to-do lists, and those who enjoy working collaboratively with teammates to plan out projects and don’t shy away from offering their opinions.</p>\n<p>OMC has been a remote-first company from day one, and we have a lot of experience in managing and communicating across multiple timezones. One of our key ways of getting focused work done is eliminating too many meetings and video calls by writing out our thought processes, documenting steps we take, and sharing it with the team. Our ideal teammate should be comfortable with and undaunted at writing clear and logical longer-form English prose on a regular cadence.</p>\n<p>We are team-conscious. Yes, we have a company hierarchy based on skills and the level of risk a position incurs (like responsibility for servers that have big costs attached to them). However, the onus is on every individual at OMC(regardless of hierarchy) to create a culture that allows a space for creativity, honesty, and autonomy for everyone who joins OMC. We don’t look for team heroes or martyrs but rather strive to create healthy and realistic team responsibility. We collaborate best with those who are considerate of their teammates, respect boundaries, and are dedicated to pursuing our work with curiosity, respect, and optimism.</p>\n<h2>About One More Cloud</h2>\n<p>OMC provides specialized hosted cloud services through two SAAS services: Websolr (websolr.com) and Bonsai (bonsai.io). We launched Websolr in 2009 as the first cloud hosted Solr as a service, and one of the very first batch of Heroku addons. Bonsai followed in 2012 as the first hosted Elasticsearch as a service on the market.</p>\n<p>Our company is small, profitable, and independent. Our entire team, starting with the founders, is comprised of developers, engineers, scientists, and designers with a passion for providing useful tools and services for developers and businesses. As truth-seeking creatives and thinkers, we strive for excellence from design to execution.</p>\n<p>We manage the search engines for ecommerce applications, social media sites, magazine archives, classifieds search, job boards and resume search, CRMs, content management systems, and more. We\'ve been fortunate to serve teams at startups and established sites alike, such as Airbrake, Best Buy, Bullhorn, Couchsurfing, Ello, Fairfax Media, GitHub, Heroku, Muck Rack, OfferUp, Pinterest, Scripted, wikiHow, and more.</p>\n<p>Benefits for working at OMC include:</p>\n<ul>\n<li>Medical and Dental Insurance</li>\n<li>40 hour work week. We practice healthy work and life boundaries.</li>\n<li>Work where you want. We\'re a remote-first company, and have been from day one since 2009.</li>\n<li>401k, with company contributions</li>\n<li>Wellness allowances</li>\n<li>Annual continuing education allowance</li>\n<li>Paid parental leave</li>\n</ul>\nLearn More\n<p>View our careers page at <a href="bonsai.io/careers">bonsai.io/careers</a></p>\n<p>View our current team and company story at <a href="bonsai.io/about">bonsai.io/about</a> and <a href="omc.io">omc.io</a></p>\n<p>View the products you\'ll work on to support at <a href="bonsai.io">bonsai.io</a> and <a href="websolr.com">websolr.com</a></p>\n',
    how_to_apply:
      '<p>Apply through our Greenhouse posting: <a href="https://boards.greenhouse.io/onemorecloudinc/jobs/4433722002?gh_source=github">https://boards.greenhouse.io/onemorecloudinc/jobs/4433722002?gh_source=github</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80f5744a2b137d6f09e6234058c4d55f02b86371/cloud-plus-blue-bg.png",
  },
  {
    id: "911a5212-129b-491f-95d4-f7eaa19bdefa",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/911a5212-129b-491f-95d4-f7eaa19bdefa",
    created_at: "Thu Jul 02 17:01:53 UTC 2020",
    company: "Zappos.com",
    company_url: "http://jobs.zappos.com",
    location: "USA Remote",
    title: "Senior Software Engineer- Full Stack",
    description:
      '<p>Work remotely temporarily due to COVID-19</p>\n<p>We are a small team helping groups throughout the organization solve problems and develop new ideas. Our projects focus on the future of Zappos by building interactive experiences centered around customer service. We are a nimble team that moves fast and empowers others to build and experiment with new Zappos experiences rapidly.</p>\n<p>We are looking for candidates who have a sense of ownership to deliver quick but extensible solutions. You will have the freedom to incubate new ideas with the backing of a large yet passionate-about-culture organization. Our current platform is built on Ruby on Rails and React.js, but we will always prioritize finding the right tool for the job.</p>\n<p>Some of our recent projects include launching ZapposKids.com (<a href="https://www.zappos.com/e/shops/kids">https://www.zappos.com/e/shops/kids</a>) and Zappos Goods for Good (<a href="https://www.zappos.com/e/goods-for-good">https://www.zappos.com/e/goods-for-good</a>).</p>\n<p>What you\'ll be doing:</p>\n<p>Responsibilities range from team "ideation" to hands-on implementation, testing, and debugging of projects at different levels of the stack as needed. Typical projects involve a responsively-designed front end, a Rails-based server application, and possibly some form of asynchronous back-end processing. You must be willing and able (and excited) to accept responsibility for enhancing required skills and completing assigned tasks over the course of changing projects and initiatives. Adapt and thrive!</p>\n<p>What you\'ll bring to the table:</p>\n<p>We are ideally looking for "T-shaped developers"—people who have a broad interest and understanding of technology and the web, but also have deep interest in a specialized area. We want someone who fits most (or ALL!) of these bullet points:</p>\n<p>5-7+ years production software development experience\nA solid knowledge of many (not necessarily all) of these technologies: React, HTML5, CSS3, Ruby/Ruby on Rails, and relational databases.\nStrong frontend development skills\nExperience with modern front end JavaScript frameworks (React, Angular, Vue, etc.)\nExperience with unit/integration testing\nDevOps experience is a plus (especially with AWS and automated deployments)​.\nA solid, demonstrable grasp of good web, object-oriented, and asynchronous programming concepts.\nThe drive and open-mind to learn and adopt new skills continually.\nSide projects and ideas for side projects you haven\'t started yet would be great.\nAn open-mind and personable disposition. You like to collaborate and can give and take constructive criticism cheerfully.</p>\n',
    how_to_apply:
      '<p>Please click the link to apply!</p>\n<p><a href="https://app.jobvite.com/j?cj=ohGO9fwE&amp;s=Githubjobcw">https://app.jobvite.com/j?cj=ohGO9fwE&amp;s=Githubjobcw</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW1GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf9ec8463681dc3fc05b016bf6334be04f4cfbc0/zappos%20logo.png",
  },
  {
    id: "22098e20-4b3e-48fb-b109-d6dd72bddd70",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/22098e20-4b3e-48fb-b109-d6dd72bddd70",
    created_at: "Wed Jul 01 15:05:54 UTC 2020",
    company: "Virtual Pricing Director",
    company_url: "https://www.virtualpricingdirector.com/",
    location: "UK",
    title: "Back End Engineer: Node.js | data | GraphQL",
    description:
      "<p>Virtual Pricing Director is hiring a Back End Engineer - working in Node.js and other languages - to redesign and implement its new Legal Tech back end and data platform.</p>\n<p>Our software empowers a wide audience within law firms to swiftly produce consistently high quality data-driven pricing proposals that profitably deliver on clients' expectations of pricing transparency and pricing certainty. We achieve this with a best in class data management and workflow platform, and a compelling focus on UI/UX.</p>\n<p>We have a proven MVP, the best-recognised brand and strong demand. Now embarking on our third product release, you will design and build out an entirely new data structure and back end. You will be establishing data pipelines, representing data for BI and reporting, and building comprehensive back end capabilities. Your work will go on to manifest new workflow management capabilities, and to bring structure to unstructured data.</p>\n<p>The domain entails data-intensive services where security, data integrity and uptime are key. This presents lots of interesting challenges as we build and integrate our technology. We offer considerable freedom in technology choice and approach. There are big plans and lots to accomplish.</p>\n<p>Upcoming projects</p>\n<p>Exploring, innovating and creating IP\nDesigning and implementing new data structures and logic\nNew back end for modular BI and reporting products\nNew API and data integration pipelines\nDesigning operational AWS infrastructure\nAutomating quality, CI/CD, and shaping a DevOps culture\nSupporting dialogue with customers\nExploring GraphQL\nUpholding ISO27001\nPreparing for explorations in machine learning</p>\n<p>We're looking for</p>\n<p>Someone ready to shape the back end and data solution\nStrong grounding in Computer Science, Data Science or Mathematics, through formal study - or equivalent knowledge\nDeep, technical, software design and coding skills - accrued in a modern web back end context\nTechnology agnostic and adept with Node.js and strong SQL\nAbility to build modern microservice-based systems that scale\nAbility to unpack complex requirements, to uphold security of sensitive data and to conform to best practices\nA collaborative, adaptable, user-centered approach\nYou may also bring - or like to gain - interests around knowledge management, data science, NLP or machine learning\nSomeone considering remote, Senior or Lead level, back end jobs such as: Back End Engineer | Back End Developer | Microservices Developer | Lead Software Engineer | Node.js Developer | Node.js Engineer etc.</p>\n<p>Anticipated ecosystem - we'll welcome your influence</p>\n<p>Node.js | optionally some Python, Go, Rust or similar | PostgreSQL | GraphQL | AWS | ML | TDD | Agile</p>\n<p>Salary and benefits</p>\n<p>£60,000 - £90,000+ we're keeping an open mind\nShare scheme for founding team members (once proven value to the business)\n25 days holiday, plus public holidays and a day for your birthday\nFamily-friendly and flexible culture - tell us what you need\nPersonal development plan that you can shape, with budget for related training/certifications</p>\n<p>About us</p>\n<p>Virtual Pricing Director has developed groundbreaking software to assist law firms to understand and price their fees, be that £10k or £10m. We are the authority for legal pricing and our software has attracted the attention of the largest firms in numerous countries. We're now bringing our development team together, offering a culture where you will work under your own initiative towards common goals. It's an opportunity to be a formative team member, to help shape our collaborative culture and methods, and to grow and improve together. Virtual Pricing Director is a privately-owned venture, founded by Burcher Jennings LLP and Validatum.</p>\n<p>Location: fully remote, within the UK</p>\n<p>Even if your CV isn't ready, please talk with Vittoria at techfolk to find out more:</p>\n<p>0117 318 2447 | <a href=\"mailto:hello@techfolk.co.uk\">hello@techfolk.co.uk</a> | @we_are_techfolk</p>\n<p>RECRUITERS: Virtual Pricing Director has selected techfolk as its recruitment partner for this position and cold calling or speculative applications are not welcomed.</p>\n",
    how_to_apply:
      '<p>We would be pleased to chat and tell you more, or to take questions via:</p>\n<p><a href="mailto:hello@techfolk.co.uk">hello@techfolk.co.uk</a> | tel 0117 3182447 | @we_are_techfolk</p>\n<p>And you can apply via: <a href="https://www.techfolk.co.uk/job/back-end-engineer-70.aspx">https://www.techfolk.co.uk/job/back-end-engineer-70.aspx</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7fbda8b958ad37ad019c9eab2fe9a6075da20d08/VPD%202.png",
  },
  {
    id: "5ae75da5-fab6-41dd-8fc6-7c5e3b0ae5fe",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/5ae75da5-fab6-41dd-8fc6-7c5e3b0ae5fe",
    created_at: "Wed Jul 01 11:16:56 UTC 2020",
    company: "Gothaer Digital GmbH",
    company_url: "http://www.gothaer-digital.de",
    location: "Cologne",
    title: "Senior Mobile Developer for Flutter / Dart",
    description:
      '<p>Are you looking for a new challenge in software developing? You love clean code and technically smart software? You want to be at the frontline of a changing industry?</p>\n<p>Then you\'ve come to the right job posting. As a digital subsidiary of the Gothaer Insurance Company, we are looking for new colleagues with entrepreneurial spirit as teammates in our dynamic, interdisciplinary team. The start-up spirit in our office with a view over the roofs of Cologne provides a unique environment.</p>\n<p>We are currently looking for a software developer for our tech team who is experienced with mobile / hybrid development and App store release (Android &amp; Apple) and has project experience with Flutter / Dart projects.</p>\n<ul>\n<li>Mobile development with Flutter (Dart) for our health app</li>\n<li>Project-based development of applications and MVPs for Gothaer Insurance Company</li>\n<li>Implementation of UI and prototypes with excellent user experiences from our XD designs</li>\n</ul>\n<p><strong>Your profile:</strong></p>\n<ul>\n<li>Good experience with Flutter and other mobile technologies</li>\n<li>Interest in attractive modern design patterns and an "eye" for distances, layout and colors</li>\n<li>team player with the interest to cooperate in an interdisciplinary team</li>\n<li>Great interest in innovation (e.g. new programming languages and APIs as well as new technologies in general)</li>\n<li>optional experienced with web development with JavaScript based frameworks for web or mobile development</li>\n<li>optional: experience with cloud computing and scaling (Azure, Docker, etc.)</li>\n<li>Enjoy bringing complex projects to success as part of a team</li>\n<li>German language is a plus but not mandatory</li>\n</ul>\n<p>Gothaer Digital GmbH is a international team of experts and you can have a great influence on the path of our digital unit. We offer you a lot of space for the implementation of new ideas and your personal development. Convinced? Then we are looking forward to receive your application.</p>\n<p><strong>What we also offer:</strong></p>\n<ul>\n<li>A modern office with coffee, drinks and a great view of the city</li>\n<li>A cross-functional team from different areas</li>\n<li>Flexible working hours and home office</li>\n<li>Further training and paid tech meetings attendance</li>\n<li>Good connection to public transport and a discount for your monthly ticket</li>\n<li>german classes for our foreign employees</li>\n</ul>\n',
    how_to_apply:
      '<p>apply via email or via our website <a href="http://www.gothaer-digital.de">www.gothaer-digital.de</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5e73c476e9f8443569cb0b406174d9571587b268/GoD_Logo_RGB.png",
  },
  {
    id: "a4a03e31-b069-421c-ad0d-14f10fd6a1d3",
    type: "Full Time",
    url:
      "https://jobs.github.com/positions/a4a03e31-b069-421c-ad0d-14f10fd6a1d3",
    created_at: "Tue Jun 30 18:48:52 UTC 2020",
    company: "Epic",
    company_url: "http://careers.epic.com",
    location: "Madison, WI",
    title: "Network DevOps Engineer",
    description:
      "<p>We are seeking a Network DevOps Engineer to create automation to analyze, maintain, and evolve our complex network's infrastructure. As part of Epic's multi-tenant hosting team, you'll keep abreast of the latest technologies and work collaboratively with experts in a variety of knowledge areas to develop and maintain a robust, reliable, high-performance foundation for some of the largest healthcare organizations in the country to access our world-class software.</p>\n<p>Desired Skills and Knowledge Areas:</p>\n<p>Experience with Infrastructure as Code frameworks such as Ansible, Puppet, or Terraform</p>\n<p>Experience with scripting and programming languages such as Python, PowerShell, Go</p>\n<p>Experience with Network, firewall, or load balancer platforms</p>\n<p>Background in networking fundamentals including TCP/IP, DNS, load balancing, routing, and administration of networking hardware.</p>\n<p>Requirements:</p>\n<p>Relocation to the Madison, WI area (reimbursed)</p>\n<p>5+ years IT experience required, minimum 1-2 years in DevOps</p>\n<p>A history of academic and professional success</p>\n<p>Eligibility to work in the U.S. without visa sponsorship</p>\n<p>More than just important work.\nEpic is located in Madison, Wisconsin, a city regularly ranked as one of America's best places to live. Epic's environment is one of continuous learning; you'll have access to opportunities to expand your skill set and share your knowledge with others. We offer comprehensive benefits to keep you healthy and happy as you grow in your life and career, and your merit-based compensation will reflect the impact your work has on the company and our customers. You'll also be eligible for annual raises and bonuses,  as well as stock grants, which give you an even greater stake in the success of Epic and our customers. Epic is an Equal Opportunity/Affirmative Action (W/M/Vets/Disability) employer. Please see our full non-discrimination statement at <a href=\"https://careers.epic.com/EEO\">https://careers.epic.com/EEO</a>.</p>\n<p>As a member of the Hosting team at Epic you'll be responsible for the confidentiality, integrity, and availability of Epic Hosting. Those responsibilities include:</p>\n<p>Following policies and procedures and escalating when policies or procedures are not followed.</p>\n<p>Escalating potential security incidents and providing relevant information.</p>\n<p>Meeting all security responsibilities defined in policies and procedures.</p>\n",
    how_to_apply:
      '<p>Upload your resume here: <a href="https://epic.avature.net/Careers/RegisterMethod?folderId=19058">https://epic.avature.net/Careers/RegisterMethod?folderId=19058</a></p>\n',
    company_logo:
      "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3971322e8c7ac9b5f603a827026f78bf25d72413/large%20Epic%20logo%20red%20(transparent%20BG).png",
  },
];

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [jobsPerPage] = useState(5);

  const fetchJobs = async (query = null) => {
    let params = {};
    if (query !== null) {
      params = { ...query };
    }
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: "http://localhost:3000/api/jobs",
        params,
        // paramsSerializer: (params) => {
        //   qs.stringify(params, { arrayFormat: "comma" });
        // },
      });
      setJobs(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        error,
        jobsPerPage,
        fetchJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
