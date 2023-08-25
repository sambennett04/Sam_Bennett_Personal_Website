import React from "react"
import "./PersonalStatement.css"

export default function PersonalStatement() {
    return (
        <div className="text-background">
            <p>
                My goal is to apply my programming knowledge to problems of sustainability. I developed this interest in high school, but it was personalized on my study abroad experience in Sevilla, Spain which suffers from extreme heat, prolonged drought and desertification. I lived with a host family of four in an apartment with no air conditioning and severe limits on water.
            </p>
            <p>
                Within software engineering my interests include: Machine Learning, Web Development, Algorithms and Data Strutures
            </p>
            <p>
                I have delivered software/hardware projects such as:
            </p>
            <ul className="list">
                <li><a target="_blank" href="https://github.com/sambennett04/Ent">An IoT system that optimizes water flow to crops</a>, at my church's community garden, by integrating sensor readings for water content with hyper local weather forecast API's</li>
                <li><a target="_blank" href="https://github.com/sambennett04/Airborn-Particulate-Matter-Sensor">An arduino powered airborne particulate matter sensor</a> that I used to compare emissions from vehicles built between 1970-2021</li>
                <li><a target="_blank" href="https://github.com/sambennett04/FacialRecognition-OpenCV">A facial recognition application</a> that uses OpenCV for grayscale pattern matching to identify classmates based on stored photographs</li>
            </ul>
            <p>
                I am looking for growth through high-impact, high-tech, Open Source projects and internships. If you want to learn more about my projects or my skills head over to my LinkedIn and GitHub links or click on the project names above to view their specific repositories. If you would like to work with me, feel free to reach out through LinkedIn or email at sam.robert.bennett@gmail.com!
            </p>
        </div>
    )
}