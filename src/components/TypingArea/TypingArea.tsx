import React from 'react'
import styles from './TypingArea.module.scss';
import textareaSlice from '../../redux/slices/textareaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../../redux/slices/textareaSlice';

export const TypingArea: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const {isDisabled, userValue} = useSelector((state: any) => state.areaSlice);

  const onChangeValue = (value: string) => {
    dispatch(setInput({
      value: value,
    }))
  }

  return (
    <div className={styles.textarea_block}>
        <div className={styles.textarea}>
            <textarea value={userValue} onChange={(event) => onChangeValue(event.target.value)} id="about" name="about" disabled={isDisabled} placeholder="При вводе любого символа начнётся тест."></textarea>
        </div>
      </div>
  )
}
