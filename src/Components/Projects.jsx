import Image2 from '../Assets/Image2.png';
import Image3 from '../Assets/Image3.png';
import Image4 from '../Assets/Image4.png';
import '../Styles/portfolio.scss';

const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil magnam quo sequi asperiores quibusdam impedit id harum dolorem libero. Omnis corrupti iste fugit mollitia dolores distinctio, molestiae aliquam accusantium aut!';

const projectList = [

    {
        title: 'Lumina.com',
        description,
        image: Image2
    },

    {
        title: 'Natours.com',
        description,
        image: Image3
    },

    {
        title: 'Rosadishes.com',
        description,
        image: Image4
    }
]

export default function Projects ( ) {

    return  (

        <section className = 'Projects'>
        
            {
                projectList.map(

                    ( item, index ) => <div key = { index } className = 'project-container transitionThree'>

                        <div className = 'project-left'>

                            <div className = 'inner'>

                                <p className = 'featured-title' style= {{ color: '#6E00FF' }}>{ item.title }</p>
                                <p className = 'featured-description'>{ item.description }</p>
                            </div>
                        </div>

                        <a href = '/'><img src = { item.image } alt = '' /></a>
                    </div>
                )
            }
        </section>
    )
}