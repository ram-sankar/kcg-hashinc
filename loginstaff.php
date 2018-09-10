<?php
        $id = $_GET['username'];
        $pass = $_GET['password'];
        if ($id == 123456)
        {
            header('location: dashb.html');
        }
        else
        {
            ?>
            <html>
                <head>
                    <script type="text/javascript">
                        alert("Invalid Username or Password");
                    </script>
                </head>
            </html>
            <?php
        }
?>