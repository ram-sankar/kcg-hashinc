<!DOCTYPE html>
<html>
<head>

        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="">
        <title>Complaints</title>
 
        <!-- Styles -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" media="screen">
		 <link href="assets/css/chartist.min.css" rel="stylesheet" media="screen">
		<link href="assets/css/owl.carousel.min.css" rel="stylesheet" media="screen">
		<link href="assets/css/owl.theme.default.min.css" rel="stylesheet" media="screen">
		<link href="assets/css/jquery.dataTables.min.css" rel="stylesheet" media="screen">
		<link href="assets/css/responsive.dataTables.min.css" rel="stylesheet" media="screen">
        <link href="assets/css/style.css" rel="stylesheet" media="screen">

        <!-- Fonts -->
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800' rel='stylesheet' type='text/css'>
        <link href="assets/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" media="screen">

  
  <style>
  #form_c
    {
      margin-left: 220px;
      width: 2700px;
    }
  
  </style>
    </head>
    <body>
		<div class="row dashboard-top-nav">
			<div class="col-sm-3 logo">
				<h5>COMPLAINTS MANAGEMENT</h5>
			</div>
			<div class="col-sm-5 notification-area" style="margin-left: 400px">
				<ul class="top-nav-list">
					<li class="user dropdown">
						<a href="login.html">
							<span><img src="img/user.jpg" alt="user">RAM SANKAR R</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
      
			<div class="main-content" id="content-wrapper">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 clear-padding-xs">
							<CENTER> <h4 class="page-title"><i class="fa fa-cogs"></i>ADD COMPLAINTS</h4></CENTER>
							<hr>
						</div>
					</div>
                  
					<div class="row" id="form_c">
						<div class="col-lg-12 clear-padding-xs">
							<div class="col-sm-4">
								<div class="dash-item first-dash-item">
                                  <form action="" method="get">
									<h5 class="item-title"><i class="fa fa-plus-circle"></i>ENTER THE DETAILS OF YOUR COMPLAINNT</h5>
									<div class="inner-item">
										<div class="dash-form">
											<label class="clear-top-margin"><i class="fa fa-book"></i>WHOM TO ADDRESS</label>
										    <select name="sendto" id="sendto"  >
                                    <option>-- Select --</option>
                                              <option value="mailtoramsankar@gmail.com">Only Principal</option>
                                    <option value="ssaimanjunath@gmail.com">Only HOD</option>
                                    <option value="ramsankarkcg@gmail.com">Only Class teacher</option>
                                    <option value="subt">All subject staffs</option>
                                    <option value="all">All the above</option>
                                </select>	
                                          
											<label><i class="fa fa-podcast"></i>REASON FOR COMPLAINT</label>
											<input type="text" name="reason" id="reason" placeholder="Short discription about the complaint" />
                                          
                                            <label><i class="fa fa-user"></i>STAFF/STUDENT INVOLVED IN IT</label>
											<input type="text" name="remark" id="remark" placeholder="Staff/Student involved in it" />
											
											<label><i class="fa fa-map fa-lg"></i>DETAILS ABOUT THE COMPLAINT</label>
											<textarea placeholder="Detailed Report" name="details" id="details" ></textarea>
                                          
                                          
											<div>
                                              <center><input class="btn btn-info" type="submit"></center>                                             
											</div>
                                      </div>
                                    </div>
                                      </form>
										<div class="clearfix"></div>
									</div>
									<div class="clearfix"></div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
  </body>
</html>


<?php
    $sendto = $_GET['sendto'];
    $reason = $_GET['reason'];
    $remark = $_GET['remark'];
    $details = $_GET['details'];

mail($sendto,$reason,"Staff/Student involved : ".$remark."\n\nDetailed Report : ".$details);
?>  