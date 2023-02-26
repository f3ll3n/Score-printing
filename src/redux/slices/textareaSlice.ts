import { createSlice } from "@reduxjs/toolkit";
//ok
type Tvalue = {
  userValue: string,
  userArrayValue: string[],
  mapValue: string,
  isDisabled: boolean,
  typingSpeed: number | string,
  isStarted: boolean,
  startTime: number,
  typeStatus: 'finally' | 'cheat' | 'error'| 'ok',
  charsCount: number,
};

const maps = [
  'Путешествие - это как попадание в сказку, где всё необычно и не реально. Я люблю путешествовать, узнавать другие страны и города. Залог хорошего путешествия, это грамотная подготовка. Когда я куда-нибудь приезжаю, то стараюсь посмотреть все местные достопримечательности или просто красивые места.',
  'В настоящее время существует множество методик, которые позволяют вести здоровый образ жизни и избежать множество заболеваний. Проблема в том, что многие заболевания являются следствием неправильного отношения к себе.',
  'У нас очень веселая и дружная семья: папа, мама, две сестры и я. Нам не бывает скучно, потому что мои сестры придумывают всё новые и новые игры. Моя старшая сестра Даша учится в университете, а другая сестренка Юля учится со мной в одной школе, только я еще в третьем классе, а она уже в восьмом. Утром мы ходим в школу вместе.',
  'Сегодня замечательный, весенний, теплый день. Ярко светит солнце, от которого хочется улыбаться. На небе нет ни одного облачка, небо светло-голубое. Все говорит о том, что зима покинула наш город, а вместо нее пришла весна. Я очень люблю такие весенние дни.',
  'Музыка во все века была международным языком, не знающим границ. Люди способны превратить свои эмоции в мелодию. Таким примером служат произведения великих композиторов, как отечественных, так и зарубежных.',
  'Какую роль бытовая техника и электроника занимает в жизни человечества? Еще лет двадцать назад это было далеко не дешевым удовольствием для простого народа, сейчас же практически каждая семья имеет основные категории бытовой техники такие как: телевизор, холодильник, стиральная машина и кухонная плита.',
]

const initialState: Tvalue = {
     userValue: '',
     userArrayValue: [],
     mapValue: 'Текст — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.',
     isDisabled: false,
     isStarted: false,
     typeStatus: 'ok',
     startTime: 0,
     typingSpeed: '0',
     charsCount: 0,
};

const areaSlice = createSlice({
  name: "textarea",
  initialState,
  reducers: {
    setMap: (state, action) => {
      state.mapValue = maps[action.payload];
    },
    start: (state, action) => {
      state.isStarted = true;
      state.startTime = action.payload.date;
    },
    setInput: (state, action) => {
      state.userValue = action.payload.value;
      state.userArrayValue = action.payload.value.split('');
      state.charsCount = state.userArrayValue.length;
      state.typingSpeed = (state.userArrayValue.length / ((Date.now() - state.startTime) / 1000) * 60).toFixed(1);
    },
    restart: (state) => {
      state.userValue = '';
      state.userArrayValue = [];
      state.isDisabled = false;
      state.isStarted = false;
      state.startTime = 0;
      state.typingSpeed = 0;
      state.charsCount = 0;
      state.typeStatus = 'ok';
    },
    cheatStop: (state) => {
      state.typeStatus = 'cheat';
      state.typingSpeed = 0;
      state.isDisabled = true;
    },
    final: (state) => {
      state.typeStatus = 'finally';
      state.isDisabled = true;
    }
  }
});

export const { start, setInput, restart, cheatStop, final, setMap } = areaSlice.actions;

export default areaSlice.reducer;