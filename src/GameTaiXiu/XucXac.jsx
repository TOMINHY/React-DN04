import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
  render() {
    console.log(this.props)
    let {mangXucXac,banChon} = this.props.game
    console.log(banChon);
    return (
      <div className='row w-50 mx-auto'>
            <div className="col-2">
                <button onClick={()=>{
                  let action = {
                    type:'DAT_CUOC',
                    datCuoc:true
                  }
                  this.props.dispatch(action)
                }} style={{padding:'50px'}} className='btn btn-danger'>TÀI</button>
            </div>
            <div className="col-8 text-center my-5">
              <img style={{width:'50px'}} src={mangXucXac[0].hinh} alt="" />
              <img style={{width:'50px'}} src={mangXucXac[1].hinh} alt="" />
              <img style={{width:'50px'}} src={mangXucXac[2].hinh} alt="" />
            </div>
            <div className="col-2">
                <button onClick={()=>{
                    let action = {
                      type:'DAT_CUOC',
                      datCuoc:false
                    }
                    this.props.dispatch(action)
                }} style={{padding:'50px'}} className='btn btn-primary'>XỈU</button>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    game: rootReducer.gameReducer
  }
}
export default connect(mapStateToProps)(XucXac)
