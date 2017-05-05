import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client'
import { meteorClientConfig } from 'meteor/apollo';
 
import App from '/imports/ui/App.jsx';

const client = new ApolloClient(meteorClientConfig());
 
Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('render-target')
  );
});
