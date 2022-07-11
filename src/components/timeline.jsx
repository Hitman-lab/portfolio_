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
                        <h2>Associate Consultant at Capgemini <span>2019-present</span></h2>
                        <span><b>Guidewire PolicyCenter Developer</b></span>
                        <p>
                          <li>Strong work experience in Personal Auto Insurance with Guidewire PolicyCenter.</li>
                          <li>Gained good hands-on experience in the Integration stream of Policy Center v10.</li>
                          <li>Worked along with the Business team on analyzing and prioritizing the requirements for each rollout.</li>
                          <li>Prepared technical design documents and test cases after developing the code.</li>
                          <li>Trained and mentored Junior Programmers by giving KTs, and also helped the team from a technical standpoint.</li>
                          <li>Acquired a basic knowledge in Guidewire Billing Center as well</li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cybersecurity engineer Intern at VTF <span>May 2022 - July 2022</span></h2>
                        <p>Things which learned through out the internship: <br />
                          1.Professional Network Visibility <br />
                          2.Professional Etiquette <br />
                          3.CyberSecurity.</p>
                          <p>Skills: OWASP10 · pfSense · Burp Suite · Vulnerability Assessment · Nmap · OSINT · MITRE ATTACK · Splunk · Tenable Nessus · CTF · Metasploit · Penetration Testing</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>CTF Player<span></span></h2>
                        <span><b>Freelance - TryHackMe</b></span>
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
                        <p>Unmaad is the annual cultural festival presented by Indian Institute of Management Bangalore. Conducted over a period of three days, Unmaad includes events like dramatics, music performances, dances, quizzes, debates, street plays, professional concerts and many more.It's one of the great platforms to develop management skills.</p>
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
