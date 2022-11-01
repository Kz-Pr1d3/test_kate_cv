import '../App.css';

const About = (props) => {
    return (
        <>
        <div className="container-with-gradient">
            <h3 className="section-title">About me</h3>
            <div className="section-text">
                <p>Since I was in college, I have always shown an interest in the layout and 
                    operation of websites from the technical side, so at the end of 2021 I decided to 
                    master the specialty of a Front-end developer. During this time, I took several courses 
                    on HTML, CSS, JS, participated in the NFactorial (Full-stack) summer incubator, where I 
                    learned and put into practice the React js library, Node js. I also trained on codewars 
                    in solving problems in various topics (from algorithms to react states).
                </p>
                <p>
                    In addition to my main job as a technical specialist, I am writing my own project, 
                    learning new technologies (for example, Redux) and web application architecture.
                </p>
                <p>
                    At the moment, I intend to continue my development in a company that has strong 
                    senior specialists who are ready to share development experience
                </p>
            </div>
        </div>
        </>
    )
}

export default About