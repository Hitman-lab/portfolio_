import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
    <div>
        <section className="colorlib-work" data-section="work">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Work</h2>
						</div>
					</div>
					{/* <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
						<div className="col-md-12">
							<p className="work-menu"><span><a href="#" className="active">Graphic Design</a></span> <span><a href="#">Web Design</a></span> <span><a href="#">Software</a></span> <span><a href="#">Apps</a></span></p>
						</div>
					</div> */}
					<div className="row">
						<div className="col-md-5 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/img-1.PNG)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Weather Forcast</a></h3>
										<span>Weather Forcast - express-JS, REST API</span>
										<p className="icon">
											<span><a href="https://ancient-plateau-63454.herokuapp.com/" target="_blank">VIEW <i class="fas fa-eye"></i></a></span>
											{/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
											<span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-5 animate-box" data-animate-effect="fadeInRight">
							<div className="project"  style={{backgroundImage: 'url(images/img-2.PNG)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Newsletter</a></h3>
										<span>Newsletter Scubscribers using Mail-Champ</span>
										<p className="icon">
											<span> <a href="https://boiling-spire-34884.herokuapp.com/" target="_blank">VIEW <i class="fas fa-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>	
                        <div className="col-md-5 animate-box" data-animate-effect="fadeInRight">
							<div className="project"  style={{backgroundImage: 'url(images/img-3.PNG)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">TODO List</a></h3>
										<span>TODO list application - Express JS, MongoDB</span>
										<p className="icon">
											<span> <a href="https://tranquil-caverns-48892.herokuapp.com/" target="_blank">VIEW <i class="fas fa-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>	
						<div className="col-md-5 animate-box" data-animate-effect="fadeInRight">
							<div className="project"  style={{backgroundImage: 'url(images/img-4.PNG)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="work.html">Note App</a></h3>
										<span>React based front end application to keep track of Notes</span>
										<p className="icon">
											<span> <a href="https://hitman-lab.github.io/ReactNoteApp/" target="_blank">VIEW <i class="fas fa-eye"></i></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>						 
					</div>
                    <hr />
					<div className="row">
						<div className="col-md-12 animate-box">
							<p><a href="mailto:www.tanuj200@email.com" className="btn btn-primary btn-lg btn-load-more"><i class="far fa-envelope fa-2x"></i></a></p>
						</div>
					</div>
				</div>
			</section>
    </div>
    )
  }
}
