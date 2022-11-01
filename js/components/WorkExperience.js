import '../App.css';
import Duties from './Duties.js';

const WorkExperience = (props) => {
    const workExp = [
        {
            dates: 'September 2021 - Current time',
            period: '1 year',
            position: 'Technical Specialist',
            company: 'Individual entrepreneurship "Morozova"',
            duties: [
                'Support for existing sites on WordPress, incl. changing the required information, adding reviews to product pages, installing video protection plugins, etc.',
                'Create and edit product web pages using HTML, CSS (+Bootstrap)',
                'Setting up the payment system, including the connection of the CloudPayments and RoboKassa payment systems. To connect the payment system, it was necessary to edit information on several sites and landing pages (s-morozova.com, iscelyayushieshagi.ru, psihologsv.taplink.ws)',
                'Automate payments and provide access to online courses on WordPress sites',
                'Design and creation from scratch of all pages on psychologsv.taplink.ws',
                'Creation of the necessary jpeg- and pdf-files according to the wishes of the customer',
                'Customer support after purchasing online courses',
                'Integration of mailing services (marquiz + justclick)',
                'Create subdomains and work with hosting files, SSL certificates',
            ]
        },
        {
            dates: 'May 2021 - September 2021',
            period: '5 months',
            position: 'HR manager - Teamlead of mass recruiting (11 cities of Kazakhstan)',
            company: 'Chocofamily Holding',
            duties: [
                'Independent set of couriers in 3 cities of the Republic of Kazakhstan (Almaty, Pavlodar, Shymkent)',
                'Working with the city management team to improve recruitment with online tools',
                'Standardization of the recruitment process in all cities',
                'Continuous improvement of the recruitment process in all cities',
                'Closing the recruitment plan in the Republic of Kazakhstan',
                'Work in a cross-functional team to improve recruitment in all cities of the Republic of Kazakhstan',
                'Referral Program Process Management',
            ]
        },
        {
            dates: 'June 2020 - May 2021',
            period: '11 months',
            position: 'HR manager - Mass recruiting (Almaty)',
            company: 'Chocofamily Holding',
            duties: [
                'Employment of couriers in the food delivery service (70-100 people / month, more than half worked for several months)',
                'Continuous improvement of the recruitment process and identification of the most reliable candidates',
                'Working with the team to develop a new tool for online recruitment of couriers',
                'Work in a cross-functional team (operations department, marketing and PR department and development department)',
            ]
        },

    ]

    return (
        <>
        <div className="container-with-shadow">
            <h3 className="section-title">Work Experience</h3>
            <div className="section-text">
                <div className="timeline">
                    <ul>
                        {workExp.map((e) => (
                            <li>
                            <div className="work-period-container">
                                <p>{e.dates}</p>
                                <p>{e.period}</p>
                            </div>
                            <div className="work-exp-container">
                                <p>{e.position}</p>
                                <p>{e.company}</p>
                                <ul>
                                    <Duties duties={e.duties} />
                                </ul>
                            </div>
                            </li>)
                        )}
                    </ul>
                </div> 
            </div>
        </div>
        </>
    )
}

export default WorkExperience