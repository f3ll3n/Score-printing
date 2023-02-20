import { createSlice } from "@reduxjs/toolkit";

type Tvalue = {
  userValue: string,
  userArrayValue: string[],
  mapValue: string,
  isDisabled: boolean,
};

const initialState: Tvalue = {
     userValue: 'Hello!',
     userArrayValue: [],
     mapValue: 'Яндекс.Переводчик - синхронный перевод для 102 языков, подсказки при наборе, словарь с транскрипцией, произношением и примерами употребления слов',
     isDisabled: false,
};

const areaSlice = createSlice({
  name: "textarea",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.userValue = action.payload.value;
      state.userArrayValue = action.payload.value.split('');
    },
    restart: (state) => {
      state.userValue = '';
    }
  },
});

export const { setInput, restart } = areaSlice.actions;

export default areaSlice.reducer;