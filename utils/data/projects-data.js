import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Chat Application",
    description:
      "Developed a scalable real-time chat application with anonymous discussions and unique room IDs, using Tailwind CSS, react-icons, and Toast messages for a sleek interface. Leveraged Next.js for rendering and MongoDB for data management. Implemented NextAuth.js for authentication with Google and GitHub, and configured custom callback functions for secure sign-in. Integrated Pusher API to enhance messaging speed, reducing load times by 40% compared to WebSockets, and used Cloudinary for efficient media management.",
    tools: [
      "Tailwind CSS",
      "Next.js",
      "React",
      "MongoDB",
      "JWT",
      "Pusher API",
      "Typescript",
      "Prisma ORM",
      "Cloudinary API",
      "NextAuth.js",
    ],
    role: "MERN Stack Developer",
    link: "https://buzz-chat-nine.vercel.app/",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 2,
    name: "Grocery Application",
    description:
      "Developed comprehensive Multi-user Grocery Application that offers a seamless shopping experience for users.Utilized HTML, CSS, Bootstrap and JavaScript in the frontend and Flask for handling incoming HTTP requests on specific ports by implementing control route functions. SQLite Database was used to store and fetch data for both Admin and Customers. Implemented email verification through Smtp.js API, utilizing OTPs for user registration and password recovery for existing users. Integrated Google Maps API for real-time address suggestions and validation during user input for new address entry or existing addresses. Bar Graph summary of category utilization and comparison on quantities of items bought was made using Python Matplotlib library.",
    tools: [
      "Flask",
      "Python",
      "Google Maps API",
      "Sqlite",
      "Smtp.js API",
      "HTML",
      "CSS",
      "Javscript",
      "Bootstrap",
      "AJAX",
    ],
    role: "Full Stack Developer",
    link: "https://groc-w8tc.onrender.com/home",
    code: "",
    demo: "",
    image: crefin,
  },

  {
    id: 3,
    name: "Simon Game",
    description:
      "Simon's Game is a classic memory game where four colored buttons emit unique sounds. Using the Math.random function, the buttons light up in a random sequence, challenging players to remember and replicate it by pressing the correct buttons. jQuery streamlines the selection and manipulation of HTML elements, resulting in concise and readable code for implementing the Simon's Game functionality.",
    tools: ["HTML", "CSS", "Jquery"],
    link: "https://arijit203.github.io/Simon-Game/",
    code: "",
    role: "Frontend Developer",
    demo: "",
    image: realEstate,
  },
  // {
  //     id: 4,
  //     name: 'Newsroom Management',
  //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
  //     code: '',
  //     demo: '',
  //     image: ayla,
  //     role: 'Full Stack Developer',
  // }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
