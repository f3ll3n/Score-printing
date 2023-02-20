import React from 'react'
import styles from './DisplayArea.module.scss';
import { useDispatch, useSelector } from 'react-redux';

export const DisplayArea = () => {
  const {mapValue, userArrayValue} = useSelector((state: any) => {
    return state.areaSlice
  })
  return (
    <div className={styles.all_values}>{mapValue}
      <div className={styles.user_input}>
        {userArrayValue && (
            userArrayValue.map((char: string, index: number) => {
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
  )
}
