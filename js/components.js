document.getElementById("navbar-container").innerHTML = `
<nav class="navbar">

    <div class="logo">
        <h2>Front</h2>
    </div>

    <div class="nav-links">
        <a href="#">Home</a>
        <a href="#">Courses</a>
    </div>

    <div class="buscar">
        <input
            type="text"
            placeholder="What do you want to learn?"
            class="buscar-input"
        >
    </div>

    <div class="nav-links">
        <a href="#">Pages</a>

        <a href="#" class="btn-navbar">
            Get started
        </a>
    </div>

</nav>
`;

document.getElementById("footer-container").innerHTML = `
<footer class="footer">

    <div class="footer-container">

        <div>
            <h3>Front</h3>
            <p>
                Learn new skills with the best online courses.
            </p>
        </div>

        <div>
            <h3>Company</h3>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div>
            <h3>Programs</h3>

            <ul>
                <li><a href="#">Python</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">PHP</a></li>
            </ul>
        </div>

        <div>
            <h3>Careers</h3>

            <ul>
                <li>
                    <a href="#">
                        Jobs
                        <span class="badge-footer">
                            Hiring
                        </span>
                    </a>
                </li>

                <li><a href="#">Partners</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>

    </div>

    <div class="footer-copy">
        © 2026 Front. All rights reserved.
    </div>

</footer>
`;