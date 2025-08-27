function CounterApp() {
    const [count, setCount] = React.useState(0);

    function handleIncrease() {
        setCount(count + 1);
    }

    function handleReset() {
        setCount(0);
    }

    function handleDecrease() {
        setCount(count - 1);
    }

    return (
        <div className="wrapper">
            <div className="content">
                <h1 className="title">Ứng dụng đếm số</h1>
                <span
                    className="counter-number"
                    style={{
                        color: count > 0 ? "green" : count < 0 ? "red" : "gray",
                    }}
                >
                    {count}
                </span>
                <span className="alert">
                    {count > 0
                        ? "Số dương"
                        : count < 0
                        ? "Số âm"
                        : "Bằng không"}
                </span>
                <div className="utils">
                    <button className="btn increase" onClick={handleIncrease}>
                        Tăng
                    </button>
                    <button className="btn reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="btn decrease" onClick={handleDecrease}>
                        Giảm
                    </button>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<CounterApp />);
