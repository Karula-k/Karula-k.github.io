'use client';
import * as React from 'react';
import { styled, Theme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue,green, orange } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PortfolioCardProps } from '../type/portofolioCardProps';
import { Box } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const {  ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }: { theme: Theme; expand: boolean }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function CardWithDetail({
  projectName,
  projectDate,
  projectDescription,
  image,
  techStack,
  githubLink,
  liveDemoLink,
  isNDA,
  type,
}: PortfolioCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
   let avatarColor;

  switch (type) {
    case "FE":
      avatarColor = green[500];
      break;
    case "BE":
      avatarColor = orange[500]; 
      break;
    case "ML":
      avatarColor = blue[500]; 
      break;
    default:
      avatarColor = blue[500];
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Box
            sx={{
              width: 40, 
              height: 40,
              bgcolor: avatarColor, 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%' 
            }}
     >
      <Typography variant="subtitle1" sx={{ color: 'white' }}>
        {type?.toString()}
      </Typography>
    </Box>
        }
        title={projectName}
        subheader={projectDate}
      />
      <CardMedia
        component="img"
        sx={{ height: '140px', objectFit: 'contain' }}  
        image={image}
        alt="Project Screenshot"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {projectDescription}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {!isNDA && githubLink && (
          <IconButton aria-label="GitHub" href={githubLink} target="_blank">
            <GitHubIcon />
          </IconButton>
        )}
        {!isNDA && liveDemoLink && (
          <IconButton aria-label="Live Demo" href={liveDemoLink} target="_blank">
            <LinkIcon />
          </IconButton>
        )}
        <ExpandMore
          expand={expanded && expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded && expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Tech Stack:</Typography>
          <ul style={{ paddingLeft: '20px' }}>
            {techStack.map((tech, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  • {tech}
                </Typography>
              </li>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  );
}
