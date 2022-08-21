import React from 'react';
import Title from './Title';
import '../App.css';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div className="header mission" data-testid="missions" />
        <Title headline="Missões" />
        <div className="card">

          {missions.map((element) => (
            <MissionCard
              key={ element.name }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
