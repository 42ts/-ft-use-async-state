import { useUnmounted } from '@-ft/use-unmounted';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export function useAsyncState<T>(
  initialState: (T extends Function ? never : T) | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const unmountedPersist = useUnmounted();
  const [state, setState] = useState(initialState);
  const enhancedSetState = useCallback(
    (setStateAction: SetStateAction<T>) => {
      if (!unmountedPersist.current) {
        setState(setStateAction);
      }
    },
    [unmountedPersist, setState]
  );
  return [state, enhancedSetState];
}
