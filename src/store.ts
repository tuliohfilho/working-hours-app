import { combineReducers, configureStore } from '@reduxjs/toolkit'

import employeeSlice from './slices/employees/employee.slice'

const rootReducers = combineReducers({
    employee: employeeSlice
});

export type RootState = ReturnType<typeof rootReducers>

export default configureStore({
    reducer: rootReducers
});