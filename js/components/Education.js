import '../App.css';

const Education = (props) => {
    return (
        <>
        <div className="container-with-shadow">
            <h3 className="section-title">Education</h3>
            <div className="section-text">
            <div className="education-container">
                <div>
                    <p>Kazakh-German University, Almaty</p>
                    <p>Management</p>
                </div>
                    <p>2017 - 2021</p>
                </div>
                <div className="education-container">
                    <div>
                        <p>Linguistic College at Ablai Khan University, Almaty</p>
                        <p>Translation studies</p>
                    </div>
                    <p>2014 - 2017</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education