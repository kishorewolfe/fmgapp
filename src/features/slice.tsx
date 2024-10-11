import { createSlice } from '@reduxjs/toolkit'

export interface DoctorState {
    doctorInfo: any[] 
}

const initialState: DoctorState = {
     doctorInfo:[]
}

export const providerSlice = createSlice({
  name: 'doctorslice',
  initialState,
  reducers: {
    addDoctorInfo: (state, action) => {
      state.doctorInfo.push(action?.payload)    
    },
  },
})
export const { addDoctorInfo } = providerSlice.actions

export default providerSlice.reducer