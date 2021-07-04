import React, { Component } from 'react'

export default class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenAddUserFrom: false
    }
  }
    
  handleCloseClick = () => {
    this.setState({
      isOpenAddUserFrom: !this.state.isOpenAddUserFrom
    });
  }

  render() {
    if(this.state.isOpenAddUserFrom) {
      return (
        <>
          <div className="d-grid gap-2 mb-2">
            <button onClick={()=>this.handleCloseClick()} className="btn btn-outline-primary" type="button">Đóng lại</button>
          </div>
          <div className="card text-white bg-primary mb-3" style={{maxWidth: '100%'}}>
            <div className="card-header">Thêm thành viên</div>
            <div className="card-body">
              <div className="mb-3">
                <input className="form-control" id type="text" placeholder="Tên user" aria-label="Tên" />
              </div>
              <div className="mb-3">
                <input className="form-control" id type="text" placeholder="Điện thoại" aria-label="Điện thoại" />
              </div>
              <div className="mb-3">
                <select className="form-select" aria-label="Chọn quyền mặc định">
                  <option selected value={1}>Chọn quyền mặc định</option>
                  <option value={1}>Normal</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Admin</option>
                </select>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-success" type="button">Lưu</button>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="d-grid gap-2 mb-2">
            <button onClick={()=>this.handleCloseClick()}  className="btn btn-primary" type="button">Thêm mới</button>
          </div>
          
        </>
      )
    }
    
  }
}
