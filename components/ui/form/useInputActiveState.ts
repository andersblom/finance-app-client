import { useState } from 'react';

const useInputActiveState = () => {
    const [active, setActive] = useState(false);

    const handleFocus = () => {
        if (!active) {
            setActive(true);
        }
    };
    const handleBlur = () => {
        if (active) {
            setActive(false);
        }
    };

    return {
        active,
        handleFocus,
        handleBlur,
    };
};

export default useInputActiveState;
