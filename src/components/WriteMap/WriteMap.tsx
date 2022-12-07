import React, {useEffect, useState} from 'react';

//Тип объекта каждого символа
type SymbolObjectType = {
    data: string,
    status: boolean,
    id: number
}


export const WriteMap = ():any => {
    //Карта, которую проходит игрок
    const [textMap, setTextMap] = useState(String);
    //Инпут
    const [userInput, setUserInput] = useState('');
    //Объект с символами и их статусами
    const [currentArray, setCurrentArray] = useState(Array);

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setTextMap('2-й чемпионат мира по футболу стартовал 20 ноября. Фавориты известны - действующий чемпион Франция, Бразилия и Аргентина, Англия и Испания, Германия и Нидерланды, Португалия и Бельгия.')
    }, [])
    useEffect(() => {
        const userArr = userInput.split('');
        let status;
        const textMapArr = textMap.split('');
        const currUserValue = userArr.length - 1;

        if (userArr[currUserValue] === textMapArr[currUserValue]){
            status = true; 
            setCurrentDataObject(status, userArr, currUserValue)
        } 
        //Если значение не совпадает с символом текстовой карты той же итерации то false
        else {
            status = false;
            setErrorMessage('В тексте есть ошибки! Результат не будет зачтён')
            setCurrentDataObject(status, userArr, currUserValue)
        }
    }, [userInput]);

    const setCurrentDataObject = (status: boolean, userArr:Array<string>, currUserValue:any) => {
        //создаём объект, спредим его в state
        let currentData: SymbolObjectType = {
            data: userArr[currUserValue],
            status: status,
            id: currUserValue,
        }
        setCurrentArray([...currentArray, currentData]);
    }
    const outputArray = React.useMemo(() => {
        const userArr = userInput.split('');
        const newCurrArr = currentArray;
        newCurrArr.length = userArr.length;
        console.log(`Current array state's more than user array -- ${newCurrArr.length}, ${userArr.length}`);
        return newCurrArr;
    }, [currentArray])


   
    return(
        <div>
            <div className={errorMessage ? 'bg-slate-200 text-4xl text-red-900' : ''}>
                {errorMessage}
            </div>
            <div>
                Пример: { textMap }
            </div>
            <div className='bg-slate-800 p-1 text-gray-400'>
                Проверка: { outputArray.map(({id, data, status}: any) => {
                        return <span className={ status ? 'text-white' : 'text-red-500' } key={ id }>{data}</span>
                }) }
            </div>
            <div>
                Ввод:
                <textarea value={ userInput } onChange={ (event) => {setUserInput(event.target.value)} } id="about" name="about" className="mt-1 block w-full border-slate-500 border-spacing-1 rounded-md text-xl  shadow-sm focus:border-indigo-500 h-[50vh] resize-none focus:ring-indigo-500 outline-slate-500 p-2 " placeholder="При вводе любого символа начнётся тест."></textarea>
            </div>
        </div>
    )
}