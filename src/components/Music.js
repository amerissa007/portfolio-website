import React from 'react';
import soundcloudProfilePicture from '../assets/img/issa_pfp.png';

export const Music = () => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        const currentRef = domRef.current; // Create a variable and assign it the value of domRef.current

        observer.observe(currentRef);

        return () => observer.unobserve(currentRef); // Use the variable in the cleanup function
    }, []);

    return (
        <section className='music' id='music'>
            <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
                <div className="music-container">
                    <div className="music-text">
                        <h1>My Music</h1>
                        <p>Check out the songs I've produced! Music production is a hobby I really enjoy and have been doing for years. If you like what you hear, feel free to support me on the platforms below.</p>
                    </div>
                    <div className="follow-profile">
                        <img className="soundcloud-profile-picture" src={soundcloudProfilePicture} alt="SoundCloud Profile Picture" />   
                        <a href="https://soundcloud.com/iiissa" target="_blank" rel="noreferrer">
                            <button className="follow-soundcloud-button"><span>Follow Me on SoundCloud</span></button>
                        </a>
                        <a href='https://www.youtube.com/channel/UC-3oKq-Zbk0nzn3L1S_Kc2A' target="_blank" rel="noreferrer">
                            <button className="follow-youtube-button"><span>Subscribe to My YouTube Channel</span></button>
                        </a>
                    </div>
                    <iframe title="My Music" width="70%" height="700" scrolling="no" frameborder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/iiissa&amp;">
                    </iframe>
                </div>
            </div>
        </section>
    );
}

export default Music;