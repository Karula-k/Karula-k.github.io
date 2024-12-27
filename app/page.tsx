"use client";
import { Box, CardMedia, Grid2, Link, Typography } from "@mui/material";
import { PortfolioCardProps } from "./type/portofolioCardProps";
import ArchlyricCard from "./components/ArchlyricCard";
import BasicCard from "./components/BasicCard";
import { SkillsCard } from "./type/skiillsCards";
const data: PortfolioCardProps[] = [
  {
    projectName: "Nurse APP",
    projectDate: "December 2024",
    projectDescription:
      "This app helps nurses efficiently digitize the initial patient assessment, ensuring accuracy and streamlined care from the start.",
    image: "/images/medical-team.png",
    techStack: ["Flutter"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Flutter  ",
  },
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
    projectName: "Intima",
    projectDate: "December 2024",
    projectDescription:
      "An app designed to help track employee of PT. Maelo Inti Trans delivery routes and movements, generate detailed reports, and manage item requests.",
    image: "/images/logo_intima.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Flutter  ",
  },
  {
    projectName: "EMS",
    projectDate: "December 2024",
    projectDescription:
      "Application for helping people around Malang find home repair services.",
    image: "/images/logo_ems.png",
    techStack: ["Flutter", "GETX", "HTTP"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Flutter  ",
  },
  {
    projectName: "Solusi Pos",
    projectDate: "December 2024",
    projectDescription:
      "Application for helping people around Malang find home repair services.",
    image: "/images/solusi_pos.png",
    techStack: ["Flutter", "Riverpod"],
    githubLink: null,
    liveDemoLink: null,
    isNDA: true,
    type: "Flutter  ",
  },
];

const skills: SkillsCard[] = [
  {
    altName: "Flutter",
    image: "icon/icon_flutter.png",
  },
  {
    altName: "Typescript",
    image: "icon/typescript.png",
  },
  {
    altName: "React",
    image: "icon/React-icon.svg.png",
  },
  {
    altName: "Prisma",
    image: "icon/prisma.png",
  },
  {
    altName: "Rust",
    image: "icon/rust.png",
  },
  {
    altName: "Python",
    image: "icon/python.png",
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
              FRONT-END DEVELOPER
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
              A graduate in <span style={{ color: "green" }}>Informatics</span>{" "}
              with <span style={{ color: "green" }}>one year</span> of
              experience as a Frontend Developer using
              <span style={{ color: "green" }}> Dart</span> and
              <span style={{ color: "green" }}> Flutter</span>
              ,skilled in developing efficient and user-friendly mobile
              applications. Focused on cross-team collaboration with backend and
              UI/UX teams to create responsive UI. Experienced in
              <span style={{ color: "red" }}> Firebase </span>
              notifications, uploading signed images to{" "}
              <span style={{ color: "red" }}>Google Cloud</span>, and
              integrating
              <span style={{ color: "red" }}> Google Maps and Geocoding</span>.
              hand on with <span style={{ color: "green" }}> GetX</span>,
              <span style={{ color: "green" }}> Riverpod </span>, &{" "}
              <span style={{ color: "green" }}> Provider </span>
              Proficient in slicing Figma designs and transforming them into
              consistent themes and typography to enhance user experience.
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
                  "As an intern, I have had the opportunity to learn a great deal, particularly when it comes to structuring Flutter applications and utilizing GetX for state management. Throughout my experience, I have gained a deeper understanding of Flutter's widget-based architecture, and I’ve learned how to efficiently organize and structure the code to ensure scalability and maintainability."
                }
                subtitle={"March 2024 -  June 2024"}
                listString={["icon/icon_flutter.png", "icon/getx.png"]}
              />
              <BasicCard
                title={"Solusi Cipta Media"}
                description={
                  "In addition to working with Flutter, I gained experience managing development dev servers using cPanel, where I handled domains, databases, and troubleshooting. I also help maintained CI/CD pipelines with tools GitHub Actions, automating build, lint testing, and deployment processes. Furthermore, I learned Nextjs with TypeScript and React, improving my skills in writing clean, maintainable code and managing state in web applications. This experience broadened my ability to develop both mobile and web applications efficiently."
                }
                subtitle={"July 2024 -  January 2025"}
                listString={[
                  "icon/icon_flutter.png",
                  "icon/getx.png",
                  "icon/typescript.png",
                  "icon/React-icon.svg.png",
                  "icon/prisma.png",
                  "icon/riverpod.png",
                  "icon/termius-logo.png",
                ]}
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
