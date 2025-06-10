// utils/loki/use-loki-capture-delay.hook.js
import {useEffect} from 'react';
import isLokiRunning from '@loki/is-loki-running';
import createAsyncCallback from "@loki/create-async-callback";

const useLokiCaptureDelay = (delayInMs = 0) => {
  useEffect(() => {
    if ( isLokiRunning() && delayInMs ) {
      const onDone = createAsyncCallback();
      // Here! This is where the delay is set and Loki wil not fire until onDone 
      // is called, after the delay time has passed by.
      const timer = setTimeout(() => onDone(), delayInMs);
      return () => clearTimeout(timer);
    }
  }, [delayInMs]);
}
export default useLokiCaptureDelay;