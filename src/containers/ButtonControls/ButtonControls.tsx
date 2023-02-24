import React from 'react'
import { Button } from '../../components/Button/Button'
import { restart } from '../../redux/slices/textareaSlice';
import { useDispatch } from 'react-redux';
//ok
export const ButtonControls: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const handleOnClickRestart = () => {
    dispatch(restart());
  }  

  return (
    <div>
        <Button onClick={handleOnClickRestart} appearance='ghost'>Restart</Button>
        <Button appearance='primary' disabled={true}>Submit</Button>
    </div>
  )
}
