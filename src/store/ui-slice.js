import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBackdropVisible: false,
  isSettingsModalVisible: false,
  isMessageModalVisible: false,
  isAboutSectionVisible: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
      toggleBackdrop(state) {
        state.isBackdropVisible = !state.isBackdropVisible;
      },
      toggleSettingsModal(state) {
        state.isSettingsModalVisible = !state.isSettingsModalVisible;
      },
      toggleMessageModal(state) {
        state.isMessageModalVisible = !state.isMessageModalVisible;
      },
      toggleAboutSection(state) {
        state.isAboutSectionVisible = !state.isAboutSectionVisible;
      },
    },
  });

  export const uiActions = uiSlice.actions;
  export default uiSlice.reducer;