import React from 'react';
import { useGetCommentQuery } from '../../feature/Comment/CommentApi';

const Comment = ({jobId}) => {
    const {data:comments,isLoading,isError}=useGetCommentQuery(null,{pollingInterval:200})
    if (isLoading) {
        return <>loading</>
    }
    return (
        <div className='px-3 my-4 text-center'>
        {
       comments?.filter(comment=>comment.jobId===jobId).map(comment=>(
        <div>
        <p className='text-xl'>{comment.name}</p>
        <h2 className='text-2xl'>{comment.comment}</h2>
        </div>
       ))
        }
        </div>
    );
};

export default Comment;