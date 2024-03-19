import { useEffect } from "react";
import { useGlobalContext } from "../0-GlobalApp";
import { useLocation, useNavigate } from "react-router-dom";

function Create() {
    const { formData, setFormData, isEditing, setIsEditing, setBlogs } =
        useGlobalContext();
    const navigate = useNavigate();
    const location = useLocation();
    const id = location?.state;

    useEffect(() => {
        if (!isEditing) {
            setFormData({ title: "", blog: "" });
        }
    }, []);

    const submitForm = async (e) => {
        e.preventDefault();

        const res = isEditing
            ? await fetch(`http://127.0.0.1:5000/api/blogs/update/${id}`, {
                  method: "PUT",
                  headers: {
                      "Content-type": "application/json",
                  },
                  body: JSON.stringify({ ...formData, date: new Date() }),
              })
            : await fetch("http://127.0.0.1:5000/api/blogs/add", {
                  method: "POST",
                  headers: {
                      "Content-type": "application/json",
                  },
                  body: JSON.stringify({ ...formData, date: new Date() }),
              });
        const data = await res.json();
        console.log(data);

        navigate("/");
        if (isEditing) {
            setBlogs(data.blogs);
        }
        setIsEditing(false);
    };

    return (
        <section>
            <form
                className=" bg-purple-200 p-[4vw] grid gap-4"
                onSubmit={submitForm}
            >
                <fieldset className=" space-y-4">
                    <legend
                        className=" font-semibold text-xl capitalize"
                        style={{ fontVariant: "small-caps" }}
                    >
                        {isEditing ? "Edit" : "Add"} Blog
                    </legend>
                    <label htmlFor="titleInp" className="grid">
                        Title
                        <input
                            type="text"
                            name="title"
                            id="titleInp"
                            value={formData.title}
                            placeholder="Title of blog..."
                            className=" border border-gray-400 rounded-md py-1 px-2"
                            onChange={(e) =>
                                setFormData((pre) => ({
                                    ...pre,
                                    title: e.target.value,
                                }))
                            }
                        />
                    </label>
                    <label htmlFor="titleInp" className="grid">
                        Blog
                        <textarea
                            name="blog"
                            id="blogArea"
                            value={formData.blog}
                            placeholder="Blog..."
                            className=" border border-gray-400 rounded-md py-1 px-2"
                            onChange={(e) =>
                                setFormData((pre) => ({
                                    ...pre,
                                    blog: e.target.value,
                                }))
                            }
                        ></textarea>
                    </label>
                </fieldset>
                <input
                    type="submit"
                    value={`${isEditing ? "Edit" : "Add"}  Blog`}
                    className=" bg-[rgba(255,255,255,0.8)] font-semibold text-lg py-1 px-2 rounded-md cursor-pointer
                        hover:scale-105 active:scale-100
                    "
                    style={{ fontVariant: "all-small-caps" }}
                />
            </form>
        </section>
    );
}

export default Create;
