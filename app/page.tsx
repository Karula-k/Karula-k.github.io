"use client";
import { Box, CardMedia, Grid2, Link, Typography } from "@mui/material";
import { PortfolioCardProps } from "./type/portofolioCardProps";
import ArchlyricCard from "./components/ArchlyricCard";
import BasicCard from "./components/BasicCard";
import { SkillsCard } from "./type/skiillsCards";
const data: PortfolioCardProps[] = [
  {
    projectName: "Solusi Tukang",
    projectDate: "December 2024",
    projectDescription:
      "An app to help people in Malang easily find home repair services or construction contractors & worker.",
    image: "images/solusi-tukang.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=com.solusiciptamedia.solusitukang",
    isNDA: true,
    type: "Flutter  ",
  },
  {
    projectName: "Solusi Tukang Mitra",
    projectDate: "December 2024",
    projectDescription:
      "An app that helps workers in Malang connect with customers in need of home repairs.",
    image: "/images/logo_mitra.png",
    techStack: ["Flutter", "GETX", "DIO"],
    githubLink: null,
    liveDemoLink:
      "https://play.google.com/store/apps/details?id=com.solusiciptamedia.mitrasolusitukang",
    isNDA: true,
    type: "Flutter  ",
  },
  {
    projectName: "HRIS",
    projectDate: "February 2025",
    projectDescription:
      "Streamline employee management and HR-related processes. Developed user interfaces and integrated backend APIs to support digitalization of HR workflow.",
    image: "",
    techStack: ["React", "Next.js", "TypeScript", "REST API", "PRISMA"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Web",
  },
  {
    projectName: "Annual Strategy Planning Application",
    projectDate: "August 2025",
    projectDescription:
      "An internal application developed to streamline the annual strategy planning process, replacing a previously manual workflow that took approximately three months with a more efficient process completed in one week. Focused on implementing application features, integrating backend APIs, and improving the overall planning workflow.",
    image: "",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "REST API",
      "PRISMA",
      "Python",
      "XLSX",
    ],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Web",
  },

  {
    projectName: "Schedule Module",
    projectDate: "August 2026",
    projectDescription:
      "An internal scheduling system to manage complex scheduling workflows and concurrent user operations. Focused on backend development, implementing concurrency control and idempotency mechanisms to prevent scheduling conflicts, maintain data consistency, and ensure reliable request processing.",
    image: "",
    techStack: [
      "TypeScript",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "RabbitMQ",
      "Microservices",
      "DataLoader",
    ],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Backend",
  },
];


