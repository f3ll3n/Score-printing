import React from 'react'
import { Tag } from '../../components/Tag/Tag';
import { useSelector } from 'react-redux';

export const TagsBlock: React.FC = (): React.ReactElement | null => {
   const status = useSelector((state: any) => state.areaSlice.typeStatus)
   switch (status) {
        case 'cheat':
            return <Tag color='red' size='sm'>Copy Paste запрещён</Tag>;
        case 'finally':
            return <Tag color='green' size='sm'>Успех!</Tag>; 
        case 'error':
            return <Tag color='red' size='sm'>Найдена ошибка</Tag>;
        default:
            return null;
   }
}
