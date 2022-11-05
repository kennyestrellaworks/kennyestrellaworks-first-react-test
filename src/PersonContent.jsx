import data from './data.js'

import './sass/_base.scss';
import './sass/_colors.scss';
import './sass/_components.scss';
import './sass/_fonts.scss';
import './sass/_layout.scss';
import './sass/_variables.scss';

function PersonContent() {
    const personDetails = data.person_details
    const person = personDetails.map((person) => {
        const {id, first_name, last_name, job_position} = person.profile_info
        const fullName = first_name + ' ' + last_name
        const imageURL = 'images/' + id + '-img.jpg'
        return (
            <div className="person__item">
                <div className="person__item-wrap">
                <>
                <div className="profile-card">
                    <div className="profile-card__profile">                                                
                        <img src={imageURL} alt={fullName} className="profile-card__profile-picture" />
                        <h1 className="heading-style-2 heading-style-2__primary profile-card__person-name">{fullName}</h1>
                        <h2 className="heading-style-2 heading-style-2__secondary profile-card__person-position">{job_position}</h2>
                        <div className="profile-card__profile-social" data-id={id}></div>
                    </div>
                </div>
                </>
                </div>                
            </div>
        )
    })
    return person
}

export default PersonContent