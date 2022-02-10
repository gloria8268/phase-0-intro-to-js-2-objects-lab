// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return Object.assign({},employee, { [key]: value });
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const copy = Object.assign(
        {}, employee);
    delete copy[key];
    return copy;
};


const destructivelyDeleteFromEmployeeByKey =(employee, key) => {
    delete employee[key];
    return employee;
};







