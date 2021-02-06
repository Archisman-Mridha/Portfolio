import Header from '../Components/Header';
import Featured from '../Components/Featured';
import Skills from '../Components/Skills';
import '../Styles/global.scss';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';

export default function Layout ( ) {

    return (

        <div className = 'Layout'>

            <Header />
            <Featured />
            <Skills />
            <Projects />
            <div className = 'statement'>Like what you see ? <span>Hire me !</span></div>
            <Footer />
        </div>
    );
}