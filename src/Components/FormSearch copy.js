import React, { Component } from 'react'

export default class FormSearch extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xl-6 col-12">
          <div className="input-group input-group-gl">
            <input className="form-control fst-italic" id type="text" placeholder="Nhập từ khóa" />
            <button className="btn btn-primary">Tìm</button>
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>

      )
    }
}
