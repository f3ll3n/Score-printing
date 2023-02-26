import TravelIcon from '@mui/icons-material/AirplanemodeActive';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MonitorIcon from '@mui/icons-material/Monitor';
import ChairIcon from '@mui/icons-material/Chair';
import { ReactNode } from 'react';


type cardDataItemType = {
    icon: any,
    text: string,
}

export const cardData: cardDataItemType[] = [
        {icon: TravelIcon, text: 'Путешествия'},
        {icon: AccessibilityNewIcon, text: 'Здоровье'},
        {icon: ChairIcon, text: 'Дом'},
        {icon: CloudQueueIcon, text: 'Погода'},
        {icon: AudiotrackIcon, text: 'Музыка'},
        {icon: MonitorIcon, text: 'Техника'}
    ]