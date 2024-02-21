import { Grid, Card, CardHeader, Avatar, makeStyles } from '@material-ui/core';

const useSyles = makeStyles((theme) => ({
    root: {
        margin: '25px auto', 
        maxWidth: '95vw'
    }
}))

export default function Home() {
    const classes = useSyles()
    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardHeader
                    avatar={
                        <Avatar aria-label='category'>
                            C
                        </Avatar>
                    }
                    title='Categories'
                    subheader='See all'></CardHeader>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card>
                    <CardHeader
                    avatar={
                        <Avatar aria-label='category'>
                            C
                        </Avatar>
                    }
                    title='Categories'
                    subheader='See all'></CardHeader>
                </Card>
            </Grid> 
            <Grid item xs={12} md={4}>
                <Card>
                    <CardHeader
                    avatar={
                        <Avatar aria-label='category'>
                            C
                        </Avatar>
                    }
                    title='Categories'
                    subheader='See all'></CardHeader>
                </Card>
            </Grid>      
        </Grid>
    )
}