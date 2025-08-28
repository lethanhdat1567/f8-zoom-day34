function ProfileApp() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((error) => console.log(error));
    }, []);

    if (!user) return <div className="loading">Đang tải...</div>;

    return (
        <div className="profile-wrapper">
            <div className="thumbnail">
                <img className="image" src="../images/putin.webp" />
            </div>
            <div className="profile-card">
                <h2 className="user-name">{user.name}</h2>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                    <strong>Website:</strong>{" "}
                    <a href={`https://${user.website}`} target="_blank">
                        {user.website}
                    </a>
                </p>
                <p>
                    <strong>Address:</strong> {user.address.street},
                    {user.address.city}
                </p>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProfileApp />);
