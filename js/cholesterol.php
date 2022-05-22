
<?php


$server_name = "localhost";
$user_name = "yonatanp_user";
$password = "12345";
$database = "yonatanp_project";

$conn = new mysqli($server_name, $user_name, $password, $database);
if ($conn->connect_error) {
    die("Error connecting: " . $conn->connect_error);
}
$sql = "select Name,guide from remedies where symptom = 'cholesterol'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo    "
	<table>
	<tr>
	 <h1><th>How to use</th></h1><br> 
	  
	  
	 
	</tr>";
    while ($row = $result->fetch_assoc()) {
        echo "
		<tr>
		  <td>" . $row["Name"] . "</td></tr>
		  <tr><td>". $row["guide"] . " </td>
		  
		  
		</tr>" ;
    }
    echo "</table>";
} else
    echo "No data found";
$name=$_POST['name'];
$message=$_POST['message'];


$sql="insert into comments(Name,Message) values ('".$name."','".$message."')";
#echo $sql;
if ($conn->query($sql)==FALSE){
    echo "Can not add new user.  Error is: ".$conn->error;
    exit();
}







?>
