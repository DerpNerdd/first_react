
// import ProfileCardCSS from './ProfileCard.css';
export default function ProFileCard ({firstName, lastName, email, avatar, socialMediaLinks}){
    let testprofile = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        socialMediaLinks: [
            {label: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'https://example.com/twitter.png'},
            {label: 'Instagram', url: 'https://instagram.com/johndoe', icon: 'https://example.com/instagram.png'},
            {label: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: 'https://example.com/linkedin.png'}
        ]
    }

    return(
        <section className="bg-white dark:bg-gray-900">
            <img src={avatar} alt={firstName + lastName} />
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <ul>
                {socialMediaLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <img src={link.icon} alt={link.label} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}