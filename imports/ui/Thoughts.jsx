import React from 'react';
import { graphql } from 'react-apollo';

import anyThoughtQuery from '/imports/queries/any-thought.graphql';
import ThoughtGroup from './ThoughtGroup';


class Thoughts extends React.Component {
  render() {
    const { loading, error, thought } = this.props.data;

    if (loading) {
      return <p>Thinking...</p>;
    }
    if (error) {
      return <p><strong style={{color: 'red'}}>{error.message}</strong></p>;
    }

    return (
      <div>
        <ThoughtGroup heading="parents" thoughts={thought.parents}/>
        <div className="thought">
          <h1>{thought.name}</h1>
        </div>
        <ThoughtGroup heading="children" thoughts={thought.children}/>
      </div>
    )
  }
}

export default graphql(anyThoughtQuery)(Thoughts);
