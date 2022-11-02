import React, {useState, useEffect} from 'react';


import Pagewrapper from './components/PageWrapper1/Pagewrapper.js';
import peliculasJson from './Json/movies.json'

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Pagesingle from './components/Pagesingle/Pagesingle';
import PageColLeft from './components/PageColLeft/PageColLeft';
import PageColRight from './components/PageColRight/PageColRight';

import SearhForm from './components/SearhForm/SearhForm';
import Ads from './components/Ads/Ads';
import FacebookSd from './components/FacebookSd/FacebookSd';
import Footer from './components/Footer/Footer';
import Columnblog from './components/Columnblog.js';

function Blog() {

  return (
	  <Pagewrapper>
			<Header />

			<Hero />

			<Pagesingle>

                <Columnblog />

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

export default Blog;