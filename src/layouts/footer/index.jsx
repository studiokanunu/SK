import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer-area reveal-footer border-top-style">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="footer-content">
                            <div className="widget-item">
                                <div className="widget-footer-nav">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/"
                                                    }
                                                >
                                                    term &amp; condition
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/"
                                                    }
                                                >
                                                    policy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to={
                                                        process.env.PUBLIC_URL +
                                                        "/"
                                                    }
                                                >
                                                    map
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="widget-item text-center">
                           <div className="about-widget">
                           <div className="widget-copyright nice">
                                    <p>
                                        © 2022 <span>Studio Kanunu</span></p>
                                </div>
                                </div>
                               
                            </div>
                            <div className="widget-item">
                                <ul className="widget-social">
                                    <li className="social-text">
                                        <span>follow us on social</span>
                                    </li>
                                    <li>
                                        <a
                                            href="https://twitter.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="social_facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            rel="hypertextural"
                                        >
                                            <i className="social_instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
