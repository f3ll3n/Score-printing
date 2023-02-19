import React, { useState, useRef, useEffect } from 'react';
import styles from './WriteMap.module.scss';
import _ from 'lodash';
import isEqual from 'lodash/isEqual';
import { CompletedMaps } from '../CompletedMaps/CompletedMaps';

export const WriteMap: React.FC = (): React.ReactElement => {
  const textAreaRef = useRef<any>(true);
  const [mapValue] = useState<string>('Яндекс.Переводчик — синхронный перевод для 102 языков, подсказки при наборе, словарь с транскрипцией, произношением и примерами употребления слов');
  const [userValueArray, setUserValueArray] = useState<string[]>();
  const [symbolCount, setSymbolCount] = useState<number>(0);
  const [isCheat, setIsCheat] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [checkOnCheat, setCheckOnCheat] = useState<boolean>(false);
  const [isFinally, setIsFinnaly] = useState<boolean>(false);
  const [isStarted, setIsStarded] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  
  // const [currentTime, setCurrentTime] = useState<string>('');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const [hours, minutes, seconds, day, month, year] = [
  //       now.getHours(),
  //       now.getMinutes(),
  //       now.getSeconds(),
  //       now.getDate(),
  //       now.getMonth() + 1,
  //       now.getFullYear()
  //     ].map((value) => value.toString().padStart(2, '0'));
  //     setCurrentTime(`${hours}:${minutes}:${seconds} ${day}:${month}:${year}`);
  //   }, 200);
  //   return () => clearInterval(interval);
  // }, []);

 // Calculate the typing speed and accuracy
  const typingSpeed = (symbolCount / ((Date.now() - startTime) / 1000) * 60).toFixed(2);
  const accuracy = (((mapValue.length - Math.abs(mapValue.length - symbolCount)) / mapValue.length) * 100).toFixed(2);

  const onChangeValue = (event: string) => {

    // Array with the user data and with the map data.
    const mapValueArray = mapValue.split('');
    const userValueArray = event.split('');

    // On change in input set isStarted
    if (!isStarted) {
      setIsStarded(true);
      setStartTime(Date.now());
    }

    // Check on copy paste
    if (userValueArray.length - 1 !== symbolCount && userValueArray.length + 1 !== symbolCount) {
        setIsCheat(true);
        setIsDisabled(true);
    }

    setUserValueArray(userValueArray);
    const isEqual = _.isEqual(mapValueArray, userValueArray);

    // Check on final
    if(isEqual) {
       setCheckOnCheat(true); 
    }

    // Check on text errors
    mapValueArray
      .slice(0, userValueArray.length)
      .join('') === userValueArray.join('')
      ? setIsError(false)
      : setIsError(true);
    
    // Control
    setSymbolCount(userValueArray.length);
  };

  const handleOnRestart = () => {
    textAreaRef.current.value = '';
    setIsDisabled(false);
    setUserValueArray([]);
    setSymbolCount(0);
    setIsCheat(false);
    setIsError(false);
    setCheckOnCheat(false);
    setIsFinnaly(false)
    setIsStarded(false);
    setStartTime(0);
  }

  useEffect(() => {
    if(!isCheat && checkOnCheat) {
      console.log(isCheat);
      setIsFinnaly(true);
      setIsDisabled(true);
    }
  }, [isCheat, checkOnCheat])

 

  return (
    <div className={styles.root}>
      <button onClick={() => handleOnRestart()}>Restart</button>
      <div className={styles.all_values}>{mapValue}
      <div className={styles.user_input}>
        {userValueArray && (
            userValueArray.map((char, index) => {
                if(char === mapValue.split('')[index]){
                    return <span key={index}className={styles.green}>{char}</span>
                }
                else{
                    return <span key={index} className={styles.red}>{char}</span>
                }
            })
        )}
      </div>
      </div>

      <div className={styles.error_tag_block}>
        {isFinally && <span className={styles.tag_finally}>Успех!</span>}
        {isError && <span className={styles.tag_error}>Найдена ошибка</span>}
        {isCheat && <span className={styles.tag_error}>Copy Paste запрещён</span>}
      </div>
      <div className={styles.textarea_block}>
        <div className={styles.textarea}>
            <textarea ref={textAreaRef} onChange={(event) => onChangeValue(event.target.value)} id="about" name="about" disabled={isDisabled} placeholder="При вводе любого символа начнётся тест."></textarea>
        </div>
        {isStarted && 
        (
        <div>
            Скорость набора: <br/> {typingSpeed} симв. / мин.
            <br />
            <br />
            Напечатано: <br/>  {accuracy} %
        </div>
        )}
        
      </div>
      <CompletedMaps />
    </div>
  );
};