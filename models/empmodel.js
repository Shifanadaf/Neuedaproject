import db from "../config/db.js"; // Ensure .js extension if using ES Modules

const connect = {
    getAll: (callback) => {
        db.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    create: (data, callback) => {
        db.query('INSERT INTO employee SET ?', data, callback);
    }
};

export default connect;
