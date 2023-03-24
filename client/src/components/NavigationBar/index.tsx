// import styles
import './_NavigationBar.scss';

// custom components
import Container from '../Container';
import Logo from '../Logo';
import SearchForm from '../SearchForm';

// main component definition
const NavigationBar = () => {
  return (
    <header className="navbar-wrapper">
      <Container>
        <div className="navbar">
          <Logo />

          <SearchForm />
        </div>
      </Container>
    </header>
  );
};

export default NavigationBar;