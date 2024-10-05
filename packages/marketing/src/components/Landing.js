import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MaterialLink from "@mui/material/Link";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            padding: (theme) => theme.spacing(8, 0, 6),
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Box
              sx={{
                marginTop: (theme) => theme.spacing(4),
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                <Grid>
                  <Link to="/pricing" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid>
                  <Link to="/pricing" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Container
          sx={{
            paddingTop: (theme) => theme.spacing(8),
            paddingBottom: (theme) => theme.spacing(8),
          }}
          maxWidth="md"
        >
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ paddingTop: "56.25%" }}
                    image="https://picsum.photos/800/600"
                    title="Image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.paper,
          padding: (theme) => theme.spacing(6),
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
