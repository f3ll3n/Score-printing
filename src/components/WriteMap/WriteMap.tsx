import React from 'react';
import styles from './WriteMap.module.scss';
import { DisplayArea } from '../DisplayArea/DisplayArea';
import { TypingArea } from '../TypingArea/TypingArea';
import { ButtonControls } from '../../containers/ButtonControls/ButtonControls';
import { TagsBlock } from '../../containers';
import { useSelector} from 'react-redux';

export const WriteMap: React.FC = (): React.ReactElement => {
  const {typingSpeed} = useSelector((state: any) => state.areaSlice);
  return (
    <div className={styles.root}>
            <DisplayArea />
            <div className={styles.flex}>
              <TypingArea />
              <div className={styles.progress}>
                Скорость:<br/> {typingSpeed} с. / мин.
                <br />
                <TagsBlock />
                <br />
              </div>
            </div>
            
        <ButtonControls/>
    </div>
  );
};