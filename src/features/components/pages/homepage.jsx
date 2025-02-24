import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import RightButton from '../svg/right';
import { useState } from 'react';

const Homepage = () => {
    const [isShowSidebar, setIsShowSidebar] = useState(false);

    const showSideBar = () => {
        setIsShowSidebar(true);
    }

    return (
        <>
            <Helmet>
                <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
                    rel="stylesheet"
                />
                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                <link href="assets/css/style.css" rel="stylesheet" />
                <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/typed.js/typed.umd.js"></script>
                <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
                <script src="assets/vendor/php-email-form/validate.js"></script>
                <script src="assets/js/main.js"></script>
                <script src="assets/js/jquery-3.7.1.min.js"></script>
                <script src="assets/js/jQuery-rwdImageMaps-master/jquery.rwdImageMaps.min.js"></script>
                <script>
                    {`
                        $(document).ready(function (e) {
                            $('img[usemap]').rwdImageMaps();
                        });
                    `}
                </script>
            </Helmet>

            <div className='flex'>
                <div className='p-1 pb-0 z-10 md:hidden'>
                    <div onClick={showSideBar} className="btn" style={{ backgroundColor: '#4775ca' }}>
                        <Link className='text-white' to="/login">
                            Login
                        </Link>
                    </div>
                </div>

                <header id="header" className='md:block'>
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="assets/img/profile-img.png" alt="" className="img-fluid rounded-circle" />
                            <div>
                                <h1 className="text-light">
                                    <Link
                                        to="/login"
                                        className="btn"
                                        style={{ backgroundColor: '#4775ca' }}
                                    >
                                        Login
                                    </Link>
                                </h1>
                            </div>
                            <div className="social-links mt-3 pt-2 text-center">
                                {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a> */}
                                <Link to="https://t.me/Net_netxpert" className="google-plus">
                                    <i className="bx bxl-telegram"></i>
                                </Link>
                                {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                            </div>
                        </div>

                        <nav id="navbar" className="nav-menu navbar">
                            <ul>
                                <li>
                                    <a href="#" className="nav-link scrollto active">
                                        <i className="bx bx-home"></i> <span>Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="nav-link scrollto">
                                        <i className="bx bx-user"></i> <span>About us</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#services" className="nav-link scrollto">
                                        <i className="bx bx-server"></i> <span>Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#products" className="nav-link scrollto">
                                        <i className="bi bi-box2"></i><span>Products</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#portfolio" className="nav-link scrollto">
                                        <i className="bi bi-router"></i><span>Approved devices</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/Net_netxpert" className="nav-link scrollto">
                                        <i className="bx bx-envelope"></i> <span>Contact us</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>



            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src="assets/video/UntitledProject.mp4" type="video/mp4" />
                        {/* در صورت نیاز می‌توانید پیام fallback اضافه کنید */}
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="hero-container">
                    <h1>NetXpert</h1>
                    <p>
                        Connect To <span className="typed" data-typed-items="be Happy, find joy,"></span>
                    </p>
                </div>
            </section>

            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About us</h2>
                            <p>
                                We're the ultimate squad of tech wizards rockin' the cyber game. Picture this – we're on a
                                mission to unshackle the internet, making sure you can roam the web like a free spirit. No more
                                boundaries, just pure, secure online freedom. Our secret sauce? A cool network, CDN, and
                                servers spread across the globe. We're here to smash those location-based restrictions, so
                                buckle up and ride the cyber wave with us!
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                {/* <img src="assets/img/profile-img.jpg" className="img-fluid" alt="Profile" /> */}
                            </div>
                            <div className="col-lg-10 pt-4 pt-lg-0 content">
                                <h3>Who are our contacts?</h3>
                                <p className="fst-italic"></p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>Home Offices:</strong> <span>Workspaces in homes</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>Smart Homes:</strong> <span>Connected automated residences</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>SMEs:</strong>{' '}
                                                <span>Small and Medium-sized Enterprises</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>Traders:</strong> <span>High speed and safe trade</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>Businessperson:</strong>{' '}
                                                <span>Save connection information</span>
                                            </li>
                                            <li>
                                                <i className="bi bi-chevron-right"></i>{' '}
                                                <strong>Security Personnel:</strong>{' '}
                                                <span>Access to Resources</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    These things we talked about are what most of our people are into, our services are up for
                                    grabs for any and all businesses out there. We've got you covered!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="resume" className="resume section-bg">
                    <div className="container">
                        <div className="section-title">
                            <h2>How it Works</h2>
                            <p>The following steps clearly show how NetXpert works:</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="resume-title">Step 1</h3>
                                <div className="resume-item pb-0">
                                    <h4>COMMUNICATE WITH EXPERTS</h4>
                                    <p>
                                        Yo, linking up with the pros is key to snagging those priceless nuggets of wisdom. When
                                        you vibe with these folks, it's all about swapping ideas, getting some solid advice, and
                                        tapping into their know-how to up your decision-making game and amp up those results.
                                        Plus, teaming up with the experts can spark some out-of-the-box solutions and boost your
                                        professional game through trading experiences and knowledge. Let's ride that wave of
                                        collaboration! <br />
                                        <span>
                                            <a href="https://t.me/Net_netxpert">Join us</a>
                                        </span>
                                    </p>
                                </div>

                                <h3 className="resume-title">Step 2</h3>
                                <div className="resume-item">
                                    <h4>CHECKING AUTHORIZED DEVICES THAT CAN RECEIVE NETXPERT SERVICE</h4>
                                    <p>
                                        Buckle up! Only the cool gadgets in our inner circle get the VIP treatment from
                                        NetXpert. We're like the gatekeepers, keeping it tight with a list of approved devices.
                                        This way, we're calling the shots on who gets in, making sure your data stays on
                                        lockdown, and giving our customers a smooth ride. It's all about shutting down the
                                        sneaky ones and making sure only the chosen devices get to ride the NetXpert wave.{' '}
                                        <br />
                                        <span>
                                            <a href="#portfolio">Some authorized devices</a>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <h3 className="resume-title">Step 3</h3>
                                <div className="resume-item">
                                    <h4>GET USERNAME AND PASSWORD THEN LOGIN TO THE USER PANEL</h4>
                                    <p>
                                        Strap in, because when you log into the user panel, you're stepping into a custom
                                        command center. It's your own personalized playground where you can tweak account
                                        settings, dive into features, and throw down with platform functions. This super-secure
                                        gateway is the key to unlocking all the goods in the user panel. Once you're in, it's a
                                        breeze to check out your info and handle your business. <br />
                                        <span>
                                            <a href="pages/login/index.html">Login</a>
                                        </span>
                                    </p>
                                </div>

                                <h3 className="resume-title">Step 4</h3>
                                <div className="resume-item">
                                    <h4>PURCHASE PACKAGE FOR SERVICES</h4>
                                    <p>
                                        When you're sizing up our services, it's crucial to think about what your business or
                                        hustle really needs. We've got a lineup of services tailor-made to tackle different
                                        aspects and goals. Once you're in the zone, you can snag some sweet packages based on
                                        your turf. Grabbing these budget-friendly bundles means you're locking in access to a
                                        secure, no-cost internet. <br />
                                        <span>
                                            <a href="https://t.me/Net_netxpert">Contact us</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Here's the rundown on what NetXpert is dishing out to users:</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="bi bi-shuffle"></i></div>
                                <h4 className="title"><a href="#">Pathfinder</a></h4>
                                <p className="description">With this service and the cool techy routing, you'll have internet access through a
                                    safe, speedy, and steady route. No interruptions in getting to geeky science, medical, programming
                                    websites, and more. It's a smooth ride to financial data platforms, both local and global streaming
                                    servers, and the go-to servers for hardware and software updates – all without any hiccups!</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="bi bi-diagram-3"></i></div>
                                <h4 className="title"><a href="#">Free zone</a></h4>
                                <p className="description">With this, you can hook up your phone or laptop to your modem from anywhere on the
                                    planet, just using a local internet connection. Enjoy all the perks of NetExpert and tweak your modem
                                    settings hassle-free. No glitches accessing: surveillance cameras worldwide and Iranian banks even outside
                                    their usual geographic zones.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 icon-box">
                                <div className="icon"><i className="bi bi-router"></i></div>
                                <h4 className="title"><a href="#">Net spot</a></h4>
                                <p className="description">It gives managers and business owners the ability to provide internet coverage in
                                    various spaces such as cafes, restaurants, offices, clinics, etc., for their customers. Access to: a
                                    management dashboard to control internet usage for users in different sections like: the amount of
                                    internet volume available for each user, internet usage time frame, and setting download and upload speed
                                    limits for each account.</p>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="products" className="services section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Products</h2>
                            <p>Here's a list of our products:</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="card-title pt-10">One months</span>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-soundwave"></i>
                                        <p className="ms-2"><b>Band width</b> : 200</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-person-vcard"></i>
                                        <p className="ms-2"><b>User Connection</b> : 5</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-stopwatch"></i>
                                        <p className="ms-2"><b>Support hours</b> : 24/7</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-geo-alt"></i>
                                        <p className="ms-2"><b>Location</b> : USA, Brasil, Australia, France, Sweden and so on</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-shield-check"></i>
                                        <p className="ms-2"><b>Safety protocol</b> : <img src="assets/img/ok.png" alt="" /></p>
                                    </div>
                                    <div className="card-content price d-flex">
                                        <p className="ms-2"><span className="real-price">$2.99</span></p>
                                        {/* <p className="ms-2"><span className="discount-price">$3.20</span></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="card-title pt-10">Three month</span>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-soundwave"></i>
                                        <p className="ms-2"><b>Band width</b> : 500</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-person-vcard"></i>
                                        <p className="ms-2"><b>User Connection</b> : 5</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-stopwatch"></i>
                                        <p className="ms-2"><b>Support hours</b> : 24/7</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-geo-alt"></i>
                                        <p className="ms-2"><b>Location</b> : USA, Brasil, Australia, France, Sweden and so on</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-shield-check"></i>
                                        <p className="ms-2"><b>Safety protocol</b> : <img src="assets/img/ok.png" alt="" /></p>
                                    </div>
                                    <div className="card-content price d-flex">
                                        <p className="ms-2"><span className="real-price">$8.25</span></p>
                                        <p className="ms-2"><span className="discount-price">$8.97</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="card-title pt-10">Six months</span>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-soundwave"></i>
                                        <p className="ms-2"><b>Band width</b> : Unlimited</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-person-vcard"></i>
                                        <p className="ms-2"><b>User Connection</b> : 10</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-stopwatch"></i>
                                        <p className="ms-2"><b>Support hours</b> : 24/7</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-geo-alt"></i>
                                        <p className="ms-2"><b>Location</b> : USA, Brasil, Australia, France, Sweden and so on</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-shield-check"></i>
                                        <p className="ms-2"><b>Safety protocol</b> : <img src="assets/img/ok.png" alt="" /></p>
                                    </div>
                                    <div className="card-content price d-flex">
                                        <p className="ms-2"><span className="real-price">$16.50</span></p>
                                        <p className="ms-2"><span className="discount-price">$17.94</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="card-title pt-10">One year</span>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-soundwave"></i>
                                        <p className="ms-2"><b>Band width</b> : Unlimited</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-person-vcard"></i>
                                        <p className="ms-2"><b>User Connection</b> : 10</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-stopwatch"></i>
                                        <p className="ms-2"><b>Support hours</b> : 24/7</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-geo-alt"></i>
                                        <p className="ms-2"><b>Location</b> : USA, Brasil, Australia, France, Sweden and so on</p>
                                    </div>
                                    <div className="card-content d-flex">
                                        <i className="bi bi-shield-check"></i>
                                        <p className="ms-2"><b>Safety protocol</b> : <img src="assets/img/ok.png" alt="" /></p>
                                    </div>
                                    <div className="card-content price d-flex">
                                        <p className="ms-2"><span className="real-price">$33.00</span></p>
                                        <p className="ms-2"><span className="discount-price">$35.88</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title">
                            <h2>Devices that can use NetXpert service</h2>
                            <p>You can benefit from the NetXpert service with the following devices</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-mikrotik">Mikrotik</li>
                                    <li data-filter=".filter-cisco">Cisco</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row portfolio-container">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/1.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">hap_ax_lite_lte6</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-cisco">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/cisco-n/1.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Cisco</a>
                                        <a title="More Details">Cisco C1111-8P Routeur</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/4.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">wap_4g_kit</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-cisco">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/cisco-n/2.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Cisco</a>
                                        <a title="More Details">Cisco 880G and 890G Series</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/5.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">sxt_lte6</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/cisco-n/4.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Cisco</a>
                                        <a title="More Details">C819G-4G-V-K9 819G</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/3.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">hap_ac3_lte6_kit</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-cisco">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/cisco-n/3.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Cisco</a>
                                        <a title="More Details">Cisco CBW150AX-E-EU</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/6.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">chateau_lte6</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/hap ax lite.png" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">hAP ax lite</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/CCR2116-12G-4S.webp" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">CCR2116-12G-4S</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/hEX_RB750GR3.webp" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">hEX RB750GR3</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/L009UiGS-2HaxD-IN.webp" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">L009UiGS-2HaxD-IN</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/QRT 5 ac.webp" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">QRT 5 ac.webp</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item filter-mikrotik">
                                <div className="portfolio-wrap rounded">
                                    <img src="assets/img/devices/microtik-n/RB941-2nd-tc HAP Lite.webp" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <a data-gallery="portfolioGallery" className="portfolio-lightbox">Mikrotik</a>
                                        <a title="More Details">RB941-2nd-tc HAP Lite</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="facts" className="facts section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Internet in the style of professionals</h2>
                            <p>In the realm of netXpert, user trust is our goal. The stats below? They're the solid proof of the trust our
                                customers put in us
                            </p>
                        </div>

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="101248" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Number of happy clients</strong></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-journal-richtext"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Covered locations</strong></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-headset"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Hour-support</strong></p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-people"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p><strong>Number of member</strong></p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="testimonials" className="testimonials">
                    <div className="container">

                        <div className="section-title">
                            <h2>Clients satisfaction</h2>
                            <p>We're all about serving the people, ensuring a secure and comfy internet journey for everyone. That's why
                                we dive deep into user comments and suggestions, tuning in to make things just right. Check out what some
                                users have to say below!</p>
                        </div>

                        <div className="testimonials-slider swiper">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The services of netxpert are excellent! It has a high-speed and stable connection, and I, as a
                                            satisfied user, highly recommend it to everyone
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/real/berraecevitt.jpg" className="testimonial-img" alt="" />
                                        <h3>berraecevitt</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Using the internet services of this team was the best decision I made. Excellent features, high
                                            security, and outstanding support
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/real/bluue_yoshi.jpg" className="testimonial-img" alt="" />
                                        <h3>bluue_yoshi</h3>
                                        <h4>Designer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The internet services of this network are truly amazing. I haven't encountered any issues with my
                                            connection, and the page loading speed is incredibly fast.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/real/diegoogeidt.jpg" className="testimonial-img" alt="" />
                                        <h3>diegoogeidt</h3>
                                        <h4>Store Owner</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Since using the internet services of this team, my internet experience has greatly improved. The
                                            connection is stable, and the services are reliable
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/real/heylarriss.jpg" className="testimonial-img" alt="" />
                                        <h3>heylarriss</h3>
                                        <h4>Freelancer</h4>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                            The internet service of this group is great! Very comprehensive features and ease of use. I am very
                                            satisfied. No doubt you will be satisfied too.
                                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="assets/img/testimonials/real/samucaareis.jpg" className="testimonial-img" alt="" />
                                        <h3>samucaareis</h3>
                                        <h4>Entrepreneur</h4>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>

                <section id="facts" className="facts section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Covered locations</h2>
                            <p>In the map below, you can see the areas covered by NetXpert</p>
                        </div>

                        <div className="row no-gutters p-3">
                            <img id="mapImage" src="./assets/img/map.jpg" alt="world-map" useMap="#workmap" />

                            <map name="workmap">
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="207, 522, 25" title="USA" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="507, 612, 25" title="Canada" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="712, 1022, 25" title="Colombia" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="897, 1117, 25" title="Brasil" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="782, 1252, 25" title="Argentina" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="737, 1372, 25" title="Chile" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1157, 752, 25" title="Spain" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1207, 702, 25" title="France" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1307, 652, 25" title="Lithuania" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1367, 712, 25" title="Romania" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1427, 732, 25" title="Turkey" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1372, 847, 25" title="Egypt" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1372, 1232, 25" title="South Africa" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1457, 602, 25" title="Russia" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1527, 772, 25" title="Iran" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1687, 862, 25" title="India" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1787, 702, 25" title="China" />
                                <area shape="circle" href="https://t.me/Net_netxpert" coords="1982, 1207, 25" title="Australia" />
                            </map>
                        </div>

                    </div>
                </section>

            </main>

            <footer id="footer">
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>netXpert</span></strong>
                    </div>
                    <div class="credits">
                        Designed by <a href="/">netXpert</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Homepage;
