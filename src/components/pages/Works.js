import React from "react";
import budget from '../../images/budget.png';
import planner from '../../images/dailyplanner.PNG';
import fitness from '../../images/fitness.png';
import project1 from '../../images/project1.jpg';
import project2 from '../../images/project2.png';
import weather from '../../images/weather.png'



function Works() {
    return (
        <div className="projects">
            <h1 style={{textAlign:'center'}}>Projects</h1>

            <div className="project">
                <h3>Weather Dashboard</h3>

                <a target="_blank" href="https://thutuephan.github.io/WD-TPG/">
                    <img src={weather} alt="weather"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/WD-TPG'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> This weather dashboard fetching data from weather API allows a user to search for a city and be presented with current and future conditions for that city.
                </p>

            </div>
            <div className="project">
                <h3>Workout Tracker</h3>

                <a target="_blank" href="https://alice-fitness-tracker.herokuapp.com/?id=61ba26f019a58100169dc7b1">
                    <img src={fitness} alt="fitness"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/BGtfToEv-WO-Tracker'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> Work-Out app using MongoDB (NoSQL)                </p>

            </div>
            <div className="project">
                <h3>Only-Pans</h3>

                <a target="_blank" href="https://onlypans-group-3.herokuapp.com/">
                    <img src={project2} alt="recipe"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/only-pans'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> OnlyPans is a member's only app where users can search for and upload holiday-inspired recipes.</p>

            </div>
            <div className="project">
                <h3>Fetch A Buzz</h3>

                <a target="_blank" href="https://konnerhartman.github.io/Fetch-A-Buzz/">
                    <img src={project1} alt="cocktail"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/Fetch-A-Buzz'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> An application using APIs (www.thecocktaildb.com) & (www.omdbapi.com) allowing users to select a cocktail
                based on their preferred spirit. Their selection will display the recipe for the cocktail and pair it with
                the notable movie that made it famous.
                </p>

            </div>
            <div className="project">
                <h3>Budget Tracker</h3>

                <a target="_blank" href="https://alice-budget-tracker.herokuapp.com/">
                    <img src={budget} alt="budget-off-online"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/DBSP-PWA-Budget-tracker'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> PWA-Budget-App allows a user to input a withdrawal or deposit without an internet connection (offline);
                then all the transactions will be shown on the page and added to their transaction history when their
                connection is back online.
                </p>

            </div>
            <div className="project">
                <h3>Daily Planner</h3>

                <a target="_blank" href="https://thutuephan.github.io/DP-PiVi/">
                    <img src={planner} alt="planner"/>
                </a>
                <a target='_blank' href='https://github.com/thutuephan/DP-PiVi'>
                <button className='code' >Source Code</button>
                </a>
                <p className="description"> Daily Planner or Work Day Scheduler is an app that I created to help keep track of my activities during a
                work day. When I enter a new event to my planner and click save button, it will be automatically saved in
                local storage. Even when I clear out the event, the data of that event still persists.
                </p>

            </div>
            
            
            




            
        </div>
    )
}

export default Works;