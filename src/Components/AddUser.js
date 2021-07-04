import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name:"",
      phone:"",
      Permission:3,
      user:{}
    }
  }
  

  handleChangeInput = (e)=>{
    const ten = e.target.name 
    const giatri = e.target.value 
    this.setState({
      [ten] : giatri
    });
    let item = {}
    item.id = uuidv4()
    item.name = this.state.name
    item.phone = this.state.phone
    item.Permission = this.state.Permission
    this.setState({
      user: item
    });
  }

  render (){
    if(this.props.isOpenForm) {
      // console.log(this.props)
      return (
        <div className="col-xl-3">
          <div className="card text-white bg-primary mb-3" style={{maxWidth: '100%'}}>
            <div className="card-header">Thêm thành viên</div>
            <form className="card-body">
              <div className="mb-3">
                <input name="name" onChange={(e)=>this.handleChangeInput(e)} className="form-control" type="text" placeholder="Tên user" aria-label="Tên" />
              </div>
              <div className="mb-3">
                <input name="phone" onChange={(e)=>this.handleChangeInput(e)} className="form-control" type="text" placeholder="Điện thoại" aria-label="Điện thoại" />
              </div>
              <div className="mb-3">
                <select name="Permission" onChange={(e)=>this.handleChangeInput(e)} className="form-select" aria-label="Chọn quyền mặc định">
                  <option value={3}>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="d-grid gap-2">
                <input onClick={()=>this.props.handleAddUser(this.state.user)} className="btn btn-success" type="reset" value="Lưu" />
              </div>
            </form>
          </div>
        </div>
      )
    } else {
      return (<> </>)
    }
  }
    
}


