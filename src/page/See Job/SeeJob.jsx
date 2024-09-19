import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobOneQuery } from '../../feature/jobApi/jobApi';
import { Box, Button, CircularProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux';
import { useCtreateCommentMutation } from '../../feature/Comment/CommentApi';
import Comment from './Comment';
const SeeJob = () => {
    const { id } = useParams()
    const { data: job, isLoading, isError } = useGetJobOneQuery(id, { pollingInterval: 100 })
    const {register,handleSubmit,formState: { errors },reset } = useForm()
    const { user: { email, name, photo }} = useSelector((state) => state.auth)
    const [createComment]=useCtreateCommentMutation()
    const onSubmit = (data) => {
        const comments={
         email:email,
         name:name,
         jobId:job._id,
         comment:data.comment
        }
        console.log(comments);
        createComment(comments)
      reset()
    }
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <div className='mt-6 min-h-screen'>
            <Card className='h-[500px]'>
                <CardActionArea>
                    <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
                        <CardMedia
                            component="img"
                            className='object-cover w-[200px] h-[500px]'

                            image="https://img.etimg.com/thumb/width-420,height-315,imgsize-139963,resizemode-75,msid-61643005/jobs/bot-is-the-new-boss-now-you-will-have-to-impress-a-machine-to-get-hired/jobs-thinkstocks.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {job.jobName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Company:{job.companyName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Education:{job.education}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Salary:{job.salary}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
            <hr className='border-1 mt-4 border-black' />
            <div>

                <h2 className='text-left text-3xl font-medium'>Q&A</h2>


              <Comment jobId={job._id}/>

              <form onSubmit={handleSubmit(onSubmit)} className='my-7 flex items-center justify-center space-x-2'>

               <input {...register("comment", { required: true })}   type="comment" placeholder='Type Q&A' className='py-2 px-3 w-[60%] outline-purple-500  border-2 border-purple-500 rounded-lg' />
             <button className='bg-blue-400 text-white py-2 px-2'>Q&A</button>
              </form>

            </div>
        </div>
    );
};

export default SeeJob;