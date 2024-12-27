import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { PortfolioCardProps } from "../type/portofolioCardProps";

const ArchlyricCard = ({
  projectName,
  projectDescription,
  image,
  techStack,
  liveDemoLink,
  type,
}: PortfolioCardProps) => {
  return (
    <Link href={liveDemoLink ?? ""} target={liveDemoLink ? "_blank" : ""}>
      <Card
        sx={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
          maxWidth: "600px",
          backgroundColor: "transparent",
          transition: "transform 0.3s ease, background-image 0.3s ease",
          width: "100%",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundImage: "linear-gradient(to right, #34d399, #93c5fd)",
          },
        }}
      >
        <CardContent>
          <Typography className="text-2xl font-cursive text-green-700 mb-4">
            {type}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="flex-start">
            <CardMedia
              component="img"
              sx={{
                height: "120px",
                width: "120px",
                objectFit: "contain",
              }}
              image={image}
              alt="Project Screenshot"
            />
            <Box display="flex" flexDirection="column" ml={2}>
              <Typography variant="h6" fontWeight={700}>
                {projectName}
              </Typography>
              <Typography>{projectDescription}</Typography>
              <Box gap={1} display="flex" flexWrap="wrap">
                {techStack &&
                  techStack.map((name, index) => (
                    <Chip
                      key={index}
                      label={name}
                      variant="filled"
                      sx={{
                        borderRadius: "16px",
                        fontWeight: "bold",
                        color: "green",
                        backgroundColor: "green.600",
                      }}
                    />
                  ))}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArchlyricCard;
