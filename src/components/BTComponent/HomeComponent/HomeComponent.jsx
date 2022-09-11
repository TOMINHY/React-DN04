import React, { Component } from 'react'
import ContentComponent from '../ContentComponent/ContentComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import NavigationComponent from '../NavigationComponent/NavigationComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='home container-fluid'>
        <h1>HomeComponent</h1>
        <HeaderComponent />
        <div className="row">
          <NavigationComponent />
          <ContentComponent />
        </div>
        <FooterComponent />
      </div>
    )
  }
}
