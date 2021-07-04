import React, { Component } from 'react'
import EditUserForm from './EditUserForm';

export default class FormSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textSearch: ''
    }
  }
  

  showButton = () => {
    if(this.props.isOpenForm) {
      return (
        <button onClick={()=>{this.props.ketnoi()}} className="btn btn-outline-success float-end">Đóng lại</button>
      )
    } else {
      return (
        <button onClick={()=>{this.props.ketnoi()}} className="btn btn-success float-end">Thêm mới</button>
      )
    }
  }

  isSearching = (e)=>{
    this.setState(
      {textSearch: e.target.value}
    )
    console.log(e.target.value)
    console.log(this.state.textSearch)
    this.props.handleSearch(this.state.textSearch)
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col">
          <div className="input-group input-group-gl">
            <input onChange={(e)=>this.isSearching(e)} className="form-control fst-italic" type="text" placeholder="Nhập từ khóa" />
            <button onClick={(dl)=>this.props.handleSearch(this.state.textSearch)} className="btn btn-primary">Tìm</button>
          </div>
        </div>
        <div className="col">
          
          {this.showButton()}

        </div>
        <div className="col-xs-12">
          <hr />
        </div>
        {this.props.isOpenEditUserForm && <EditUserForm editUser={(user)=>this.props.editUser(user)} user={this.props.user}/>}
      </div>

      )
    }
}
