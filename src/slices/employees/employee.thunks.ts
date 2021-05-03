import { createAsyncThunk } from '@reduxjs/toolkit';

import { get } from '../../services/api';
import { Employee } from './employee.interfaces';

export const fetchEmployees = createAsyncThunk(
    'Employee/fetchEmployees',
    async (): Promise<Employee[]> =>
        await get<Employee[]>('employees')
)

export const fetchEmployee = createAsyncThunk(
    'Employee/fetchEmployee',
    async (registration: string): Promise<Employee[]> =>
        await get<Employee[]>(`employees?registration=${registration}`)
)