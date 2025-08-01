export const bgColor: Record<string, string> = {
    "1": "text-blue-500",
    "2": "text-pink-500",
    "3": "text-green-500",
    "4": "text-yellow-500",
    "5": "text-red-500",
    "6": "text-sky-500",
};

interface Projects {
    projectName: string;
    websiteUrl: string;
    description: string;
    skills: string[];
}

const projects: Projects[] = [
    {
        projectName: "DevLink",
        websiteUrl: "https://dev-link-frontend.vercel.app",
        description:
            "Businesses and individuals can connect through this platform to conduct business. Clients post a description of their job and a price range they are willing to pay for a freelancer to complete it. The client may invite specific freelancers to apply for their jobs, or post the job for any freelancer who",
        skills: [
            "React",
            "TypeScript",
            "Node.",
            "MongoDB",
            "Docker",
            "Stripe",
            "AWS",
        ],
    },
    {
        projectName: "OneCart",
        websiteUrl: "https://onecart.onrender.com/login",
        description:
            "Node.js Ecommerce Web application for luxuary products like Cloths, Watcher, Footwares, Accessories, and many more",
        skills: [
            "Node.js",
            "JavaScript",
            "AWS",
            "Express.js",
            "EJS",
            "Razorpay",
            "MongoDB",
        ],
    },
    {
        projectName: "NextEvent",
        websiteUrl: "https://nextevent-next-js.onrender.com",
        description:
            " NextEvent is a modern event management platform where organizers can create and manage events, and guests can browse, book, and cancel events. The app supports both free and paid events (via Stripe), filtered event browsing, and revenue sharing between guest and admin on cancellations",
        skills: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "React-Query",
            "Formik",
            "Mongodb",
        ],
    },
    {
        projectName: "Clever-AI",
        websiteUrl: "https://clever-ai-16m6.onrender.com",
        description:
            "Generative Ai Chatbot to query any kind of task and get really quick response. It is powered with powerfull chunks like react, redux, acceternity, framer motion, groq and continued.",
        skills: [
            "React",
            "TypeScript",
            "Node.js",
            "Aceternity",
            "Framer Motion",
            "Firebase",
        ],
    },

    {
        projectName: "Readora",
        websiteUrl: "https://readora-puce.vercel.app/login",
        description:
            "An Article feed application built using React.js, Node.js with Express.js , Typescript and Tailwind css",
        skills: [
            "React.js",
            "Node.js",
            "Express.js",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
        ],
    },
    {
        projectName: "Traqfoot",
        websiteUrl: "https://traqfoot.vercel.app/login",
        description:
            "Traqfoot is a footfall monitoring application built with the MERN stack. This repository contains the frontend built using React.js with Vite, enabling infrastructure admins to monitor real-time sensor data, view analytics, and manage device status.",
        skills: ["React.js", "Typescript", "Docker", "Fromik", "Tailwind CSS"],
    },
    {
        projectName: "Netfilx-clone",
        websiteUrl: "https://netflix-clone-react-inky.vercel.app/",
        description:
            "A React frontend based clone application of the biggest streaming pltform in the world with latest movies and tv shows updates without any interfering",
        skills: ["React.js", "Firebase", "TMDB", "TypeScript", "Tailwind CSS"],
    },
    {
        projectName: "InvoSync",
        websiteUrl:
            "https://github.com/syam-ts/InvoSync__Invoice-Management-System",
        description:
            "InvoSync is a modern invoice management system built for freelancers and small businesses. This repository contains the frontend built using React.js with Vite, allowing users to manage clients, create and update invoices, view profiles, and download styled PDFs.",
        skills: [
            "React.js",
            "Typescript",
            "Docker",
            "Fromik",
            "Sonner",
            "Tailwind CSS",
        ],
    },
    {
        projectName: "JokeClub2.0",
        websiteUrl: "https://jokeClub.vercel.com",
        description:
            "Joke finding application with the ease of seraching instend responsing with random to jokes in the world using powerful api provider with interactive UI",
        skills: ["EJS", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    },
];

export default projects;
