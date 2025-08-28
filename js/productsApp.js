function ProductsApp() {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedPost, setSelectedPost] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    // Helpers
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const shorten = (str) =>
        str.length > 100 ? str.slice(0, 100) + "..." : str;

    function handleCloseModal() {
        setSelectedPost(null);

        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
    }

    function handleShowDetail(post) {
        setSelectedPost(post);

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "14px";
    }
    console.log(posts);

    return (
        <div className="wrapper">
            <h1 className="title">Me, Myself & I Company</h1>
            {loading && <div className="loading">Đang tải...</div>}
            <div className="products-wrapper">
                {posts.map((post) => (
                    <div className="product-card" key={post.id}>
                        <h3>{capitalize(post.title)}</h3>
                        <p>{shorten(post.body)}</p>
                        <button onClick={() => handleShowDetail(post)}>
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <div className="modal">
                    <div className="content">
                        <button
                            className="close-btn"
                            onClick={handleCloseModal}
                        >
                            <i className="fa-solid fa-x"></i>
                        </button>
                        <h3>{capitalize(selectedPost.title)}</h3>
                        <p>{selectedPost.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductsApp />);
