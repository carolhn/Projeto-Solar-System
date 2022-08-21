import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className="classMission classCard">

        <p data-testid="mission-name" className="name">{ name }</p>

        <p className="classMargin" data-testid="mission-year">{ year }</p>
        <p className="classMargin" data-testid="mission-country">{ country }</p>
        <p className="classMargin" data-testid="mission-destination">{ destination }</p>

      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
