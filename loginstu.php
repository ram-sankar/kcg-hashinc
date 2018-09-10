<?php
        $regno = $_GET['regno'];
        $dob = $_GET['dateofbirth'];
        if ($regno == 311016104075)
        {
            header('location: complaint.php');
        }
        else
        {
            echo "Login failed";
        }
?>