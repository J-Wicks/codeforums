import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, IndexRedirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Thread from './thread'
// import AppContainer from './containers/AppContainer.jsx';
// import DumbComponent from './components/DumbComponent.jsx';

ReactDOM.render(
<Thread />, document.getElementById('app'));