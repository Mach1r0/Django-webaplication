import React from "react";
import Layout from "../../components/layout.js";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "75px",
    maxWidth: "95vw",
  },
  subtitle: {
    color: "grey",
  },
  card: {
    cursor: "pointer",
  },
}));

const Category = ({ category }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          todo filters
        </Grid>

        <Grid item xs={12} md={9}>
        {category && category.business && category.business.map((business) => (
          <Card className={classes.card}>
              <Box>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h5">Business Name</Typography>
                      <Typography variant="h5">$$$</Typography>
                      <Link variant="subtitle1" href="http://localhost:3000">
                        Business Website
                      </Link>
                      <Typography variant="subtitle1">
                        Business phone
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                      >
                        Description
                      </Typography>
                    </Grid>

                    <Grid xs={6}>
                      <Typography variant="h5">Todo reviews</Typography>
                      <Typography variant="subtitle1">
                        Business Hours
                      </Typography>
                      <Typography variant="subtitle1">Address</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(`http://localhost:8000/categories/${slug}`);

  return {
    props: {
      category: data.results[0] || null
      }
    }
  }

export default Category;
