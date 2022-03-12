import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import WhiteFilling from './components/pages/WhiteFilling';
import RootCanal from './components/pages/RootCanal';
import FloatingWhatsappButton from './components/FloatingWhatsappButton/FloatingWhatsappButton';
import BookOnline from './components/BookOnline/BookOnline';
import FAQ_ANS from './components/Faq/FAQ-ANS';
import PhotoGallery from './components/pages/PhotoGallery';
import ScrollToTop from './components/ScrollToTop';
import Videos from './components/pages/Videos'


function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/WhiteFilling' component={WhiteFilling} />
          <Route path='/Root-Canals' component={RootCanal} />
          <Route path='/Book_Online' component={BookOnline} />
          <Route path='/Faq' component={FAQ_ANS}/>
          <Route path='/Photo-gallerys' component={PhotoGallery}/>
          <Route path='/OurVideos' component={Videos}/>
        </Switch>
        <FloatingWhatsappButton />
      </Router>
    </>
  );
}

export default App;