import './App.css';
import Pagewrapper from './components/PageWrapper1/Pagewrapper.js';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pagesingle from './components/Pagesingle/Pagesingle';
import PageColRight from './components/PageColRight/PageColRight';
import SearhForm from './components/SearhForm/SearhForm';
import Ads from './components/Ads/Ads';
import FacebookSd from './components/FacebookSd/FacebookSd';
import Footer from './components/Footer/Footer';
import Movielist from './Movielist';



function App() {

  return (
	<Pagewrapper>
			<Header />

			<Hero />

			<Pagesingle>


				<Movielist />
						

				<PageColRight>

					<SearhForm />

					<Ads />

					<FacebookSd />

				</PageColRight>

				
			
			</Pagesingle>

			<Footer />

			

		  
	  </Pagewrapper> 	  
  );
}

export default App;
