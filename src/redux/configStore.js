// Store: nơi chứa các giá trị cần đổi (state)
import { combineReducers, createStore } from "redux";
import {gioHangReducer} from './reducer/gioHangReducer'
import { gameReducer } from "./reducer/gameReducer";
import { QLNDReducer } from "./reducer/QLNDReducer";

//state ở RCC là đối tượng
// state = {
//gioHang:[]
// }
// reducer là state lưu trên store redux
// rootReducer: chứa tất cả các state


const rootReducer = combineReducers({
    //khai báo và lưu trữ các state của ứng dụng
    //reducer là 1 hàm trả về state
    //default parameter
    //reducer sẽ nhận tất cả data đẩy lên store => để phần loại nghiệp vụ cần sử lý  => kiểm tra type của action
    // gioHangReducer: gioHangReducer
    // Object literal
    gioHangReducer,
    gameReducer,
    QLNDReducer
})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());