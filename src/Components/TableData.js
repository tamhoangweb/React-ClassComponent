import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {

  createTableDataRow = () => {
    const dataUser = this.props.dataUser
    dataUser.map((data, index)=>(
      <TableDataRow userName={data.name} key={index}/>
    ))
  }

  render() {
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Quyền</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataUser.map((data, index)=>{
              return (<TableDataRow 
                userName = {data.name}
                phone = {data.phone}
                permission = {data.Permission}
                stt = {index + 1}
                key = {index}
                editUser={()=>{this.props.editUser(data)}}
                deleteUser={()=>{this.props.deleteUser(data.id)}}
              />)
            })}
          </tbody>
        </table>
    )
  }
}