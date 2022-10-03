import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
  render() {
    console.log(this.props);
    let { banChon, tongBan, soBanThang } = this.props.game;
    return (
      <div className='result text-center'>
        <p style={{ fontWeight: 'bold', fontSize: '35px' }}>BẠN CHỌN: <span className='text-danger'>{ banChon ? "TÀI" : "XỈU"}</span></p>
        <p style={{ fontWeight: 'bold', fontSize: '35px' }}>SỐ BÀN THẮNG : <span className='text-success'>{soBanThang}</span></p>
        <p style={{ fontWeight: 'bold', fontSize: '35px' }}>TỔNG SỐ BÀN CHƠI: <span className='text-primary'>{tongBan}</span></p>
        <button onClick={()=>{
          let action ={
            type:'LAC_XUC_XAC',
          }
          this.props.dispatch(action)
        }} style={{ padding: '50px' }} className='btn btn-success'>PLAY</button>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer) => {
  return {
    game: rootReducer.gameReducer
  }
}


export default connect(mapStateToProps)(KetQua)
