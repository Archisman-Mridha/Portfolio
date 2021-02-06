import Image1 from '../Assets/Image1.png';
import '../Styles/featured.scss';

export default function Featured ( ) {

    return (

        <section className = 'featured'>

            <div className = 'circle'>

                <div className = 'subtitle' style= {{ color: '#6E00FF' }}>Featured Project</div>
                <a className = 'featured-title' href = '/'>Myflix.com</a>
            </div>
        
            <div className = 'left'>
            
                <div className = 'inner transitionTwo'>
                
                    <p className = 'featured-description'>Binge watch your favourite movies and tv-shows with your partner, sync mode is available now ! Only Rs. 699 annually !</p>
                    <button>Visit site</button>
                </div>
            </div>

            <img src = { Image1 } alt = '' />
        </section>
    );
}