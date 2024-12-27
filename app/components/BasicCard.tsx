import { Box, CardMedia, Typography } from "@mui/material";

const BasicCard = ({
  title,
  description,
  subtitle,
  listString,
}: {
  title: string;
  description: string;
  subtitle: string;
  listString: string[];
}) => {
  return (
    <Box display="flex" flexDirection="column" maxWidth={400}>
      <Typography color="info" variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="body2" fontWeight={200}>
        {subtitle}
      </Typography>
      <Typography paddingY={2}>{description}</Typography>
      <Box gap={1} display="flex" flexWrap="wrap">
        {listString &&
          listString.map((link, index) => (
            <CardMedia
              key={index}
              component="img"
              sx={{ height: "48px", width: "48px", objectFit: "contain" }}
              image={link}
              alt={link}
            />
          ))}
      </Box>
    </Box>
  );
};

export default BasicCard;
