// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "My research focuses on the chemodynamical evolution of the Local Group, aiming to understand its evolutionary history.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks-and-presentations",
          title: "Talks and Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-poster-at-the-98th-korea-astronomical-society-conference-in-seoul-south-korea",
          title: 'Poster at the 98th Korea Astronomical Society Conference in Seoul, South Korea',
          description: "",
          section: "News",},{id: "news-poster-at-the-30th-international-astronomical-union-general-assembly-in-vienna-austria",
          title: 'Poster at the 30th International Astronomical Union General Assembly in Vienna, Austria',
          description: "",
          section: "News",},{id: "news-virtual-poster-at-the-240th-american-astronomical-society-meeting-ca-usa",
          title: 'Virtual poster at the 240th American Astronomical Society meeting, CA, USA',
          description: "",
          section: "News",},{id: "news-poster-at-the-cenam-frontiers-in-nuclear-astrophysics-meeting-in-mi-usa",
          title: 'Poster at the CeNAM Frontiers in Nuclear Astrophysics Meeting in MI, USA',
          description: "",
          section: "News",},{id: "news-astrophysics-seminar-half-talk-at-the-nd-in-in-usa",
          title: 'Astrophysics seminar half talk at the ND in IN, USA',
          description: "",
          section: "News",},{id: "news-contributed-talk-at-the-cenam-frontiers-in-nuclear-astrophysics-meeting-in-in-usa",
          title: 'Contributed talk at the CeNAM Frontiers in Nuclear Astrophysics Meeting in IN, USA...',
          description: "",
          section: "News",},{id: "news-poster-at-the-astrophysical-origins-of-carbon-workshop-tokyo-japan",
          title: 'Poster at the Astrophysical Origins of Carbon Workshop, Tokyo, Japan',
          description: "",
          section: "News",},{id: "news-astrophysics-seminar-half-talk-at-the-chungnam-national-university-in-daejeon-south-korea",
          title: 'Astrophysics seminar half talk at the Chungnam National University in Daejeon, South Korea...',
          description: "",
          section: "News",},{id: "news-virtual-poster-at-the-245th-american-astronomical-society-meeting-md-usa",
          title: 'Virtual poster at the 245th American Astronomical Society meeting, MD, USA',
          description: "",
          section: "News",},{id: "news-poster-at-the-403th-international-astronomical-union-symposium-in-córdoba-spain",
          title: 'Poster at the 403th International Astronomical Union Symposium in Córdoba, Spain',
          description: "",
          section: "News",},{id: "news-talk-at-the-yonsei-university-astronomy-dept-in-seoul-south-korea",
          title: 'Talk at the Yonsei University Astronomy Dept. in Seoul, South Korea',
          description: "",
          section: "News",},{id: "news-talk-at-the-seoul-national-university-astronomy-dept-meeting-seoul-south-korea",
          title: 'Talk at the Seoul National University Astronomy Dept. Meeting, Seoul, South Korea',
          description: "",
          section: "News",},{id: "news-talk-at-the-korea-astronomy-and-space-science-institute-large-telescope-center-group-meeting-daejeon-south-korea",
          title: 'Talk at the Korea Astronomy and Space Science Institute, Large Telescope Center Group...',
          description: "",
          section: "News",},{id: "news-dissertation-talk-at-the-247th-aas-meeting-az-usa",
          title: 'Dissertation talk at the 247th AAS Meeting, AZ, USA',
          description: "",
          section: "News",},{id: "projects-nearby-galaxies",
          title: 'Nearby Galaxies',
          description: "dwarf galaxies around us and the neighboring Andromeda galaxy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_dw_m31/";
            },},{id: "projects-milky-way",
          title: 'Milky Way',
          description: "right where we live",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects_mw/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%68%6F%6E%67%35@%6E%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jiehyeH", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jihye-hong-98047a156", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2453-0853", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
