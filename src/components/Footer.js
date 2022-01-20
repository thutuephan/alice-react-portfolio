import React from 'react'
//import './styles/footer.css'

const styles = {
    footerStyle: {
        background: '#4CD7D0',
        fontSize: '20px',
        
    }
}

function Footer() {
    return (
        <div>
            <footer className='footer' style={styles.footerStyle}>
                <div className='icons'>
                    <ul className='list-style: none list-inline text-center'>
                        <li className='list-inline-item'>
                            <a target="_blank" href="https://github.com/thutuephan"><i className="fab fa-github-square fa-3x"></i><br/>GitHub
                            </a>
                        </li>
                        <li className='list-inline-item'>
                            <a target="_blank" href="https://www.linkedin.com/in/thu-phan-2abaa1221/"><i className="fab fa-linkedin-in fa-3x"></i><br/>LinkedIn                            </a>
                        </li>

                    </ul>

                </div>
                <p> Created by Thu Phan</p>

            </footer>
            
        </div>
    )
}

export default Footer
