import React from 'react';

class ThoughtGroup extends React.Component {
  render() {
    const { heading, thoughts } = this.props;
    if (thoughts.length === 0 ) {
      return <div />
    }

    return (
      <div className="ThoughtGroup">
        <h3>{heading}</h3>
        <ul>
          {thoughts.map((thought) => (
            <li key={thought.id}>{thought.name}</li>
            ))}
          </ul>
        </div>
    )
  }
}

export default ThoughtGroup;
