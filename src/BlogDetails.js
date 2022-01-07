import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import axios from "axios";

const BlogDetails = () => {
    const { id } = useParams()
    const {data : blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/blogs/${id}`)
          .then((res) =>{
              console.log(res)
              history.push('/')
          })
    }
    return (
        <div className="blog-details">
            {isPending && <div>{error}</div>}
            {blog && <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={()=> handleDelete(id)}>Delete</button>
            </article>}
        </div>
    );
};

export default BlogDetails;
