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
        <TypingArea />
        <ButtonControls/>
        <TagsBlock />
        <div>
            Скорость набора: <br/> {typingSpeed} симв. / мин.
            <br />
            <br />
            Напечатано: <br/>   %
        </div>
    </div>
  );
};