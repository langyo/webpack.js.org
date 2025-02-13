// Import Components
import Container from '../Container/Container';
import SplashViz from '../SplashViz/SplashViz';
import Markdown from '../Markdown/Markdown';

// Import Demo Content
import SplashContent from '../../content/index.mdx';

// Load Styling
import './Splash.scss';

const Splash = () => {
  return (
    <div className="splash">
      <SplashViz />

      <div className="splash__section splash__section--dark page__content">
        <Container>
          <Markdown>
            <SplashContent />
          </Markdown>
        </Container>
      </div>
    </div>
  );
};

export default Splash;
