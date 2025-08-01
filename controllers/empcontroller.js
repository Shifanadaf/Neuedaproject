import connect from '../models/empmodel.js';

// const getAllEmployees = async (req, res) => {
//     try {
//         await connect.getAll((err, results) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Database query failed' });
//             }
//             res.json(results);
//         });
//     } catch (error) {
//         console.error('Error fetching employees:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };


const getAllEmployees =  (req, res) => {
    connect.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
}
// const createEmployee = async (req, res) => {
//     try {
//         const data = req.body;
//         await connect.create(data, (err, result) => {
//             if (err) {
//                 return res.status(500).json({ error: 'Failed to create employee' });
//             }
//             res.status(201).json({ message: 'Employee created successfully', id: result.insertId });
//         });
//     } catch (error) {
//         console.error('Error creating employee:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };
const createEmployee = (req, res) => {
    const data = req.body;
    connect.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create employee' });
        }
        res.status(201).json({ message: 'Employee created successfully', id: result.insertId });
    });
};
export default {
    getAllEmployees,
    createEmployee
};
