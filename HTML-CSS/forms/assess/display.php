<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <center>
    <?php
        $name = $_POST['name'];
        $username = $_POST['userName'];
        $mobileNumber = $_POST['mobilenumber'];
        $address = $_POST['address'];
        echo "<table><tr>Name : ".$name."</tr>";
        echo "<tr>User name : ".$username."</tr>";
        echo "<tr>MobileNumber : ".$mobileNumber."</tr>";
        echo "<tr>Address : ".$address."</tr></table>";
    ?>
    </center>

</body>
</html>
