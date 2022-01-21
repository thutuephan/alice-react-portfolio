import React from "react";

const styles = {
    
    icon: {
        fontSize: '75px',
    }
    
}
function Skills () {
    return (

        <div className="container-fluid">
            <h1 style={{textAlign:'center'}}>Skills</h1>
            <div className="front-end">
                <h3>Front-end</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <i style={styles.icon} class="devicon-bootstrap-plain-wordmark colored"></i>

                        </div>
                        <div class="col-md-4 ms-auto">
                            <i style={styles.icon} class="devicon-html5-plain-wordmark colored"></i>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-3 ms-md-auto">
                            <i style={styles.icon} class="devicon-css3-plain-wordmark colored"></i>

                        </div>
                        <div class="col-md-3 ms-md-auto">
                            <i style={styles.icon} class="devicon-javascript-plain colored"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-auto me-auto">
                            <i style={styles.icon} class="devicon-jquery-plain-wordmark colored"></i>

                        </div>
                        <div class="col-auto">
                            <i style={styles.icon} class="devicon-react-original-wordmark colored"></i>

                        </div>
                    </div>
                </div>
            
            </div>
            <div className="back-end">
                <h3>Back-end</h3>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <i style={styles.icon} class="devicon-javascript-plain colored"></i>

                        </div>
                        <div class="col-md-4 ms-auto">
                            <i style={styles.icon} class="devicon-nodejs-plain-wordmark colored"></i>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-3 ms-md-auto">
                            <i style={styles.icon} class="devicon-mongodb-plain-wordmark colored"></i>


                        </div>
                        <div class="col-md-3 ms-md-auto">
                            <i style={styles.icon} class="devicon-mysql-plain-wordmark colored"></i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-auto me-auto">
                            <i style={styles.icon} class="devicon-express-original-wordmark colored"></i>

                        </div>
                        <div class="col-auto">
                            <i style={styles.icon} class="devicon-graphql-plain-wordmark colored"></i>

                        </div>
                    </div>
                </div>
            
            </div>
            
            
        </div>

    )
}

export default Skills;