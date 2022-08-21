import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component { // Será validado se o componente <PlanetCard />é renderizado;
  render() {
    const { planetName, planetImage } = this.props;
    const planetText = `Planeta ${planetName}`;
    const classe = `image ${planetName}`;

    return (
      <div className="box" data-testid="planet-card">
        <img className={ classe } src={ planetImage } alt={ planetText } />
        <p className="header" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;

