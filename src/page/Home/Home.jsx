import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useGetJobsQuery } from '../../feature/jobApi/jobApi';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Home = () => {
    const {data:jobs,isLoading,isError}=useGetJobsQuery(null,{pollingInterval:100})
    
    console.log(jobs);
    if (isLoading) {
      return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      )
    }
    return (
       <div>
        <h2 className='text-3xl text-center py-3'>Job Data </h2>
         <div className='mt-2 grid lg:grid-cols-3 gap-4'>
   {
    jobs.map(job=>(
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {job.jobName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {job.overview}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {job.timeOfJob}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ))
   }
        </div>
       </div>
    );
};

export default Home;