import React from 'react';

function Interests() {
    return (
        <section
            className="resume-section p-3 p-lg-5 d-flex align-items-center"
            id="interests"
        >
            <div className="w-100">
                <h2 className="mb-5">Interests</h2>
                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <i className="fas fa-camera-retro"></i>
                    </li>
                    <li className="list-inline-item">
                        <i className="fas fa-coffee"></i>
                    </li>
                </ul>
                <p>
                    Apart from being a web developer, you can see me outdoors taking photos with my film camera.
                    I love my coffee and have been known to take my aeropress around with me wherever I go.
                </p>
            </div>
        </section>
    )
}

export default Interests;