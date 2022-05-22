<?php
$server_name = "localhost";
$user_name = "yonatanp_user";
$password = "12345";
$database = "yonatanp_project";

$conn = new mysqli($server_name, $user_name, $password, $database);
if ($conn->connect_error) {
    die("Error connecting: " . $conn->connect_error);
}
$sql = "select Name,Email,Subject,Message from contacts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo    "
	<table>
	<tr>
	 <th>Your message has been successfully sent</th> 
	  
	  
	 
	</tr>";
    while ($row = $result->fetch_assoc()) {
        echo "
		<tr>
		 
		  
		  
		</tr>" ;
    }
    echo "</table>";
} else
    echo "No data found";
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];


$sql="insert into contacts(Name,Email,Subject,Message) values ('".$name."','".$email."','".$subject."','".$message."')";
#echo $sql;
if ($conn->query($sql)==FALSE){
    echo "Can not add new user.  Error is: ".$conn->error;
    exit();
}







?>
