import StreamLabsLogo from "../assets/iog-logo.png";
import BroadcastlyLogo from "../assets/cms.png";
import LiveStreamerLogo from "../assets/acct-logooo.png";
import CloudCastLogo from "../assets/acctpanel.png";
import AmazonUnitedLogo from "../assets/amazon-united.png";

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
  trustedByText: "Trusted by Industry Leaders & Innovators",
};

export const BRAND_LOGOS = [
  { src: StreamLabsLogo, alt: "IOG" },
  { src: BroadcastlyLogo, alt: "Clean My Space" },
  { src: LiveStreamerLogo, alt: "Acctbazaar" },
  { src: CloudCastLogo, alt: "Acctpanel" },
  { src: AmazonUnitedLogo, alt: "Amazon United" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "What We Do",
  sectionDescription:
    "From web and app development to maintenance and SEO, we deliver digital solutions that drive growth and efficiency.",
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
      name: "Dhruv",
      title: "Web Design Agency",
      review:
        "Techloop brought our ideas to life with precision and innovation. Their team was responsive, professional, and delivered a website that not only looked amazing but also performed seamlessly. We’re thrilled with the results!",
      image: user1,
    },
    {
      name: "Acctbazaar",
      title: "CEO",
      review:
        "Choosing Techloop was the best decision we made for our business. They created a website that perfectly captured our brand and provided valuable input that enhanced the final product. Their dedication to quality is truly impressive.",
      image: user2,
    },
    {
      name: "Volume Technologies",
      title: "CEO",
      review:
        "Techloop transformed our outdated website into a modern, sleek, and efficient platform. Their commitment to user experience and performance optimization was evident throughout the project. We highly recommend them!",
      image: user3,
    },
    {
      name: "Acctpanel",
      title: "CEO",
      review:
        "Working with Techloop was an absolute game-changer for our online presence. They delivered a site that is fast, visually stunning, and easy to navigate. Their professionalism and innovative approach set them apart from the rest",
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
        { text: "X(Twitter)", href: "https://chatgpt.com/share/6766db84-4f60-8013-be21-7c369cce6dcd" },
        { text: "Tiktok", href: "#" },
      ],
    },
    {
      title: "LEARN & EXPLORE",
      links: [
        { text: "Terms and Conditions", href: "/terms-and-conditions" },
        { text: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  platformsText: "Reach Us Via: LinkedIn | Instagram | X(Twitter) | TikTok",
  copyrightText: "© 2025 Techloop Technologies Ltd. All rights reserved.",
};

