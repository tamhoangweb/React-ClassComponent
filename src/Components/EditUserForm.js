import React, { Component } from 'react'

export default class EditUserForm extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      id: this.props.user.id,
      name: this.props.user.name,
      phone: this.props.user.phone,
      Permission: this.props.user.Permission
    }
  }
  
  handleChangeInput = (e) => {
    const name = e.target.name 
    const value = e.target.value
    this.setState({
      [name]: value
    }); 
  }

  // editUserInfo = (info)=>{

  //   this.setState({

  //   });
  // }

  render() {
    return (
      <div className="col-lg-4 col-md-8 col-xs-12">
          <div className="card text-white bg-warning mb-3" style={{maxWidth: '100%'}}>
            <div className="card-header text-center h4">Sửa thông tin user</div>
            <form className="card-body">
              <div className="mb-3">
                <input onChange={(e)=>{this.handleChangeInput(e)}} name="name" className="form-control" type="text" defaultValue={this.props.user.name} aria-label="Tên" />
              </div>
              <div className="mb-3">
                <input onChange={(e)=>{this.handleChangeInput(e)}} name="phone" className="form-control" type="text"  defaultValue={this.props.user.phone} />
              </div>
              <div className="mb-3">
                <select onChange={(e)=>{this.handleChangeInput(e)}} defaultValue={this.props.user.Permission} name="Permission" className="form-select" >
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="d-grid gap-2">
                <input onClick={()=>this.props.editUser(this.state)} className="btn btn-danger" type="button" value="Lưu" />
              </div>
            </form>
          </div>
        </div>
    )
  }
}
