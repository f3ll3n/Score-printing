import React from 'react'
import styles from './TypingArea.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, start, cheatStop, final } from '../../redux/slices/textareaSlice';

export const TypingArea: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const {isDisabled, userValue, isStarted, charsCount, mapValue} = useSelector((state: any) => state.areaSlice);

  const onChangeValue = (value: string) => {
    if(!isStarted){
      dispatch(start({
        date: Date.now(),
      }))
    }
    dispatch(setInput({
        value: value,
    }))
    if (charsCount - 1 !== value.split('').length && charsCount + 1 !== value.split('').length && charsCount !== value.split('').length) {
      dispatch(cheatStop())
    }
    if(value === mapValue) {
       dispatch(final())
    }
  }

  return (
    <div className={styles.textarea_block}>
        <div className={styles.textarea}>
            <textarea value={userValue} spellCheck="false" onChange={(event) => onChangeValue(event.target.value)} id="about" name="about" disabled={isDisabled} placeholder="При вводе любого символа начнётся тест."></textarea>
        </div>
      </div>
  )
}
