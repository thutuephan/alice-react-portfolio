import React from "react";

const styles = {
    
    marginTop: '0px',
    width:'100%',
    backgroundImage:`url('https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
    

}

function Home() {
    return (
        
        <div>
            <div className="home container-fluid" style={{marginTop:'50px'}} style={styles}>
                <h1 style={{textAlign:'center'}}>
                    Thu Phan
                </h1>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3 style={{textAlign:'center'}}>Full Stack Web Developer</h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
            
            
        
    )
}

export default Home
