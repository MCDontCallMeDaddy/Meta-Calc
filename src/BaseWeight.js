import React from 'react';

function BaseWeight (props) {
        return (
            <div className="item item1">
            <span className="Base-Weight">
            <i class="fas fa-weight"></i>
            </span>
            <div className="First-Unordered-List">
                    <span class="first-list-first-item"><i class="fas fa-drumstick-bite">Protein:</i></span>
                    <span class="first-list-second-item"><i class="fas fa-cheese">Fat:</i></span>
                    <span class="first-list-third-item"><i class="fas fa-bread-slice">Carbohydrates:</i></span>
            </div>
        </div>
    )
}

export default BaseWeight;
