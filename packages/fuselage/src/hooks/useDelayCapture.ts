import {useEffect} from 'react';
import isLokiRunning from '@loki/is-loki-running';
import createAsyncCallback from "@loki/create-async-callback";

const useDelayCapture = (delayInMs = 1000) => {
  useEffect(() => {
    if ( isLokiRunning() ) {
      const onDone = createAsyncCallback();
      const timer = setTimeout(() => onDone(), delayInMs);
      return () => clearTimeout(timer);
    }
  }, [delayInMs]);
}
export default useDelayCapture;