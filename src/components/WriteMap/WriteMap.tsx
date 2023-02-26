import React, { useEffect } from 'react';
import styles from './WriteMap.module.scss';
import { DisplayArea } from '../DisplayArea/DisplayArea';
import { TypingArea } from '../TypingArea/TypingArea';
import { ButtonControls } from '../../containers/ButtonControls/ButtonControls';
import { TagsBlock } from '../../containers';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMap } from '../../redux/slices/textareaSlice';

export const WriteMap: React.FC = (): React.ReactElement => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMap(id));
  }, [])
  const {typingSpeed} = useSelector((state: any) => state.areaSlice);
  return (
    <div className={styles.root}>
            <DisplayArea />
            <div className={styles.flex}>
              <TypingArea />
              <div className={styles.progress}>
                <p>Скорость:<br/> {typingSpeed} с. / мин.</p>
                <TagsBlock />
              </div>
            </div>
        <ButtonControls/>
    </div>
  );
};