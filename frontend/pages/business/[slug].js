import React from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { className, Grid, Typography, Card, List, ListItem, ListItemText, Button, makeStyles } from '@material-ui/core';
import AverageReview from '../../components/AvarageReview';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '4.6875em',  // 75px
    maxWidth: '95vw'
  },
  addReview: {
    marginTop: '1.25em',  // 20px
  },
  description: {
    paddingTop: '15px',
  }
}));
 
export default function BusinessPage({business}) {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container classesName={classes.root}>
            <Grid item xs={12} md={6}>
            <Typography variant='h2'>{business.name}</Typography>
            <Typography variant='h4'>{business.price_range}</Typography>
            <AverageReview value={3}/> 
        
        <div className={classes.addReview}>
          <Button variant='contained' color='primary'>Write a review</Button>
        </div>
        
        <div className={classes.description}>
        <Typography variant='p'>{business.description}</Typography>
        </div>
        </Grid>

    <Grid item xs={12} md={6}>
      <Card>
        <List>
          <ListItem>
              <ListItemText primary='Website' secondary={business.website} ></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Address' secondary={`${business.street_address} ${business.city} ${business.region}`}></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Phone' secondary={`${business.phone}`} ></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Hours' secondary={`${business.phon}`} ></ListItemText>
          </ListItem>
        </List>
      </Card>
      </Grid>
    </Grid>
  </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const { data } = await axios.get(`http://localhost:8000/businesses?slug=${slug}`);
  return {
    props: {
      business: data[0] || null,
    },
  };
}
