const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: '../out/user.csv',
    header: [
        { id: 'firstName', title: 'First Name' },
        { id: 'lastName', title: 'Last Name' },
        { id: 'mail', title: 'Mail' },
        { id: 'age', title: 'Age' },
        { id: 'weight', title: 'Weight' },
        { id: 'height', title: 'Height' },
    ]
});

export default csvWriter;