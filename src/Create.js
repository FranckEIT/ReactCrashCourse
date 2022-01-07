import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('mario');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const blogs = {author: author, body: body, title: title}
        axios.post('http://localhost:8000/blogs', blogs)
            .then((response) => {
                console.log(response);
                setIsPending(false)
                history.push('/')
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className={'create'}>
            <h2>Add a new Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                > </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {isPending && <button>Adding Blog</button>}
                {!isPending && <button>Add Blog</button>}
            </form>
        </div>
    );
};

export default Create;
