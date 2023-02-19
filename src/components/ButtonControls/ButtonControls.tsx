import React from 'react'
import { Button } from '../Button/Button'
export const ButtonControls: React.FC = (): React.ReactElement => {

  return (
    <div>
        <Button appearance='ghost'>Restart</Button>
        <Button appearance='primary' disabled={true}>Submit</Button>
    </div>
  )
}
