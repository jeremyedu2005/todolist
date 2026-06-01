import { useState } from 'react';
import styles from './Button.module.scss';

export const Button = () => {
    const [count, setCount] = useState(1);

    return (
        <button
            type="button"
            className={styles.button}
            onClick={() => setCount((count) => count + 1)}
        >
            count: <span>{count}</span>
        </button>
    );
};

