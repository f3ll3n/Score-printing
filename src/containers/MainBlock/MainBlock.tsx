import styles from './MainBlock.module.scss'
import { cardData } from './cardsData';
import { ChoiceCard } from '../../components/ChoiceCard/ChoiceCard';

export const MainBlock = () => {
  return (
    <div className={styles.root}>
        <h1>Добро пожаловать!</h1>
        <p>Данное приложение предназначено для того, чтобы определить скорость печати.</p>
        {/* <p>Вы также можете просматривать результаты по пройденным картам.</p> */}
        <p>Для прохождения теста выберите интересующую тематику:</p>
        <div className={styles.select_block}>
            {cardData.map((card, id) => {
                return <ChoiceCard key={id} text={card.text} children={<card.icon sx={{fontSize: 50}} />} id={id} />
            })}
        </div>
    </div>
  )
}
