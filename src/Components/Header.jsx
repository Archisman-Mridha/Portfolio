import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import '../Styles/header.scss';

const icons = [ <InstagramIcon style= {{ fontSize: '2rem'}} />, <FacebookIcon style= {{ fontSize: '2rem'}} />, <WhatsAppIcon style= {{ fontSize: '2rem'}} /> ];

export default function Header ( ) {

    return (

        <div className = 'nav-container'>
        
            <header>

                <a href = '/' className = 'logo'>Archisman</a>

                <nav>
                
                    <ul>

                        <li><a href = '/'>Work</a></li>
                        <li><a href = '/'>Projects</a></li>
                        <li><a href = '/'>Hiring</a></li>
                    </ul>
                </nav>
            </header>

            <div className = 'social-header'>
                
                <ul>
                
                    {
                        icons.map(

                            ( item, index ) => <li key = { index }>{ item }</li>
                        )
                    }
                </ul>
            </div>

            <div className = 'hero'>
            
                <div className = 'content'>
                
                    <h1>Beatifully Crafted Web Experiences</h1>
                    <p className = 'meet'>Meet Archisman Mridha</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="120" viewBox="0 0 70 120">
                      <g id="Group_4" data-name="Group 4" transform="translate(-150 -750)">
                        <g id="Rectangle_4" data-name="Rectangle 4" transform="translate(150 750)" fill="none" stroke="#fff" stroke-width="5">
                          <rect width="70" height="120" rx="35" stroke="none"/>
                          <rect x="2.5" y="2.5" width="65" height="115" rx="32.5" fill="none"/>
                        </g>
                        <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(160 760)" fill="#fff" stroke="#707070" stroke-width="1">
                          <circle cx="25" cy="25" r="25" stroke="none"/>
                          <circle cx="25" cy="25" r="24.5" fill="none"/>
                        </g>
                      </g>
                    </svg>
                </div>

                <svg className = 'hero-design' xmlns="http://www.w3.org/2000/svg" width="500" height="495" viewBox="0 0 500 495">
                  <g id="Group_3" data-name="Group 3" transform="translate(-1178 -250)">
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="125" height="125" rx="15" transform="translate(1428 250)" fill="#6e00ff"/>
                    <rect id="Rectangle_6" data-name="Rectangle 6" width="125" height="125" rx="15" transform="translate(1303 375)" fill="#fff"/>
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="125" height="125" rx="15" transform="translate(1428 495)" fill="#6e00ff"/>
                    <rect id="Rectangle_8" data-name="Rectangle 8" width="125" height="125" rx="15" transform="translate(1303 620)" fill="#fff"/>
                    <rect id="Rectangle_9" data-name="Rectangle 9" width="125" height="125" rx="10" transform="translate(1178 500)" fill="#fff" opacity="0.3"/>
                    <rect id="Rectangle_10" data-name="Rectangle 10" width="125" height="125" rx="10" transform="translate(1553 375)" fill="#6e00ff" opacity="0.3"/>
                    <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="62.5" cy="60" rx="62.5" ry="60" transform="translate(1428 375)" fill="#ff64cb"/>
                    <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="62.5" cy="60" rx="62.5" ry="60" transform="translate(1303 500)" fill="#00ff6f"/>
                  </g>
                </svg>
            </div>
        </div>
    )
}