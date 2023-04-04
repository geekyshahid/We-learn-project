import "./Footer.css"

const Footer =() => {
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>We Learn.</h1>
                    <p>The Ultimate Place for Engineering Resources.</p>
                </div>
                <div>
                    <h4>Menu</h4>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Courses</a>
                    <a href="/">Contact</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Use</a>
                </div>
                <div>
                    <h4>Get in Touch</h4>
                    <p>E-mail : rsms@gmail.com</p>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <p>Made with &#10084; in Bihar.All rights reserved.WeLearn.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;