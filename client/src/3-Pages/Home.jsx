import { useCallback, useEffect } from "react";
import { useGlobalContext } from "../0-GlobalApp";
import Blog from "./Blog";
import { useLocation } from "react-router-dom";

function Home() {
    const { blogs, setBlogs } = useGlobalContext();

    const location = useLocation();

    const fetchAllBlogs = useCallback(async () => {
        try {
            const res = await fetch("http://127.0.0.1:5000/api/blogs");
            const data = await res.json();

            if (blogs.length !== data.blogs.length) {
                setBlogs(data.blogs);
            }
        } catch (error) {
            console.log(error);
        }
    });
    useEffect(() => {
        fetchAllBlogs();
    }, []);

    return (
        <section className="flex gap-[4vw] flex-wrap px-[4vw] py-[4vh] ">
            {blogs.length > 0 &&
                blogs?.map((blog) => {
                    return <Blog key={blog._id} blog={blog} />;
                })}
            {!blogs.length && <p>no blog</p>}
        </section>
    );
}

export default Home;
