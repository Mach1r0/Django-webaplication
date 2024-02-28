import React from "react";
import Layout from "../../components/layout.js";
import {Box, Card, CardContent, Grid, Link, Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      margin: '25px auto', 
      maxWidth: '95vw'
  },
  subtitle: {
    color: 'grey'
  },
  card: {
    cursor: 'pointer' 
  }
}))

const Category = () => {
  const classes = useStyles()
 
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} md={3}>
          todo filters
        </Grid>

        <Grid item xs={12} md={9}>
          <Card>
            <Box>
              <CardContent>
                <Grid item xs={6}>
                  <Typography variant='h5'>Business Name</Typography>
                  <Typography variant='h5'>$$$</Typography>
                  <Link variant='subtitle1' href='http://localhost:3000'>Business Website</Link>
                  <Typography variant='subtitle1'>Business phone</Typography>
                  <Typography variant='subtitle1'>Description</Typography>
                <Grid xs={6}>
                    <Typography variant='h5'>Todo reviews</Typography>
                    <Typography variant='subtitle1'>Business Hours</Typography>
                    <Typography variant='subtitle1'>Address</Typography>
                </Grid>
                </Grid>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Category;