const skills: SkillsCard[] = [
  // Backend
  {
    altName: "TypeScript",
    image: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    altName: "Node.js",
    image: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
  {
    altName: "NestJS",
    image: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
  },
  {
    altName: "PostgreSQL",
    image: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    altName: "Prisma",
    image: "icon/prisma.png",
  },
  {
    altName: "Redis",
    image: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
  },
  {
    altName: "GraphQL",
    image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  },
  {
    altName: "RabbitMQ",
    image: "icon/rabbitmq.svg",
  },

  // Frontend
  {
    altName: "React",
    image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    altName: "Next.js",
    image: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
  },

  // Mobile
  {
    altName: "Flutter",
    image: "icon/icon_flutter.png",
  },
  {
    altName: "Dart",
    image: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },

  // Infrastructure & Tools
  {
    altName: "AWS",
    image: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg",
  },
  {
    altName: "Docker",
    image: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
  },
  {
    altName: "GitHub Actions",
    image: "icon/gitHub-actions.svg",
  },
  {
    altName: "Python",
    image: "icon/python.png",
  },
  {
    altName: "Rust",
    image: "icon/rust.png",
  },
];


export default function Home() {
  return (
    <>
      <Box display="flex" height="100vh">
        <Box
          width="30%"
          position="fixed"
          display="flex"
          className="mx-12"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Box alignItems="center" justifyContent="center">
            <Typography variant="h6">FIKRI IRSYAD! ✌️</Typography>
            <Typography variant="body2" color="error">
              FULLSTACK DEVELOPER
            </Typography>

            <Typography variant="h6">Social Links</Typography>
            <Grid2 spacing={2} container className="my-4">
              <Grid2>
                <Link
                  href="mailto:dfikriirsyad@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/mail-inbox-app.png"
                    alt="Email"
                  />
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  href="https://github.com/karula-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/github-mark.png"
                    alt="Github"
                  />
                </Link>
              </Grid2>
              <Grid2>
                <Link
                  href="https://www.linkedin.com/in/dzul-fikri-irsyad-28b2911b2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image="icon/LI-In-Bug.png"
                    alt="linked in"
                  />
                </Link>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
        <Box width="70%" sx={{ marginLeft: "30%" }}>
          <div className="px-12">
            <Typography
              fontWeight={"bold"}
              paddingBottom={2}
              variant="h6"
              color="success"
            >
              INTRODUCTION
            </Typography>


            <Typography>
              Computer Science graduate with{" "}
              <span style={{ color: "green" }}>3 years of professional software development experience</span>,
              specializing in Backend Development. Experienced in building and
              optimizing backend systems, designing scalable application
              architectures, and improving database performance. Hands-on
              experience with technologies including{" "}
              <span style={{ color: "green" }}>TypeScript, NestJS, Prisma, SQL, React, and Next.js</span>,
              with <span style={{ color: "green" }}>Go</span> as a hobby.
              Demonstrated ability to optimize system performance, reduce API
              response times, and improve infrastructure efficiency.
              Passionate about backend engineering and system design.
            </Typography>
          </div>

          <Box>
            <Typography
              fontWeight={"bold"}
              paddingY={2}
              variant="h6"
              color="info"
            >
              EXPERIENCE
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={2}
              flexWrap={"wrap"}
            >
              <BasicCard
                title={"Solusi Cipta Media (Internship)"}
                description={
                  "Flutter Developer responsible for developing mobile applications while building a strong foundation in Flutter and Dart. Focused on implementing user-centric interfaces, improving user experience, and understanding application architecture. \nDeveloped practical knowledge of object-oriented programming concepts, including polymorphism, with an emphasis on creating modular, reusable, and maintainable components."
                }
                subtitle={"March 2024 -  June 2024"}
                listString={["icon/icon_flutter.png", "icon/getx.png"]}
              />
              <BasicCard
                title={"Solusi Cipta Media"}
                description={
                  "Transitioned into full-stack development, working primarily with Next.js, React, and TypeScript to build web applications and deliver solutions based on business and user requirements.\nFocused on solving problems through practical technology choices, combining different tools and technologies to develop cost-effective solutions and reduce dependency on expensive enterprise platforms.                Also gained hands-on experience with server management and deployment processes, working with cPanel, managing domains and databases, troubleshooting server-related issues, and maintaining CI/CD pipelines using GitHub Actions.\nExpanded technical experience across frontend development, backend integration, database management, and basic infrastructure operations."
                }
                subtitle={"July 2024 -  December 2025"}
                listString={[
                  "icon/typescript.png",
                  "icon/React-icon.svg.png",
                  "icon/prisma.png",
                  "icon/termius-logo.png",
                ]}
              />
              <BasicCard
                title={"RATA.ID"}
                description={
                  "Worked on backend-focused projects involving complex business requirements and system workflows. Responsible for analyzing user and business requirements, translating them into backend solutions, and developing scalable and maintainable services.\nFocused on backend architecture, database design, system optimization, and improving application performance while handling more complex business logic and data interactions. \nGained deeper hands-on experience in designing and maintaining backend systems using modern TypeScript-based technologies."
                }
                subtitle={"December 2025 -  Now"}
                listString={["icon/typescript.png", "icon/prisma.png","https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg","https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"]}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              fontWeight={"bold"}
              paddingY={2}
              variant="h6"
              color="success"
            >
              INTEREST
            </Typography>
            <Box display={"flex"} flexDirection={"row"} gap={2}>
              {skills &&
                skills.map((e, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    sx={{ height: "48px", width: "48px", objectFit: "contain" }}
                    image={e.image}
                    alt={e.altName}
                  />
                ))}
            </Box>
          </Box>
          <Box paddingTop={4}>
            <Typography fontWeight={"bold"} variant="h6" color="info">
              PROJECTS
            </Typography>
          </Box>
          <Grid2 container spacing={4}>
            {data.length === 0 ? (
              <Typography>No projects available</Typography>
            ) : (
              data.map((project, index) => (
                <Grid2 key={index}>
                  <ArchlyricCard
                    projectName={project.projectName}
                    projectDate={project.projectDate}
                    projectDescription={project.projectDescription}
                    image={project.image}
                    techStack={project.techStack}
                    githubLink={project.githubLink}
                    liveDemoLink={project.liveDemoLink}
                    type={project.type}
                    isNDA={project.isNDA}
                  />
                </Grid2>
              ))
            )}
          </Grid2>
        </Box>
      </Box>
    </>
  );
}
