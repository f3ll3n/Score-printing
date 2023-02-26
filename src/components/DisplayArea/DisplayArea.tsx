import React, {useRef} from 'react'
import styles from './DisplayArea.module.scss';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
//Rewrite styles
export const DisplayArea = () => {
  const spanRef = useRef(null);
  const {mapValue, userArrayValue} = useSelector((state: any) => {
    return state.areaSlice
  })
  return (
    <div className={styles.root}>
      <span className={styles.mapValue}>
        {mapValue}
      </span>
      <div className={styles.user_input}>
        {userArrayValue && (
            userArrayValue.map((char: string, index: number) => {
                return (
                  <>
                    <span ref={spanRef} key={index}className={char === mapValue.split('')[index] ? styles.green : styles.red}>{char}</span>
                  </>
                )
            })
        )}
      </div>
    </div>
  )
}
