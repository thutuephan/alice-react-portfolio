import React from "react";
import headshot from "../../images/avar3.jpeg";


const styles = {
    
        marginTop: '0px',
        width:'100%',
        backgroundImage:`url('https://images.pexels.com/photos/3014451/pexels-photo-3014451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
        
    
}

function About() {
    return (
        <div className="container border" style={styles}
        >
            <div className="headshot">
                <img className="img-fluid whiteava" src={headshot} alt='headshot of thuphan'/>

            </div>

            <div className="about-me">
                <h2>About me</h2>
                
                <p>
                    "Education is not the learning of facts, but the training of the mind to think".
                    I have always taken this quote of Albert Einstein as a compass in life.
                    I find it exciting and meaninngful in everything I have learnt; especially when I embarked this new journey since it is one of the great ways to train my mind.
                    Entering computer science field is such a mind-blowing experience! It enhances my way of thinking and
                    problem solving skill logically and efficiently.
                    <br/>
                    </p>
                <p>
                    I am currently completing an intensive full-stack web development bootcamp from Southern Methodist University and developing the following technologies: 
                </p>
                <div>
                    <ul className="technologies">
                        <li>Front End skills: HTML, CSS, JavaScript</li>
                        <li>Front End framework: jQuery, React</li>
                        <li>Back End skills: JavaScript, Node.js, REST API</li>
                        <li>Back End framework: Express</li>
                        <li>Database: MySQL, MongoDB</li>
                  
                    </ul>
         

                </div>
                       
            </div>
            
        </div>
        
    )
}

export default About;
