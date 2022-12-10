import {useState} from 'react';

export default function Visibility() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = event => {
        // 👇️ toggle visibility
        setIsVisible(current => !current);
    };

    return (
        <div>
            <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
                <h2>Some content here</h2>
            </div>

            <button onClick={handleClick}>Toggle visibility</button>
        </div>
    );
}
