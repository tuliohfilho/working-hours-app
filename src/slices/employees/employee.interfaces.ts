export interface Employee {
    id: number,
    name: string,
    registration: string
}

export interface EmployeeState {
    loading: boolean,
    employee: Employee,
    employees: Array<Employee>
}