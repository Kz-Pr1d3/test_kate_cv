import '../App.css';

const WorkExperience = (props) => {
    return (
        <>
        <div className="container-with-shadow">
            <h3 className="section-title">Work Experience</h3>
            <div className="section-text">
                <div className="timeline">
                    <ul>
                        <li>
                            <div className="work-period-container">
                                <p>September 2021 - Current time</p>
                                <p>1 year</p>
                            </div>
                            <div className="work-exp-container">
                                <p>Technical Specialist</p>
                                <p>Individual entrepreneurship "Morozova"</p>
                                <ul>
                                    <li>
                                    Support for existing sites on WordPress, incl. changing the required information, adding reviews to product pages, installing video protection plugins, etc.                                    
                                    </li>
                                    <li>
                                    Create and edit product web pages using HTML, CSS (+Bootstrap)                                    
                                    </li>  
                                    <li>
                                    Setting up the payment system, including the connection of the CloudPayments and RoboKassa payment systems. To connect the payment system, it was necessary to edit information on several sites and landing pages (s-morozova.com, iscelyayushieshagi.ru, psihologsv.taplink.ws)                                    
                                    </li>  
                                    <li>
                                    Automate payments and provide access to online courses on WordPress sites                                    
                                    </li>
                                    <li>
                                    Design and creation from scratch of all pages on psychologsv.taplink.ws                                    
                                    </li>
                                    <li>
                                    Creation of the necessary jpeg- and pdf-files according to the wishes of the customer                                    
                                    </li>
                                    <li>
                                    Customer support after purchasing online courses
                                    </li>
                                    <li>
                                    Integration of mailing services (marquiz + justclick)
                                    </li>
                                    <li>
                                    Create subdomains and work with hosting files, SSL certificates
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="work-period-container">
                                <p>May 2021 - September 2021</p>
                                <p>5 months</p>
                            </div>
                            <div className="work-exp-container">
                                <p>HR manager - Teamlead of mass recruiting (11 cities of Kazakhstan)</p>
                                <p>Chocofamily Holding</p>
                                <ul>
                                    <li>
                                    Independent set of couriers in 3 cities of the Republic of Kazakhstan (Almaty, Pavlodar, Shymkent)                                    
                                    </li>
                                    <li>
                                    Working with the city management team to improve recruitment with online tools                                    
                                    </li>  
                                    <li>
                                    Standardization of the recruitment process in all cities                                    
                                    </li>  
                                    <li>
                                    Continuous improvement of the recruitment process in all cities                                    
                                    </li>
                                    <li>
                                    Closing the recruitment plan in the Republic of Kazakhstan                                    
                                    </li>
                                    <li>
                                    Work in a cross-functional team to improve recruitment in all cities of the Republic of Kazakhstan                                    
                                    </li>
                                    <li>
                                    Referral Program Process Management                                    
                                    </li>                                
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="work-period-container">
                                <p>June 2020 - May 2021</p>
                                <p>11 months</p>
                            </div>
                            <div className="work-exp-container">
                                <p>HR manager - Mass recruiting (Almaty)</p>
                                <p>Chocofamily Holding</p>
                                <ul>
                                    <li>
                                    Employment of couriers in the food delivery service (70-100 people / month, more than half worked for several months)
                                    </li>
                                    <li>
                                    Continuous improvement of the recruitment process and identification of the most reliable candidates
                                    </li>  
                                    <li>
                                    Working with the team to develop a new tool for online recruitment of couriers
                                    </li>  
                                    <li>
                                    Work in a cross-functional team (operations department, marketing and PR department and development department)
                                    </li>                                
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div> {/*timeline*/}
            </div>
        </div>
        </>
    )
}

export default WorkExperience