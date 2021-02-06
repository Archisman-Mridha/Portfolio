import ColorLensIcon from '@material-ui/icons/ColorLens';
import CodeIcon from '@material-ui/icons/Code';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import '../Styles/skills.scss';

const description = 'Knowledge in technologies like node, react, angular, unity, comp programming and much more ….';

const cardInfo = [

    {
        icon: <ColorLensIcon style = {{ fontSize: '2.5rem' }} />,
        title: 'UI/UX design',
        description
    },

    {
        icon: <CodeIcon style = {{ fontSize: '2.5rem' }} />,
        title: 'Coding',
        description
    },

    {
        icon: <DesktopWindowsIcon style = {{ fontSize: '2.5rem' }} />,
        title: 'Illustrations',
        description
    }
];

export default function Skills ( ) {

    return (

        <section className = 'skills'>

            <div className = 'skills-container'>

                <ul>

                    {
                        cardInfo.map(

                            ( item, index ) => <li key = { index } className = 'transitionTwo'>
                                { item.icon }
                                <p className = 'skill-title'>{ item.title }</p>
                                <p className = 'skill-description featured-description'>{ item.description }</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}