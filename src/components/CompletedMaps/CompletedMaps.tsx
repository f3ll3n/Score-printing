import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CompletedMapProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    
}

export const CompletedMaps = ({}: CompletedMapProps): React.ReactElement => {
  return (
    <div>CompletedMaps</div>
  )
}
