import { Route, Routes } from "react-router-dom";
import Home from "../3-Pages/Home";
import Create from "../3-Pages/Create";

function index() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </main>
    );
}

export default index;
