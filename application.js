const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'users'
});

console.log('----------');
// Create personalInfo
const user = {
    Title: 'Mr',
    FirstName: 'John',
    Surname: 'Doe',
    Mobile: '1234567890',
    Email: 'john.doe@example.com'
};

connection.query('INSERT INTO personalInfo SET ?', user, (err, results) => {
    if (err) {
        console.error(err);
        return;
    }
    // Create Address
    const address = {
        AddressLine1: '123 House',
        AddressLine2: 'Road',
        Town: 'Clonee',
        County: 'Dublin',
        Eircode: 'D13 X1Y2'
    };

    connection.query('INSERT INTO address SET ?', address, (err, results) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Created user: John Doe');
        console.log('----------');

        // Read
        connection.query('SELECT p.*, a.* FROM personalInfo p JOIN address a ON p.UserID = a.UserID WHERE p.Surname = "Smith" ORDER BY RAND()', (err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('All Users with Surname Smith:', results);

            // Update
            const newEmail = 'NEWjessica.jay@example.com';
            const newMobile = '0839999999';
            const newTitle = 'Ms';
            const newEircode = 'D15 Y7F2';
            
            connection.query(
              `UPDATE personalInfo p 
               JOIN address a ON p.UserID = a.UserID 
               SET p.Email = ?, p.Mobile = ?, p.Title = ?, a.Eircode = ? 
               WHERE p.Email = ?`,
              [newEmail, newMobile, newTitle, newEircode, 'jessica.jay@example.com'],
              (err, results) => {
                if (err) {
                  console.error(err);
                  return;
                }
            
                console.log('Updated rows:', results.affectedRows);
                console.log('----------');


                // Delete
                const FirstNameToDelete = 'Joshn';
                const SurnameToDelete = 'Doe';
                const EmailToDelete = 'john.doe@example.com';
                const MobileToDelete = '1234567890';
                
                connection.query('DELETE FROM personalInfo WHERE FirstName = ? AND Surname = ? AND Email = ? AND Mobile = ?', [FirstNameToDelete, SurnameToDelete, EmailToDelete, MobileToDelete], (err, results) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                
                    console.log('Deleted user:', FirstNameToDelete, SurnameToDelete, 'Email:', EmailToDelete, 'Mobile:', MobileToDelete);
                

                    // End connection
                    connection.end();
                });
            });
        });
    });
});
