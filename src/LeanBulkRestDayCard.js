import React from 'react';

function LeanBulkRestDayCard (props) {
    return (
        <div className="item item2">
        <span className="Rest-Day">
        <i class="fas fa-bed"></i>
        </span>
            <div className="Second-Unordered-List">
                <span class="second-list-first-item"><i class="fas fa-drumstick-bite">Protein:</i></span>
                <span class="second-list-second-item"><i class="fas fa-cheese">Fat:</i></span>
                <span class="second-list-third-item"><i class="fas fa-bread-slice">Carbohydrates:</i></span>
            </div>
        </div>
    )
}

export default LeanBulkRestDayCard;