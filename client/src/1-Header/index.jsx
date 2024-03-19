import { Link } from "react-router-dom";

function index() {
    return (
        <header className="flex justify-between py-[1vh] px-[4vw]">
            <div
                className=" capitalize font-bold text-xl"
                style={{ fontVariant: "small-caps" }}
            >
                mern blog app
            </div>
            <nav>
                <ul className=" text-purple-500 underline underline-offset-1 flex gap-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default index;
