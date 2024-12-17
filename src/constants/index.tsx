import StreamLabsLogo from "../assets/streamlabs-logo.png";
import BroadcastlyLogo from "../assets/broadcastly-logo.png";
import LiveStreamerLogo from "../assets/livestreamer-logo.png";
import CloudCastLogo from "../assets/cloudcast-logo.png";

import streamImage from "../assets/web.jpg";
import chart from "../assets/web3.png";
import optimize from "../assets/seo.jpg";
import audienceEngagementImage from "../assets/app.jpg";
// import monetizeImage from "../assets/monetize.jpeg";
// import automationImage from "../assets/automation.jpeg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "react-icons/ri";

export const HERO_CONTENT = {
  badgeText: "🚀 Your Software Development Agency!",
  mainHeading: "Empowering Businesses, \n One Solution at a Time",
  subHeading:
    "At Techloop Ltd., we build intuitive apps, websites, and enterprise platforms that empower businesses to reach their full potential.",
  callToAction: {
    primary: "Get a Quote",
    secondary: "Start Project",
  },
  trustedByText: "Trusted by Leading Streaming Brands & Creators",
};

export const BRAND_LOGOS = [
  { src: StreamLabsLogo, alt: "StreamLabs" },
  { src: BroadcastlyLogo, alt: "Broadcastly" },
  { src: LiveStreamerLogo, alt: "LiveStreamer" },
  { src: CloudCastLogo, alt: "CloudCast" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "What We Do",
  sectionDescription:
    "Stream like a pro with our 6-step process. From setup to performance tracking, we've got everything you need to elevate your streaming experience.",
  steps: [
    {
      title: "Web Development",
      description:
        "We build custom full-stack web applications, combining cutting-edge technologies to create seamless user experiences tailored to your business needs.",
      imageSrc: streamImage,
      imageAlt: "Web Development",
    },
    {
      title: " Apps Development ",
      description:
        "We specialize in developing cross-platform applications tailored to the specific needs of our clients, compatible with both Android and iOS devices.",
      imageSrc: audienceEngagementImage,
      imageAlt: "App Development",
      users: [user1, user2, user3, user5],
    },
    {
      title: " Website Maintenance  ",
      description:
        "We provide businesses with continuous website maintenance and support, offering essential services such as regular updates, security patches, and troubleshooting.",
      imageSrc: chart,
      imageAlt: "Website Maintenance ",
    },
    {
      title: "Search Engine Optimization",
      description:
        "We improve your business’s search engine rankings, ensuring your target audience can easily find you through effective SEO strategies.",
      imageSrc: optimize,
      imageAlt: "Search Engine Optimization",
    },
    // {
    //   title: "Monetize Your Streams",
    //   description:
    //     "Unlock revenue streams by adding subscriptions, donations, and sponsorships to your stream.",
    //   imageSrc: monetizeImage,
    //   imageAlt: "Monetization",
    // },
    // {
    //   title: "Automate Your Workflows",
    //   description:
    //     "Use advanced automation tools to manage your schedule, alerts, and promotions effortlessly.",
    //   imageSrc: automationImage,
    //   imageAlt: "Workflow Automation",
    // },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Our Process",
  sectionDescription:
    "Everything you need to enhance your streaming experience, all in one place.",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line />,
      title: "Real-Time Stream Analytics",
      description:
        "Track your audience engagement, viewer count, and performance in real-time.",
    },
    {
      id: 2,
      icon: <RiSettings2Line />,
      title: "Automated Stream Management",
      description:
        "Set up automated alerts, stream schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine />,
      title: "Audience Engagement Tools",
      description:
        "Interact with your audience through custom alerts, chat integrations, and giveaways.",
    },
    {
      id: 4,
      icon: <RiTwitchLine />,
      title: "Twitch Integration",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine />,
      title: "Schedule Streams",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const OUR_WORK = {
  sectionTitle: "Crafted to Impress",
  sectionDescription:
    "A showcase of innovative solutions and standout projects that turn ideas into impactful digital experiences.",

}
export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "Streamerzz offers flexible pricing plans to fit every streamer’s needs, from beginner to pro.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};

export const TESTIMONIALS_CONTENT = {
  sectionTitle: "What Our Clients Say",
  sectionDescription:
    "Hear from some of the top streamers who use Streamerzz to engage with their audience and grow their channels.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Content Creator",
      review:
        "Streamerzz has revolutionized the way we manage our content subscriptions. The intuitive dashboard and real-time analytics have made it easier to track our progress and optimize our offerings. Highly recommended!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Marketing Specialist",
      review:
        "The team at Streamerzz has been fantastic! Their support is responsive and knowledgeable. The platform itself is versatile and has helped us streamline our subscription management, saving us time and increasing efficiency.",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Product Manager",
      review:
        "Streamerzz's automated billing and comprehensive analytics have been game-changers for our product team. We can now easily track user engagement and make data-driven decisions to enhance our service offerings.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Customer Success Manager",
      review:
        "Using Streamerzz, we’ve been able to increase our customer retention rates. The platform's user-friendly interface and powerful features have provided our customers with a seamless experience, leading to higher satisfaction.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "UX Designer",
      review:
        "Streamerzz's flexibility and ease of use have made it a key tool in our design process. We can quickly adjust our subscription plans and monitor the impact on user engagement, allowing for a more responsive approach.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Data Analyst",
      review:
        "Streamerzz provides us with detailed insights into our subscription metrics. The advanced reporting tools have enabled us to identify trends and make informed decisions to optimize our growth strategy.",
      image: user6,
    },
  ],
};

export const FOOTER_CONTENT = {
  sections: [
    {
      title: "EXPLORE",
      links: [
        { text: "About", href: "#services" },
        { text: "Process", href: "#process" },
        { text: "Projects", href: "#projects" },
        { text: "Start Project", href: "/contact" }, // Navigates to contact page
      ],
    },
    {
      title: "CONNECT WITH US",
      links: [
        { text: "LinkedIn", href: "https://www.linkedin.com/company/techlooop" },
        { text: "Instagram", href: "https://www.instagram.com/techloop_ltd/" },
        { text: "X(Twitter)", href: "#" },
        { text: "Tiktok", href: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Terms and Conditions", href: "#terms" },
        { text: "Privacy Policy", href: "#privacy-policy" },
      ],
    },
  ],
  platformsText: "Reach Us Via: LinkedIn | Instagram | X(Twitter) | TikTok",
  copyrightText: "© 2024 Techloop Technologies Ltd. All rights reserved.",
};

