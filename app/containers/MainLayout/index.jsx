import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage';
import FavouritesPage from 'containers/FavouritesPage';
import { Layout, MainContent } from './MainContent';
import { GlobalStyle } from '../../global-styles';

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <MainContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourites" component={FavouritesPage} />
        </Switch>
      </MainContent>
      <Footer />
      <GlobalStyle />
    </Layout>
  )
}
