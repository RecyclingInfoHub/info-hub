/**
 *
 * @param callback
 * @returns
 *
 * @see {@link https://www.developerway.com/posts/debouncing-in-react}
 *
 * Assisted by ChatGPT
 *
 * Maybe Note:
 * We using lodash debounce because we might combine material and string search together,
 * and using MUI/debounce maybe is not suitable?
 */

import { useEffect, useMemo, useRef } from 'react';
import debounce from 'lodash/debounce';
import memoize from 'lodash/memoize';

// Define the useDebounceMemoize hook
const useDebounceMemoize = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 500,
  shouldMemoize: boolean = true
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (...args: Parameters<T>) => {
      ref.current?.(...args);
    };

    return debounce(func, delay);
  }, [delay]);

  const memoizedCallback = shouldMemoize
    ? memoize(debouncedCallback)
    : debouncedCallback;

  return memoizedCallback;
};

export default useDebounceMemoize;
