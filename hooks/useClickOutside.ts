import {RefObject, useEffect} from "react";

/**
 * Custom React hook that triggers a callback when the user clicks outside a specified DOM element.
 *
 * @param {React.RefObject<T>} ref - Reference to the DOM element that defines the click boundary.
 * @param {() => void} callback - Callback function to be executed when a click is detected outside the specified element.
 *
 * @returns {void}
 * @example
 * const containerRef = useRef(null);
 *  useClickOutside(containerRef, () => {
 *    // Handle click outside the container
 * });
 *
 * @template T - The type of the DOM element, usually obtained using `useRef`.
 */

interface UseClickOutsideProps<T> {
    ref: RefObject<T | null>;
    condition?: boolean;
    callback: () => void;
}

export const useClickOutside = <T extends HTMLElement>({ ref, condition = true, callback }: UseClickOutsideProps<T>): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (condition && ref.current != null && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        if (condition) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref, callback]);
}