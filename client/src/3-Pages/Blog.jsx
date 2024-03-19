import { useCallback } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useGlobalContext } from "../0-GlobalApp";
import { useNavigate } from "react-router-dom";

function Blog({ blog }) {
    const { setFormData, setBlogs, setIsEditing } = useGlobalContext();

    const navigate = useNavigate();

    const deleteBlog = useCallback(async (id) => {
        const res = await fetch(
            `http://127.0.0.1:5000/api/blogs/delete/${id}`,
            {
                method: "DELETE",
            },
        );
        const data = await res.json();
        setBlogs(data.blogs);
    });

    const onEditClick = useCallback(async (id) => {
        setIsEditing(true);
        setFormData(blog);
        navigate("/create", { state: blog._id });
    });

    return (
        <div
            className=" bg-pink-100 grow md:grow-0 px-[4vw] py-[4vh] rounded-xl  truncate text-clip
                            grid gap-[1vh] md:basis-2/6"
        >
            <h2
                className=" capitalize font-semibold text-lg"
                style={{ fontVariant: "small-caps" }}
            >
                {blog.title}
            </h2>
            <p className="truncate">{blog.blog}</p>
            <p>{blog.date}</p>
            <div className=" flex gap-[4vw] justify-self-end">
                <FaEdit
                    size={24}
                    className=" text-green-600 cursor-pointer"
                    onClick={(e) => onEditClick(blog._id)}
                />
                <MdDeleteForever
                    size={24}
                    className=" text-red-600 cursor-pointer"
                    onClick={(e) => deleteBlog(blog._id)}
                />
            </div>
        </div>
    );
}

export default Blog;
