export const projects = [
  {
    no: "#1",
    name: "PIPP KKP - Single Sign-On",
    year: "2025",
    id: "pipp-sso",
    slug: "pipp-sso",
    description:
      "A unified authentication system designed for the Ministry of Marine Affairs and Fisheries (KKP) to streamline access across multiple applications. This Single Sign-On (SSO) solution improves user experience by allowing seamless navigation between various modules with a single set of credentials.",
    thumbnail: "/img/contents/sso/sso-thumbnail.png",
    details: {
      timeline: "November 2025 - January 2026",
      responsibility: ["Full Stack Developer", "UI/UX Designer"],
      tools: ["Figma", "Visual Studio Code", "Trae", "Claude"],
      context: "Professional Project (KKP)",
    },
    problemOverview: [
      {
        type: "text",
        content:
          "The digital ecosystem of the Ministry of Marine Affairs and Fisheries (KKP), specifically under the Directorate General of Capture Fisheries, had grown organically into a fragmented landscape. Key platforms like PIPP (Pusat Informasi Pelabuhan Perikanan), Teman SPB (Surat Persetujuan Berlayar), and SHTI (Sertifikat Hasil Tangkap Ikan) operated in silos, each developed by different vendors with distinct authentication logic. This 'Siloed Architecture' meant they functioned as isolated islands rather than a cohesive system.",
      },
      {
        type: "image",
        src: "/img/contents/sso/context.png",
        alt: "The Siloed Architecture Diagram",
      },
      {
        type: "text",
        content:
          "This technical fragmentation created a severe operational bottleneck. Field officers in fishery ports work under high pressure to process ship licensing and reporting. Having to manage multiple sets of credentials and repeatedly log in when switching between applications wasn't just an annoyance—it was slowing down critical administrative processes and causing significant 'Context Switching' fatigue.\n\nFurthermore, the lack of a unified system led to high cognitive load and security risks. Users forced to remember multiple complex passwords often resorted to insecure habits like writing them down. The absence of centralized session management also meant a user could be logged out of one app while still active in another, creating potential security gaps and inconsistencies.",
      },
    ],
    problemOverviewTitle: "The Context",
    solutionTitle: "The Approach",
    solution: [
      {
        title: "Centralized Identity Management",
        description:
          "Developed a robust identity provider that serves as the single source of truth for user authentication, eliminating the need for separate credentials across PIPP, Teman SPB, and SHTI.",
      },
      {
        title: "Identity Provider (IdP) Architecture",
        description:
          "Adopted a standard IdP model to decouple authentication from application logic, ensuring security best practices and simplifying the maintenance of user identities across the ecosystem.",
      },
      {
        title: "Seamless Cross-Platform Navigation",
        description:
          "Implemented a secure session bridging mechanism that allows users to switch between applications without re-authenticating, significantly reducing workflow friction and login fatigue.",
      },
    ],
    userFlowTitle: "The User Flow",
    userFlow: [
      {
        type: "image",
        src: "/img/contents/sso/flow.png",
        alt: "User Flow Diagram",
      },
    ],
  },
  {
    no: "#2",
    name: "PIPP KKP - Data Entry",
    year: "2025",
    id: "pipp-kkp",
    slug: "pipp-kkp",
    description:
      "A centralized data entry and information management system developed for the Ministry of Marine Affairs and Fisheries (KKP). This platform serves as the core of the Fishery Port Information System (PIPP), facilitating the collection, management, and reporting of fishery port data across Indonesia.",
    thumbnail: "/img/contents/dataentry/pipp-thumbnail.png",
    details: {
      timeline: "November 2025 - January 2026",
      responsibility: ["Full Stack Developer", "UI/UX Designer"],
      tools: ["Figma", "Visual Studio Code", "Trae", "Claude"],
      context: "Professional Project (KKP)",
    },
    problemOverview: [
      {
        question: "What was the main challenge?",
        answer:
          "The existing system featured an outdated and visually cluttered interface that was not user-friendly. This legacy design complicated data entry tasks, making them cumbersome and prone to errors.",
      },
      {
        question: "How did it impact the workflow?",
        answer:
          "The lack of modern navigation standards resulted in a steep learning curve for new users and significantly slowed down daily operations. Officers spent more time figuring out the interface than actually verifying data.",
      },
      {
        question: "What were the visual pain points?",
        answer:
          "Inconsistent layouts, small typography, and poor contrast contributed to overall usability issues. The interface lacked clear hierarchy, causing eye fatigue and making critical information hard to find.\n\nThe image below shows the legacy interface design.",
      },
    ],
    problemImage: "/img/contents/dataentry/problem.png",
    solution: [
      {
        title: "Unified Design System",
        description:
          "Established a consistent visual language with standardized typography, color palette, and component library to eliminate visual clutter and ensure coherence across all modules.",
      },
      {
        title: "Intuitive Information Architecture",
        description:
          "Restructured the navigation and form layouts to align with user workflows rather than database structures, making critical functions instantly accessible.",
      },
      {
        title: "Clear Visual Feedback",
        description:
          "Designed distinct visual states for errors, success, and loading to provide immediate, unambiguous system status updates without needing page reloads.",
      },
      {
        title: "Readability & Accessibility",
        description:
          "Increased contrast ratios and optimized typographic hierarchy to reduce eye strain during long data entry sessions, focusing purely on the visual experience.",
      },
    ],
    design: [
      {
        image: "/img/contents/dataentry/navigation-bar.png",
        title: "Navigation",
      },
      {
        image: "/img/contents/dataentry/barchart.png",
        title: "Bar Chart",
      },
      {
        image: "/img/contents/dataentry/forminput.png",
        title: "Form Input",
      },
      {
        image: "/img/contents/dataentry/table.png",
        title: "Data Management",
      },
      {
        image: "/img/contents/dataentry/button.png",
        title: "Action Button",
      },
      {
        image: "/img/contents/dataentry/pagination.png",
        title: "Pagination",
      },
      {
        image: "/img/contents/dataentry/filter.png",
        title: "Port & Period Filter",
      },
    ],
    designTitle: "The (Re)Design",
    conclusion:
      "The redesign of the PIPP KKP Data Entry system represents a significant step towards modernizing government digital infrastructure. By prioritizing clarity, efficiency, and usability, we've transformed a complex, error-prone process into a streamlined experience that empowers officers to work more effectively.\n\nWhile the design phase has been fully completed and validated, the technical development is currently ongoing as of January 2025. The team and I are actively implementing these new interface standards and building out the core features to ensure the final product matches the design vision perfectly.",
    documentationImage: "/img/contents/dataentry/present.jpeg",
    documentationImageCaption:
      "The team and I presenting the progress to the KKP team.",
  },
  // {
  //   name: "adhimix yuk absen!",
  //   year: "2024",
  //   id: "adhimix-3",
  //   slug: "adhimix-3",
  //   description: "Project description for Adhimix Yuk Absen 3",
  // },
  {
    no: "#4",
    name: "Adhimix Yuk Absen!",
    year: "2024",
    id: "adhimix",
    slug: "adhimix",
    description:
      "A mobile application designed to streamline employee attendance tracking, featuring real-time location verification, leave management, and shift scheduling.",
    thumbnail: "/img/contents/adhimix/thumbnail.png",
    details: {
      timeline: "March 2024 - June 2024",
      responsibility: ["UX Research", "UI Design", "Sketching", "Prototyping"],
      tools: ["Figma"],
      context: "Professional Project (Intern at Adhimix)",
    },
    problemOverview:
      "The previous application was overly complex and difficult to navigate, causing frustration for employees trying to perform simple tasks. This poor usability led to frequent errors and low adoption rates. The challenge was to simplify the experience, creating a clean, intuitive interface that requires zero learning curve.",
    solution:
      "We redesigned the app with a 'less is more' approach, stripping away unnecessary features and focusing on core tasks like clocking in and requesting leave. The new interface uses large, clear action buttons and a simplified navigation structure. We also introduced visual cues for status updates, ensuring users always know their attendance state at a glance.",
    wireframe: "/img/contents/adhimix/wireframe.png",
    design: [
      {
        image: "/img/contents/adhimix/button.png",
        title: "Clock In / Clock Out",
      },
      {
        image: "/img/contents/adhimix/detail.png",
        title: "Attendance Detail",
      },
      {
        image: "/img/contents/adhimix/riwayat.png",
        title: "Attendance History",
      },
    ],
    resultEmbed:
      "https://embed.figma.com/proto/1a78H9i2j7kA3Ep8MxleTw/adhimix--nalendra-?page-id=226%3A2&node-id=272-2465&viewport=866%2C3135%2C0.3&scaling=scale-down&content-scaling=fixed&starting-point-node-id=277%3A1026&embed-host=share",
  },
];
