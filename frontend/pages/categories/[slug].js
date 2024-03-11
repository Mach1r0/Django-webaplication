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
import axios, { formToJSON } from "axios";
import { useRouter} from 'next/router'
import AvarageReview from "../../components/AvarageReview.js";

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

const Category = ({ category, avarageReview }) => {
  const classes = useStyles();
  const router = useRouter()
  const handleBusinessClick = business => { 
    router.push(`/business/${business.slug}`)
  }

  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          todo filters
        </Grid>

        <Grid item xs={12} md={9}>
        {category && category.business && category.business.map((business) => (
  <Card className={classes.card} onClick={() => handleBusinessClick(business)}>
    <Box>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5">{business.name}</Typography>
            <Typography variant="h5">{business.price_range}</Typography>
            <Link variant="subtitle1" href={business.website}>
              {business.website}
            </Link>
            <Typography variant="subtitle1">
              {business.phone}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.subtitle}>
              {business.description}
            </Typography>
          </Grid>

          <Grid xs={6}>
            <AvarageReview value={avarageReview[business.url]}/>
            <Typography variant="subtitle1">
              {business.hours}
            </Typography>
            <Typography variant="subtitle1">
              {business.street_address} {business.city}, {business.region} {business.postal_code} {business.country}
            </Typography>
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
  const { data } = await axios.get(
    `http://localhost:8000/categories?slug=${slug}`
  );

  let avgReview = {};

  if (data && data.results && data.results[0].business.length > 0) {
    for (let i = 0; i < data.results[0].business.length; i++) {
      let totalReviewStar = 0;
      if (data.results[0].business[i].reviews && data.results[0].business[i].reviews.length > 0) {
        for (let j = 0; j < data.results[0].business[i].reviews.length; j++) {
          totalReviewStar += Number(data.results[0].business[i].reviews[j].stars);
        }
        const inverse = 1 / 2;
        avgReview[data.results[0].business[i].url] = Math.round((totalReviewStar / data.results[0].business[i].reviews.length) / inverse) * inverse;
      }
    }
  }

  return {
    props: {
      category: data || null,
      averageReview: avgReview
    },
  };
}


export default Category;