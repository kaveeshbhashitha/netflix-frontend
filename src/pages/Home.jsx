import React, { useState } from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faPlus);

export default function Home() {

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordions = [
        {
        title: "What is Netflix?",
        content: (
            <>
            <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
            </p>
            <p>
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
            </p>
            </>
        )
        },
        {
        title: "How much does Netflix cost?",
        content: (
            <>
            <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
            </p>
            </>
        )
        },
        {
        title: "Where can I watch?",
        content: (
            <>
            <p>
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles.
            </p>
            <p>
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
            </p>
            </>
        )
        },
        {
        title: "How do I cancel?",
        content: (
            <>
            <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
            </p>
            </>
        )
        },
        {
        title: "What can I watch on Netflix?",
        content: (
            <>
            <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
            </p>
            </>
        )
        },
        {
        title: "Is Netflix good for kids?",
        content: (
            <>
            <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
            </p>
            <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
            </p>
            </>
        )
        }
    ];

  return (
    <div>
        <nav className="navbar-1">
            <div className="navbar__brand">
                <img
                        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                        alt="logo"
                        className="brand__logo"
                />
            </div>

            <div className="navbar__nav__items">
                <div className="footer__row__3 d-flex">
                <a href='/gallery' className="dropdown__container mx-2 text-decoration-none">
                    My Videos
                    
                </a>
                <div className="dropdown__container">
                    <i className="fas fa-globe"></i>
                    <select
                            name="languages"
                            className="language__drop__down"
                    >
                        <option value="english" selected>English</option>
                        <option value="hindi">हिन्दी</option>
                    </select>
                </div>
            </div>

                <div className="nav__item mt-2">
                    <a href='/login' className="signin__button">Sign in</a>
                </div>
            </div>
        </nav>

    <main className="main-container">
        <section className="hero">
            <div className="hero__bg__image__container">
                <img
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                        alt="BG hero image"
                        className="hero__bg__image"
                />
            </div>
            <div className="hero__bg__overlay"></div>

            <div className="hero__card">
                <h1 className="hero__title">
                    Unlimited Movies TV,<br />
                    Shows and More.
                </h1>
                <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
                <p className="hero__description">
                    Ready to watch? Enter your email to create or restart your
                    membership .
                </p>

                <div className="email__form__container">
                    <div className="form__container">
                        <input type="email" className="email__input" placeholder=" " />
                        <label className="email__label">Email Address</label>
                    </div>
                    <button className="primary__button">
                        Get Started <i className="fal fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>

        
        <section className="features__container">
            <div className="feature">
                <div className="feature__details">
                    <h3 className="feature__title">Enjoy on your TV.</h3>
                    <h5 className="feature__sub__title">
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                        Blu-ray players and more.
                    </h5>
                </div>
                <div className="feature__image__container">
                    <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                            alt="Feature image"
                            className="feature__image"
                    />
                    <div className="feature__backgroud__video__container">
                        <video
                                autoplay=""
                                loop=""
                                muted=""
                                className="feature__backgroud__video"
                        >
                            <source
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                                    type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>

            
            <div className="feature">
                <div className="feature__details">
                    <h3 className="feature__title">
                        Download your shows to watch offline.
                    </h3>
                    <h5 className="feature__sub__title">
                        Save your favourites easily and always have something to watch.
                    </h5>
                </div>
                <div className="feature__image__container">
                    <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                            alt="Feature image"
                            className="feature__image"
                    />
                    <div className="feature__2__poster__container">
                        <div className="poster__container">
                            <img
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                    alt="poster"
                                    className="poster"
                            />
                        </div>
                        <div className="poster__details">
                            <h4>Stranger Things</h4>
                            <h6>Downloading...</h6>
                        </div>
                        <div className="download__gif__container">
                            <img
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                                    alt="downloading gif"
                                    className="gif"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature">
                <div className="feature__details">
                    <h3 className="feature__title">Watch everywhere.</h3>
                    <h5 className="feature__sub__title">
                        Stream unlimited movies and TV shows on your phone, tablet,
                        laptop, and TV.
                    </h5>
                </div>
                <div className="feature__image__container feature__3__image__container">
                    <img
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                            alt="Feature image"
                            className="feature__image feature__3__image"
                    />
                    <div
                            className="feature__backgroud__video__container feature__3__backgroud__video__container"
                    >
                        <video
                                autoplay=""
                                loop=""
                                muted=""
                                className="feature__backgroud__video feature__3__backgroud__video"
                        >
                            <source
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                                    type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
            <div className="feature">
                <div className="feature__details">
                    <h3 className="feature__title">Create profiles for children.</h3>
                    <h5 className="feature__sub__title">
                        Send children on adventures with their favourite characters in a
                        space made just for them—free with your membership.
                    </h5>
                </div>
                <div className="feature__image__container">
                    <img
                            src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                            alt="image"
                            className="feature__image"
                    />
                </div>
            </div>
        </section>
        <section className="FAQ__list__container">
            <h1 className="FAQ__heading">Frequently Asked Questions</h1>
            <div className="FAQ__list">
                {accordions.map((accordion, index) => (
                <div className="FAQ__accordian" key={index}>
                    <button className="FAQ__title" onClick={() => toggleAccordion(index)}>
                        {accordion.title}
                        <FontAwesomeIcon icon={openAccordion === index ? faTimes : faPlus} />
                    </button>
                    <div
                        className="FAQ__visible"
                        style={{
                        padding: '0 10px',
                        maxHeight: openAccordion === index ? '500px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                        }}
                    >
                        <div className='text-white py-3' style={{fontSize: '15px'}}>{accordion.content}</div>
                    </div>
                </div>
                ))}
            </div>
            <div className="FAQ__get__started__email">
                <h3>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </h3>
                <div className="email__form__container">
                    <div className="form__container">
                        <input type="email" className="email__input" placeholder=" " />
                        <label className="email__label">Email Address</label>
                    </div>
                    <button className="primary__button">
                        Get Started <i className="fal fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div className="footer__row__1">
            <h4>Questions? Call 000-800-040-1843</h4>
        </div>
        <div className="footer__row__2">
            <div className="column__1">
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className="column__2">
                <p>Help Centre</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className="column__3">
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>
            <div className="column__4">
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="footer__row__3">
            <div className="dropdown__container">
                <i className="fas fa-globe"></i>
                <select
                        name="languages"
                        className="language__drop__down"
                >
                    <option value="english" selected>English</option>
                    <option value="hindi">हिन्दी</option>
                </select>
            </div>
        </div>
        <div className="footer__row__4">
            <p>Netflix India</p>
        </div>
    </footer>
    
    </div>
  )
}
