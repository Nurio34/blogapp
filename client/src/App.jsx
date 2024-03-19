function App() {
    const fetchData = async () => {
        const res = await fetch("http://127.0.0.1:5000/api");
        const data = await res.json();
        console.log(res);
    };

    return (
        <button className=" bg-red-500" onClick={fetchData}>
            Push
        </button>
    );
}

export default App;
