import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function index({ children }) {
    const [formData, setFormData] = useState({
        title: "",
        blog: "",
    });
    const [blogs, setBlogs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                formData,
                setFormData,
                blogs,
                setBlogs,
                isEditing,
                setIsEditing,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default index;
