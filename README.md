# use-async-state - react `useAsyncState` hook

do async operations in useEffect, and set state safety

## Usage

```jsx
import { useAsyncState } from '@-ft/use-async-state';

function MyComponent() {
  const [state, setState] = useAsyncState("Loading...");
  useEffect(() => {
    // setState is safe even if the component is unmounted
    (async () => setState(await fetchSomething()))();
  }, [setState]);
  return <div>{state}</div>;
}
```
