import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer position-relative light-background">

                <div className="container">
                    <div className="copyright text-center ">
                    <h5>Designed by Pixma for the people</h5>
                        <p>© <span>Copyright</span> <strong className="px-1 sitename">Pixma</strong> <span>All Rights Reserved</span></p>
                    </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you've purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                        
                        Designed using <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
