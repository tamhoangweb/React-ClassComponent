import React, { Component } from 'react'
import Header from './Header'
import TableData from './TableData'
import FormSearch from './FormSearch'
import AddUser from './AddUser'
import DataUser from './DataUser.json'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenForm: false,
      data: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : DataUser,
      searchText: '',
      isOpenEditUserForm: false,
      user: {}
    }
  }
  
  handleOpenForm = ()=>{
    this.setState(
      {isOpenForm : !this.state.isOpenForm}
    );
  }

  handleSearch = (dl)=>{
    this.setState({
      searchText: dl
    });
  }

  handleAddUser = (user)=>{
    let users = this.state.data 
    users.push(user)
    this.setState({
      data: users
    });
    // console.log('this.state.data', this.state.data)
    localStorage.setItem('userData', JSON.stringify(this.state.data))
    console.log('userData', localStorage.getItem('userData'))
  }

  editUser = (user) => {
    this.setState({
      isOpenEditUserForm: !this.state.isOpenEditUserForm,
      user: user
    });
    this.state.data.forEach((value, index)=>{
      if(value.id === user.id){
        value.name = user.name
        value.phone = user.phone 
        value.Permission = user.Permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  deleteUser = (idUser) => {
    // console.log(idUser)
    let tempData = this.state.data.filter(user => user.id !== idUser)
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData))
    console.log(tempData)
    console.log(this.state.data)
    console.log(localStorage.getItem('userData'))
  }

  // componentWillMount() {
  //   if(localStorage.getItem('userData') === null) {
  //     localStorage.setItem('userData', JSON.stringify(DataUser))
  //   } 
  //   else {
  //     localStorage.setItem('userData', JSON.stringify(this.state.data))
  //   }
  // }
  

  render() {

    // if(localStorage.getItem('userData') === null) {
    //   localStorage.setItem('userData', JSON.stringify(DataUser))
    // } 
    // else {
    //   localStorage.setItem('userData', JSON.stringify(this.state.data))
    // }

    let resultSearch = []
    let dataUsers = this.state.data
    dataUsers.forEach(item => {
      if(item.name.indexOf(this.state.searchText) !== -1 || item.phone.indexOf(this.state.searchText) !== -1) {
        resultSearch.push(item)
      }
    });
    // console.log(resultSearch)
    return (
      <div>
        <Header />
        <div className="container">
          <FormSearch 
          handleSearch={(dl)=>this.handleSearch(dl)} 
          ketnoi={()=>this.handleOpenForm()} 
          isOpenForm={this.state.isOpenForm}
          isOpenEditUserForm={this.state.isOpenEditUserForm}
          editUser={(user)=>this.editUser(user)}
          user={this.state.user}
          />
          <div className="row">
            <div className="col">
              <TableData 
              dataUser={resultSearch} 
              editUser={(user)=>this.editUser(user)}
              deleteUser={(user)=>this.deleteUser(user)}
              />
            </div>
            <AddUser handleAddUser={(user)=>this.handleAddUser(user)} isOpenForm={this.state.isOpenForm}/>
          </div>
        </div>
      </div>
    )
  }
}
