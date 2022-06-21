export default {
  author: "Micah Mones",
  hero: {
    subtitle: "Software developer.",
    description: "Building scalable systems, fully featured products day by day.",
    cta: "Browse Projects",
  },
  products: {
    featured: [
      {
        name: "Smart City Media",
        medium: "React · Node.js · PostgreSQL",
        summary: "Location based stock aerial footage.",
        copy: [
          "Find hundreds of aerial drone footage with the click of a button."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://www.smartcitymedia.com/stock/browse"
          }
        },
        images: [
          "/scm/0.png",
        ]
      },
      {
        name: "CovidStats",
        medium: "React",
        summary: "Novel coronavirus stat tracking.",
        copy: [
          "Keep up with the novel coronavirus in an easy-to-digest manner."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Learn more",
            url: "https://covid-stats-ca.netlify.app/#/"
          }
        },
        images: [
          "/covidstats/0.png",
        ]
      },
      // {
      //   name: "WaShare",
      //   medium: "React Native · PostgreSQL",
      //   summary: "Your laundry, made simple.",
      //   copy: [
      //     "Simplify the process of booking laundry machines with a streamlined mobile app.",
      //   ],
      //   links: {
      //     color: "#363636",
      //     primary: {
      //       name: "Github",
      //       url: "https://github.com/mattnazari/WaShare"
      //     }
      //   },
      //   images: [
      //     "/washare/2.jpg",
      //     "/washare/1.jpg",
      //     "/washare/0.jpg",
      //   ]
      // }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "WaShare",
        description: "Simplify the process of booking laundry machines with a mobile app.",
        link: {
          name: "Github",
          url: "https://github.com/mattnazari/WaShare"
        }
      },
      {
        name: "QuikPix",
        description: "Streamlined image resizing and conversion.",
        link: {
          name: "Github",
          url: "https://github.com/mattnazari/quikpix"
        }
      }
    ]
  },
  logoSection: {
    title: "",
    // Only supports 0-3 at the moment
    logos: [
      // {
      //   src: "/logos/unimelb.svg",
      //   url: "https://unimelb.edu.au/",
      //   alt: "Unimelb"
      // },
      // {
      //   src: "/logos/zendesk.svg",
      //   url: "https://www.zendesk.com/",
      //   alt: "Zendesk"
      // },
      // {
      //   src: "/logos/cashapp.svg",
      //   url: "https://cash.app/",
      //   alt: "Cash App"
      // }
  ]
  },
  footer: {
    tagline: "Micah Mones — Vancouver, Canada",
    links: [
      {
        name: "Github",
        url: "https://github.com/micahmones",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/micahmones/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:micahmones@gmail.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}