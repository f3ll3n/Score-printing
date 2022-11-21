import React, {useEffect, useState} from 'react';
import { current } from '@reduxjs/toolkit';

export const WriteMap = ():any => {
    const [userInput, setUserInput] = useState('');
    const [textMap, setTextMap] = useState('Сяся ты глупенькая, но я теби лублу');
    // const [dataArr , setDataArr] = useState(Array);
    const [currentArray, setCurrentArray] = useState(Array<Object>);
    
    //TODO: УЗНАТЬ ПОЧЕМУ CURRENTDATA НЕ СПРЕДИТСЯ В CURRENT ARR
    useEffect(() => {
        const userArr = userInput.split('');
        const textMapArr = textMap.split('');
        const currUserValue = userArr.length - 1;
        if (userArr[currUserValue] === undefined){
            console.log('⚠️ Поле пустое');
        } else if (userArr[currUserValue] === textMapArr[currUserValue]){
            let currentData = {
                data: userArr[currUserValue],
                status: true,
                id: currUserValue,
            }
            // if(currentData.id > currentArray[0])
            console.log(currentArray)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            // currentArr = [...currentArr, currentData];
            setCurrentArray([...currentArray, currentData]);
            console.log(currentArray);

            // console.log(currentArr);
            // setFullArr(currentArr);
            //console.log(`❎ Значение верное "${userArr[currUserValue]}"`);
        } else {
            let CURRENT_DATA2 = {
                data: userArr[currUserValue],
                status: false,
                id: currUserValue,
            }
            
            // currentArr = [...currentArr, CURRENT_DATA2];
            // setFullArr(currentArr);
            //console.log(`❌ Значение неверное "${userArr[currUserValue]}"`);
        }
    }, [userInput])

    // let arr:any = []; 
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(event.target.value);
        // if(event.target.value){
        //     arr = [...arr, event.target.value.split('')];
        //     setDataArr(arr);
        // }
    }
    return(
        <div>
            <div className='h-8 p-1'>
                { currentArray.map(({id, data, status}: any, iterator) => {
                    if(iterator === id){
                        return <span className={ status ? 'text-green-600' : 'text-red-500' } key={ id }>{data}</span>
                    }
                })}
            </div>
            <div className='bg-slate-800 h-8 p-1 text-white'>
                {/* {fullArr.map(({id, data, status}: any) => {
                    return <span className={ status ? 'text-green-600' : 'text-red-500' } key={id}>{data}</span>
                })} */}
            </div>
            <div>
                <textarea value={ userInput } onChange={ handleOnChange } id="about" name="about" className="mt-1 block w-full rounded-md text-xl border-gray-300 shadow-sm focus:border-indigo-500 h-[50vh] resize-none focus:ring-indigo-500 outline-slate-500 p-2" placeholder="При вводе любого символа начнётся тест."></textarea>
            </div>
        </div>
    )
}