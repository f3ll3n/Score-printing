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

const initialState: Tvalue = {
     userValue: '',
     userArrayValue: [],
     mapValue: 'Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту  тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту  тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту Затестим тестовую карту',
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

export const { start, setInput, restart, cheatStop, final } = areaSlice.actions;

export default areaSlice.reducer;