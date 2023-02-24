import React from 'react'
import styles from './DisplayArea.module.scss';
import { useSelector } from 'react-redux';
//Rewrite styles
export const DisplayArea = () => {
  const {mapValue, userArrayValue} = useSelector((state: any) => {
    return state.areaSlice
  })
  return (
    <div className={styles.root}>{mapValue}
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
