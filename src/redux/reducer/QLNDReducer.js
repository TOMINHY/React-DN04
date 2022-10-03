// rxr
const initialState = {
    mangND: [
        {taiKhoan: 'user1', hoTen: 'Nguyễn Thị Khách Hàng', matKhau: '123456', sdt: '09143443', email: 'test@gmail.com', maLoaiND: 'khachHàng'},
        {taiKhoan: 'user2', hoTen: 'Nguyễn Thị Khách Hàng', matKhau: '123456', sdt: '09143443', email: 'test@gmail.com', maLoaiND: 'khachHàng'}
    ],
}



export const QLNDReducer = (state = initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}
