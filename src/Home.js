import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs, error, isPending } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            <h2>All Blogs !</h2>
            {isPending && <div>{error}</div>}
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    );
}

export default Home;