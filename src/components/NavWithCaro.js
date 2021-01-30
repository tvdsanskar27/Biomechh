import React from 'react';
import './NavWithCaro.css';

const NavWithCaro = () => {
  return (



<body id="page-top" name="page-top" className="active">


		<nav id="sidebar-wrapper">
			<ul className="sidebar-nav">
				<a id="menu-close" href="#" className="btn btn-danger pull-right hidden-md hidden-lg toggle"><i className="fa fa-times"></i></a>
				<li className="sidebar-brand">
					<a href="#top">Soldier-up <strong>Designs</strong></a>
				</li>
				<li>
					<a href="/" title="Go to Top">Home</a>
				</li>
				<li>
					<a href="/about" title="Go to About Us section">About</a>
				</li>
				<li>
					<a href="/resume" title="Navigate to Jonathan Adcox IT Resume">Resume</a>
				</li>
				<li>
					<a href="/portfolio" title="Navigate to 'Our Services' section">Portfolio</a>
				</li>
				//   Future Development
				<li>
					<a href="#portfolio">Portfolio</a>
				</li> -->
				<li>
					<a href="/blog" title="Our Blog">Blog</a>
				</li>
				<li>
					<a data-toggle="modal" data-href="#loginModal" data-target="#loginModal" style={{cursor:"pointer;"}}> Hosting</a>
				</li>
			</ul>
		</nav>
		<div className="container">
			<div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
				<div className="modal-dialog modal-default">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
							<h3>Login to Hosting Portal - Control Panel</h3>
						</div>
						<div className="modal-body">
							<article className="container-form center-block">
								//   Form Content HERE! -->
								<form method="post" accept-charset="utf-8" autocomplete="off" role="form" className="form-horizontal" action="https://secure.yourwebhosting.com/secureLogin" enctype="application/x-www-form-urlencoded">
									<fieldset>
										<input type='hidden' name='__token_timestamp__' value='1426572610' />
										<input type='hidden' name='__token_val__' value='4d96cad055fac46518825357fcb49390' />
										<input type="hidden" name="destination" value="http://www.yourwebhosting.com/controlpanel/index.bml" />
										//   Name input-->
										<div className="form-group">
											<label className="sr-only" for="credential_0">Username: </label>
											<div className="col-xs-12">
												<input id="credential_0" name="credential_0" type="text" placeholder="Your Username" className="form-control" />
											</div>
										</div>
										//   Email input-->
										<div className="form-group">
											<label className="sr-only" for="credential_1">Password: </label>
											<div className="col-xs-12">
												<input id="email" type="password" name="credential_1" value="" placeholder="Your Password" className="form-control" />
											</div>
										</div>
										//   Form actions -->
										<div className="form-group pull-right">
											<div className="col-md-12 text-right">
												<button type="submit" name="submit" value="Sign In" className="btn btn-lg">Submit</button>
											</div>
										</div>
									</fieldset>
								</form>
							</article>
						</div>
						<div className="modal-footer">
							Login Problems?
							<button type="submit" className="btn btn-dark" data-dismiss="modal" data-href="#collapseTwo" data-toggle="collapse" data-target="#collapseTwo" style={{cursor:"pointer;"}}>Contact Me</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<aside id="accordion" className="social text-vertical-center">
			<div className="accordion-social">
				<ul className="panel-collapse collapse in nav nav-stacked" role="tabpanel" aria-labelledby="social-collapse" id="collapseOne">
					<li><a href="https://www.facebook.com/soldierupdesigns" target="_blank"><i className="fa fa-lg fa-facebook"></i></a></li>
					<li><a href="https://twitter.com/soldierupdesign" target="_blank"><i className="fa fa-lg fa-twitter"></i></a></li>
					<li><a href="https://www.plus.google.com/+soldierupdesigns" target="_blank"><i className="fa fa-lg fa-google-plus"></i></a></li>
					<li><a href="https://github.com/blayderunner123" target="_blank"><i className="fa fa-lg fa-github"></i></a></li>
					<li><a href="https://linkedin.com/in/blayderunner123" target="_blank"><i className="fa fa-lg fa-linkedin"></i></a></li>
					<li><a href="skype:live:soldierupdesigns?call"><i className="fa fa-lg fa-skype" target="_blank"></i></a></li>
					<li><a href="http://stackexchange.com/users/4992378/blayderunner123" target="_blank"><i className="fa fa-lg fa-stack-exchange"></i></a></li>
				</ul>
			</div>
		</aside>

		<div className="masthead">
            <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">



                <ol className="carousel-indicators">
                    <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#bs-carousel" data-slide-to="1"></li>
                    <li data-target="#bs-carousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner">
                    <div className="item slides active">
                        <div className="slide-1"></div>
                            <div className="hero">
                                <hgroup>
                                    <h1>We are creative</h1>
                                    <h3>Get start your next awesome project</h3>
                                </hgroup>
                            <button className="btn btn-hero btn-lg" role="button">See all features</button>
                        </div>
                    </div>
                    <div className="item slides">
                        <div className="slide-2"></div>
                            <div className="hero">
                                <hgroup>
                                    <h1>We are smart</h1>
                                    <h3>Get start your next awesome project</h3>
                                </hgroup>
                                <button className="btn btn-hero btn-lg" role="button">See all features</button>
                            </div>
                        </div>
                        <div className="item slides">
                            <div className="slide-3"></div>
                                <div className="hero">
                                    <hgroup>
                                        <h1>We are amazing</h1>
                                        <h3>Get start your next awesome project</h3>
                                    </hgroup>
                                    <button className="btn btn-hero btn-lg" role="button">See all features</button>
                                </div>
                            </div>
                        </div>
                    </div>
		        </div>


    
</body>
  )
}

export default NavWithCaro;
