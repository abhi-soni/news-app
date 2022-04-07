const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#0b5fae" }}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder" href="/">News App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </nav>
    )
}

export default NavBar;