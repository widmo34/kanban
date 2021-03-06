import React from 'react';
import PropTypes from 'prop-types';
import Lane from './LaneContainer';

const Lanes = ({ lanes }) => {
    return(
        <div className="lanes">
            {lanes.map( lane => {
                <Lane className="lane" key={lane.id} lane={lane} />
            })};
        </div>
    );
};

Lanes.PropTypes = {
    lanes: PropTypes.array,
};

export default Lane;
