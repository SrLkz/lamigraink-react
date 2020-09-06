import React from "react";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Pages/Home";
import BookOnline from "./Components/Pages/BookOnline";
import Gallery from "./Components/Pages/Gallery";
import Aftercare from "./Components/Pages/Aftercare";
import YoutubeChannel from "./Components/Pages/YoutubeChannel";
import ThePlace from "./Components/Pages/ThePlace";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/BookOnline" component={BookOnline} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Aftercare" component={Aftercare} />
          <Route exact path="/YoutubeChannel" component={YoutubeChannel} />
          <Route exact path="/ThePlace" component={ThePlace} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
