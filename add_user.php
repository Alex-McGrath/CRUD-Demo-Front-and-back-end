<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the user input data from the AJAX request
$title = $_POST['title'];
$first_name = $_POST['first_name'];
$surname = $_POST['surname'];
$email = isset($_POST['email']) ? $_POST['email'] : '';
$mobile = isset($_POST['mobile']) ? $_POST['mobile'] : '';

// Check if the required fields are empty
if (empty($title) || empty($first_name) || empty($surname)) {
    echo "Error: Missing required field";
    exit();
}

// Insert the user data into the database
$sql = "INSERT INTO personalinfo (Title, FirstName, Surname, Email, Mobile) VALUES ('$title', '$first_name', '$surname', '$email', '$mobile')";

if (mysqli_query($conn, $sql)) {
    $userID = mysqli_insert_id($conn);
    echo "User added successfully with ID: " . $userID;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
