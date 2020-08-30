import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at CAPGEMINI <span>2019-present</span></h2>
                        <p>I recently have joined the Capgemini as a Software Engineer in Kemper Accout. My major part of the work has been into the field of Policy Center. Which enables developers at Kemper to do rapid development. I am also exploring the role of Billing Center to be part of fully fledged Guideware Products.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Campus Ambassador at IIM Bangalore<span> Dec 2017 - Feb 2018</span></h2>
                        <p>Unmaad is one of the great platforms to develop management skills, after showing up my work, I'm glad that I've been selected as Campus Ambassador on my capmus and pass on the skills which I've learned. </p>
                        {/* <p>I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p> */}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Campus Ambassador at KURUKSHETRA, College of Engineering Guindy Anna University <span>Jan 2017 - Feb 2018</span></h2>
                        <p>I'm privileged to lead Student Club initiated by Kurukshetra Team on Campus constituting over-all 20 selected students on campus. </p>
                        {/* <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>  */}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
