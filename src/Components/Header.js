import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Project Quản lý thành viên hệ thống</h1>
            <p>Sử dụng React JS và dữ liệu kiểu JSON</p>
            <p />
          </div>
        </div>
      </section>
    )
  }
}
