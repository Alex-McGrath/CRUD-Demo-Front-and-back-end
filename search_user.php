<?php
// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the search query from the request
$searchQuery = $_POST["search_query"];

// Prepare the SQL statement
$sql = "SELECT p.*, a.* FROM personalInfo p JOIN address a ON p.UserID = a.UserID WHERE p.FirstName LIKE '%$searchQuery%' OR p.Surname LIKE '%$searchQuery%'";

// Execute the SQL statement
$result = $conn->query($sql);

// Check if any results were found
if ($result->num_rows > 0) {
    // Convert the result set to an associative array and encode it as JSON
    $rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    $json = json_encode($rows);
    echo $json;
} else {
    echo "No results found.";
}

$conn->close();
?>
