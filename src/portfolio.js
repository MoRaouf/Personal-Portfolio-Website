/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "MoSpace",
  title: "Hi all, I'm Mohammed",
  subTitle: emoji("Applied Data Scientist & NLP Engineer. I have grown knowledge of data and its impact on the business, building & delivering predictive models & using SOTA language models to tackle business needs."),
//   subTitle: emoji("Data Scientist 👨‍💻 | Curious NLP Engineer 🤖| Tech Writer ✍️"),
  resumeLink:
    "https://drive.google.com/file/d/1TSdNMaEGdtv-_RAb-eODG9QIIMrJxzH1/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //   /* Your Social Media Link */
  github: "https://github.com/MoRaouf",
  linkedin: "https://www.linkedin.com/in/mohammedraouf/",
  //youtube: "https://www.youtube.com/channel/UC8Vd3gI4ckdl9JJMLO09oXA",
  gmail: "mhmd.raouf@outlook.com",
  twitter: "https://twitter.com/_MRaouf",
  //facebook: "https://www.facebook.com/islam.abdo.925/",
  //instagram: "https://www.instagram.com/islamabd0/",
  //hackerrank: "https://www.hackerrank.com/Eslam_Abdo",
  kaggle: "https://www.kaggle.com/mohammedraouf",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Data Scientist & NLP Engineer",
  subTitle: "PASSIONATE DATA SCIENTIST WITH INTEREST IN THE INTERSECTION BETWEEN NLP & TOURISM",
  skills: [
    emoji("⚡ Leverage knowledge of data science, methodologies, and processing techniques to analyze vast amounts of data for decision support."),
    emoji("⚡ Build predictive models using various ML methods."),
    emoji("⚡ Use state-of-the-art NLP models to solve Tourism-related problems."),
    emoji("⚡ Acquire growing knowledge of Big Data & Cloud Deployment."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery 
https://iconify.design/
*/

  softwareSkills: [
    {
      skillName: "Python",
      classname: "logos:python"
    },
    {
      skillName: "PyTorch",
      classname: "logos:pytorch-icon",
    },
    {
      skillName: "Sci-Kit Learn",
      classname: "simple-icons:scikitlearn",
    },
    {
      skillName: "spaCy",
      classname: "simple-icons:spacy"
    },
    {
      skillName: "AWS",
      classname: "logos:aws"
    },
    {
      skillName: "MySQL",
      classname: "logos:mysql"
    },
    {
      skillName: "Neo4j",
      classname: "simple-icons:neo4j"
    },
    {
      skillName: "PySpark",
      classname: "cib:apache-spark"
    },
    {
      skillName: "Git",
      classname: "vscode-icons:file-type-git"
    },
    {
      skillName: "Docker",
      classname: "logos:docker-icon"
    },
    {
      skillName: "Jira",
      classname: "logos:jira"
    },
    {
      skillName: "VScode",
      classname: "vscode-icons:file-type-vscode"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Heriot-Watt University",
      logo: require("./assets/images/Heriot-WattLogo.png"), 
      subHeader: "MSc in Data Science (Distinction)",
      duration: "January 2020 - September 2022",
      desc: "Masters' dissertation titled \"NLP-powered Recommendation system using Knowledge Graph for Tourism\"",
//       descBullets: [
//         "Acquired an open source textual data related to Tourism.",
//         "Processed the data using different NLP techniques such as coreference resolution.",
//         "Trained the state-of-the-art Transformers model `RoBERTa` for the usage in the recommender system.",
//         "Built a knowledge-based database using Neo4j.",
//         "Built a recommender system from the trained transformers model to recommend single day & multi-day travel packages considering user preferences.",
//       ],
    },
    {
      schoolName: "Minia University",
      logo: require("./assets/images/Minia-Uni-logo.jpg"), 
      subHeader: "BSc in Mechatronics & Industrial Robotics",
      duration: "October 2014 - February 2019",
      desc: "Ranked 1st in the program.",
//       descBullets: [
//         "I have studied basic software engineering subjects like Programming, OS, Embedded, Electronics, Communications etc.",
//         "Apart from this, I have done courses on Embedded System, ARM, C/C++, ect.",
//         "I was joined a technical team as a student activity and I was involved a robotics competitions.",
//       ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Omdena",
      companylogo: require("./assets/images/Omdena.png"),
      date: "NOV 2022 - Present",
      // location: "Remote",
      desc:
        "Contributor to various open-source projects in Data Science, Machine Learning & NLP  .",
    },
    {
      role: "Planning Engineer",
      company: "Western Beach",
      companylogo: require("./assets/images/WesternBeach.png"),
      date: "JAN 2020 - DEC 2022",
      // location: "Abu Dhabi, UAE",
      desc:
      "",
    }
//     {
//       role: "Electrical Team Member",
//       company: "M.I.A Robotics",
//       companylogo: require("./assets/images/MIA_logo.png"),
//       date: "JUN 2018 - JAN 2020",
//       // location: "Alexandria, Eygpt",
//       desc:
//         "M.I.A is a technical team of Alexandria University students. I was involved in ABU Robocon which is a robotics competition.",
//       descBullets: [
//         "Designed control circuits used in the quadruped robot.",
//         "Worked on a wireless communications system with the wheeled robot and ps2 joystick (pilot).",
//         "Worked on Reversed engineering for cytron 10-A motor driver.",
//       ]
//     }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "GitHub Projects",
  subtitle: "A list of my most recent open source projects",
  projects: [
     {
//       image: require("./assets/images/ChurnAnalysis.png"),
      projectName: "NLP-powered RecSys using Knowledge Graph for Tourism",
      projectDesc: "A Recommendation System using state-of-the-art RoBERTa model with knowledge graph data base for package recommendation",
      footerLink: [
        {
          name: "Check on GitHub",
          url: "https://github.com/MoRaouf/Churn-Analysis-PySpark"
        }
        //  you can add extra buttons here.
      ]
    },
    {
//       image: require("./assets/images/PckgRecommendation.png"),
      projectName: "Holiday Package Recommendation",
      projectDesc: "Various Machine Learning algorithms used to predict tourist package purchase",
      footerLink: [
        {
          name: "Check on GitHub",
          url: "https://github.com/MoRaouf/Holiday-Package-Recommendations-using-different-ML-algorithms"
        }
        //  you can add extra buttons here.
      ]
    },
    {
//       image: require("./assets/images/ChurnAnalysis.png"),
      projectName: "Customer Churn Analysis using PySpark",
      projectDesc: "Investigated churn analysis on customer history & information in the Telecom industry",
      footerLink: [
        {
          name: "Check on GitHub",
          url: "https://github.com/MoRaouf/Churn-Analysis-PySpark"
        }
        //  you can add extra buttons here.
      ]
    },
    {
//       image: require("./assets/images/SentimentAnalysis.png"),
      projectName: "Expo2020 Twitter Sentiment Analysis",
      projectDesc: "A multi-label sentiment classifier on EXPO2020 tweets to understand audience opinions & mainstream topics",
      footerLink: [
        {
          name: "Check on GitHub",
          url: "https://github.com/MoRaouf/twitter-sentiment-analysis"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle:
    "Certifications and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle:
        "AWS",
      image: require("./assets/images/AWS-CCP.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/2200ecdd-c2dd-4323-8a65-d9365897d330/public_url"
        }
      ]
    },
    {
      title: "Querying with Cypher in Neo4j 4.x",
      subtitle:
        "Neo4j GraphAcademy",
      image: require("./assets/images/Neo4J-Cert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/17muln3e2W1UwUXBn_XHotYxqvcxHJdZR/view?usp=share_link"
        },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
      ]
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle:
        "Coursera",
      image: require("./assets/images/Coursera-Cert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1y7z4bYYxI3cAnFmaklrI8nFLdcYxeEtS/view?usp=share_link"
        }
      ]
    },
    {
      title: "Intermediate SQL For Data Analysis",
      subtitle: "DataQuest.io",
      image: require("./assets/images/Coursera-Cert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1NZHb-4aN595bGRi114INB1T_rppx9y2y/view?usp=share_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Latest Blogs",
  subtitle:
    "A hand-picked collection of articles from my blog",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://moraouf.notion.site/Intro-to-Regression-with-Ridge-Lasso-Elastic-Net-250cfaf7b4404cf2ac11748200d76c8a",
      title: "Intro to Regression [with Ridge, Lasso & Elastic Net]",
      description:
        "Breaking down Linear Regression with its variants (Ridge, Lasso, Elastic Net, Softmax)."
    },
    {
      url: "https://moraouf.notion.site/Ensembles-Decision-Trees-Random-Forests-Boosting-c106ede7226e43a8b0001b52b20dc3af",
      title: "Ensembles [Decision Trees, Random Forests & Boosting]",
      description:
        "Intro to Ensembles including Decision Trees, Random Forests & Boosting through XGBoost."
    },
    {
      url: "https://www.notion.so/moraouf/OOP-Decorators-f7551e1b33504373b749bac7d8f5c334",
      title: "OOP & Decorators",
      description:
        "Intro to Object-oriented Programming Concepts & Decorators in Python."
    },
    {
      url: "https://moraouf.notion.site/Principal-Component-Analysis-with-Eigenvectors-Eigenvalues-755a69fb69c142b99974e97f799869dd",
      title: "Principal Component Analysis (with Eigenvectors & Eigenvalues)",
      description:
        "One stop shop for understanding PCA with Eigenvectors & Eigenvalues."
    },
    {
      url: "https://moraouf.notion.site/Evaluation-Metrics-Regression-Classification-ca671008644d4c89a7f1bc0cd362d4d6",
      title: "Machine Learning Evaluation Metrics",
      description:
        "A brief into evaluating regression & classification models."
    },
    {
      url: "https://moraouf.notion.site/Hypothesis-Testing-29b24227085947ccb1d2bedb2ed413aa",
      title: "Hypothesis Testing",
      description:
        "Explaining Hypothesis Testing in Python."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("REACH OUT TO ME! ☎️"),
  subtitle:
    "Discuss a project or just want to say Hi? My Inbox is open for all.",
  //number: "+20-1116162620",
  email_address: "mhmd.raouf@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
