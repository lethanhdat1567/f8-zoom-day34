let randomId = 100;

function CommentApp() {
    const [comments, setComments] = React.useState([]);
    const [commentInput, setCommentInput] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((comments) => {
                setComments(comments);
                setLoading(false);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        if (commentInput.trim()) {
            const newComment = {
                id: ++randomId,
                name: "Lê Thành Đạt",
                email: "lethanhdat1567@gmail.com",
                body: commentInput,
            };

            setComments([newComment, ...comments]);
            setCommentInput("");
        }
    }

    function handleChangeInput(e) {
        const value = e.target.value;
        setCommentInput(value);
    }

    return (
        <div className="wrapper">
            <form className="add-comment-wrapper" onSubmit={handleSubmit}>
                <textarea
                    onChange={handleChangeInput}
                    value={commentInput}
                    rows={5}
                    className="add-comment-input"
                    placeholder="Viết bình luận..."
                />
                <button className="add-comment-btn">Bình luận</button>
            </form>
            <div className="comments">
                {loading && <p className="loading">Loading...</p>}
                {comments.map((comment) => (
                    <div className="comment-item" key={comment.id}>
                        <div className="comment-item__info">
                            <img
                                className="avatar"
                                src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                            />
                            <div className="comment-item__info-user">
                                <div className="username-wrapper">
                                    <h3 className="username-text">
                                        {comment.name}
                                    </h3>
                                    <p className="timer">2 giờ trước</p>
                                </div>
                                <p className="email-text">{comment.email}</p>
                            </div>
                        </div>
                        <div className="comment-item__content">
                            {comment.body}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<CommentApp />);
