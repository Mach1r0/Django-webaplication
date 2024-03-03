import React from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import { Grid, Typography, Card, List, ListItem, ListItemText, Button } from '@material-ui/core';


export default function BusinessPage() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant='h2'>Business Name</Typography>
          <Typography variant='h4'>Price Range</Typography>
          <Typography variant='Subtitle1'>Todo Reviews Component</Typography>
    
    <div>
      <Button variant='contained' color='primary'>Write a review</Button>
    </div>
    
    <div>
        <Typography variant='p'>Description</Typography>
    </div>
    </Grid>

    <Grid item xs={12} md={6}>
      <Card>
        <List>
          <ListItem>
              <ListItemText primary='Website' secondary='http://test.com' ></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Address' secondary='Address' ></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Phone' secondary='Phone' ></ListItemText>
          </ListItem>

          <ListItem>
              <ListItemText primary='Hours' secondary='Business Hours' ></ListItemText>
          </ListItem>
        </List>
      </Card>
      </Grid>
    </Grid>
  </Layout>
  );
}
