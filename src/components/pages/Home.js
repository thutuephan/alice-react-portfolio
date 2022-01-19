import React from "react";


const styles = {
    homeStyle: {
        background: '#050A30',
        display: 'flex',
        
    },
    homeText: {
        fontFamily: 'Luxurious Roman', 
        fontWeight: 'bolder',
        color: 'white',
        justifyContent: 'center',

    }
}
function Home() {
    return (
        <div>
            <div className="home container" style={styles.homeStyle}>
                <h1 className="home-text" stsyle={styles.homeText}>THU PHAN</h1>
                <h3 className="title" style={styles.homeText}>A Full Stack Web Developer</h3>
                <p className="quote" style={styles.homeText}>If you don't try, you will never know.</p>
            </div>
            
            
        </div>
    )
}

export default Home
