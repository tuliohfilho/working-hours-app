import { createSlice } from "@reduxjs/toolkit";

import { Employee, EmployeeState } from "./employee.interfaces";
import { fetchEmployee, fetchEmployees } from "./employee.thunks";


export const initialState: EmployeeState = {
    loading: false,
    employee: <Employee>{},
    employees: <Employee[]>[]
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        clearEmployee: (state) => {
            console.log("Entrou")
            state.employee = <Employee>{};
        }
    },
    extraReducers(builder) {
        builder?.addCase(fetchEmployee?.pending, (state) => {
            state.employee = <Employee>{};
            state.loading = true;
        })
        builder.addCase(fetchEmployee?.fulfilled, (state, action) => {
            state.employee = action.payload[0];
            state.loading = false;
        })
        builder.addCase(fetchEmployee?.rejected, (state) => {
            state.loading = false;
        })
        builder?.addCase(fetchEmployees?.pending, (state) => {
            state.employees = <Employee[]>[];
            state.loading = true;
        })
        builder.addCase(fetchEmployees?.fulfilled, (state, action) => {
            state.employees = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchEmployees?.rejected, (state) => {
            state.loading = false;
        })
    }
});

export const { clearEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;