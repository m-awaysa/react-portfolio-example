import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center text-light bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className=" mb-4">LOCATION</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="/"><i className="fab fa-fw fa-facebook-f" /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="/"><i className="fab fa-fw fa-twitter" /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="/"><i className="fab fa-fw fa-linkedin-in" /></a>
              <a className="btn btn-outline-light btn-social mx-1" href="/"><i className="fab fa-fw fa-dribbble" /></a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created by.
              </p>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}
