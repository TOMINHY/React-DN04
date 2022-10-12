import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

export default class extends Component {
  render() {
    return (
      <div className='container py-5'>
        <h1>Quản Lý Người Dùng</h1>
        <Form/>
        <Table/>
      </div>
    )
  }
}
