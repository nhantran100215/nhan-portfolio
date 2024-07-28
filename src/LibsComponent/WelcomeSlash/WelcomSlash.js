/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { animated, easings, useSpring } from '@react-spring/web';

const WelcomeSlash = forwardRef((props, ref) => {
  const { slashDuration = 300, doorDuration = 500 } = props;
  let widthBlockSlash = 0;
  let heightSlash = 0;
  let angleValueBlockSlash = 0;
  widthBlockSlash = window.innerWidth / 3;
  angleValueBlockSlash = (Math.atan(widthBlockSlash / window.innerHeight) * 180) / Math.PI;
  heightSlash = Math.sqrt(Math.pow(widthBlockSlash, 2) + Math.pow(window.innerHeight, 2));

  const [doneSlash, setDoneSlash] = useState(false);
  const [startOpenSD, setStartOpenSD] = useState(false);
  const [endComponent, setEndComponent] = useState(false);

  const [springSlash, apiSlash] = useSpring(() => ({
    from: { height: '0px' },
    config: {
      easing: easings.linear,
      duration: slashDuration
    },
    onStart: () => {
      setDoneSlash(true);
    },
    onRest: () => {
      setDoneSlash(false);
    }
  }));

  const [springDoorLeft, apiDoorLeft] = useSpring(() => ({
    from: { x: 0 },
    config: {
      easing: easings.linear,
      duration: doorDuration
    },
    onStart: () => {
      setStartOpenSD(true);
    },
    onRest: () => {
      setEndComponent(true);
    }
  }));

  const [springDoorRight, apiDoorRight] = useSpring(() => ({
    from: { x: 0 },
    config: {
      easing: easings.linear,
      duration: doorDuration
    }
  }));

  useImperativeHandle(
    ref,
    () => ({
      reset() {
        setDoneSlash(false);
        setEndComponent(false);
        setStartOpenSD(false);
      },
      endComponent
    }),
    []
  );
  useEffect(() => {
    apiSlash.start({
      from: { height: '0' },
      to: { height: `${heightSlash}px` }
    });
  }, []);

  useEffect(() => {
    if (doneSlash) {
      setTimeout(() => {
        apiDoorLeft.start({
          from: { x: 0 },
          to: { x: -(widthBlockSlash * 2) }
        });
        apiDoorRight.start({
          from: { x: 0 },
          to: { x: widthBlockSlash * 2 }
        });
      }, 1000);
    }
  }, [doneSlash]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        display: endComponent ? 'none' : 'block',
        zIndex: 9999
      }}>
      {!endComponent && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* left door */}
          <animated.div
            style={{
              width: `${widthBlockSlash}px`,
              height: `${window.innerHeight}`,
              backgroundColor: 'black',
              position: 'relative',
              ...springDoorLeft
            }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '0',
                height: '0',
                borderLeft: `${widthBlockSlash / 2}px solid black`,
                borderBottom: `${window.innerHeight / 2}px solid black`,
                borderRight: `${widthBlockSlash / 2}px solid transparent`,
                borderTop: `${window.innerHeight / 2}px solid transparent`,
                transform: 'translateX(100%)'
              }}></div>
          </animated.div>
          {/* slash */}
          {!startOpenSD && (
            <div
              className="test"
              style={{
                position: 'absolute',
                width: `${widthBlockSlash}px`,
                height: `${window.innerHeight}`,
                left: '50%',
                top: 0,
                transform: 'translateX(-50%)',
                backgroundColor: 'transparent',
                zIndex: '9999'
              }}>
              <animated.div
                className={'slash'}
                style={{
                  width: 10,
                  transform: `rotate(-${angleValueBlockSlash}deg)`,
                  transformOrigin: 'top',
                  borderRadius: '50%',
                  background: 'white',
                  position: 'absolute',
                  ...springSlash
                }}
              />
            </div>
          )}
          {/* right door */}
          <animated.div
            style={{
              width: `${widthBlockSlash}px`,
              height: '100vh',
              backgroundColor: 'black',
              position: 'relative',
              ...springDoorRight
            }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '0',
                height: '0',
                borderLeft: `${widthBlockSlash / 2}px solid transparent`,
                borderBottom: `${window.innerHeight / 2}px solid transparent`,
                borderRight: `${widthBlockSlash / 2}px solid black`,
                borderTop: `${window.innerHeight / 2}px solid black`,
                transform: 'translateX(-100%)'
                // zIndex:1,
              }}></div>
          </animated.div>
        </div>
      )}
    </div>
  );
});

export default WelcomeSlash;
