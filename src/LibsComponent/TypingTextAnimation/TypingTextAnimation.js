/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './TypingTextAnimation.scss';
const calculateTimeOutCharacter = (array = [], indexNow, charIndex, timeUnit) => {
  let totalTIme = 0;
  if (Array.isArray(array)) {
    for (let index = 0; index < indexNow; index++) {
      totalTIme += array[index].text.length;
    }
    totalTIme = (totalTIme + charIndex) * timeUnit;
    return totalTIme;
  }
};

const TypingTextAnimation = ({
  content = [{ text: 'TypingTextAnimation', width: 1020 }],
  height = 100,
  timer = 30 //ms
}) => {
  const [arrayCharacters, setArrayCharacters] = useState([{ arrayCharacter: [], width: 0 }]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (content) {
      const arrayCharactersTemp = [];
      content.map((item, index) => {
        arrayCharactersTemp[index] = {
          arrayCharacter: item.text
            .split('')
            .map((item) => ({ character: item, visibility: false })),
          width: item.width || 1000
        };
      });
      setArrayCharacters(arrayCharactersTemp);
    }
  }, []);

  const updateContent = () => {
    arrayCharacters.map((item, itemIndex) => {
      item.arrayCharacter.map((characterItem, charIndex) => {
        setTimeout(
          () => {
            setArrayCharacters((arrayCharacters) => {
              arrayCharacters[itemIndex].arrayCharacter[charIndex].visibility = true;
              return arrayCharacters;
            });
          },
          calculateTimeOutCharacter(content, itemIndex, charIndex, 50)
        );
        setTimeout(
          () => {
            setCount((count) => (count = count + 1));
          },
          timer * (itemIndex + 1) * charIndex
        );
      });
    });
  };
  useEffect(() => {
    if (arrayCharacters.length) {
      setTimeout(() => {
        updateContent();
      }, 2000);
    }
  }, [arrayCharacters]);
  return (
    <div className="TypingTextAnimation">
      <div className="TypingTextAnimation" style={{ minHeight: `${height}px` }}>
        {arrayCharacters.map((item, index) => {
          return (
            <div
              style={{
                maxWidth: `${item.width}px`,
                textAlign: content[index].position,
                marginBottom: '10px'
              }}
              key={index}>
              {item.arrayCharacter.map((characterItem, charIndex) => {
                // flicker undescore
                if (
                  !characterItem.visibility &&
                  charIndex &&
                  item.arrayCharacter[charIndex - 1].visibility
                )
                  return <span className="underscoreFlicker" key={charIndex}></span>;
                // character of phrase
                return (
                  <span
                    key={charIndex}
                    style={{ visibility: characterItem.visibility ? 'visible' : 'hidden' }}>
                    {characterItem.character}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TypingTextAnimation;
