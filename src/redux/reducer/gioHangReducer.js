//khai báo giá trị mặc định cho state
const gioHang = []

export const gioHangReducer = (state = gioHang, action) => {
    // console.log(action);
    switch (action.type) {
        case 'THEM_GIO_HANG':
            //Kiểm tra sản phẩm có tồn tại trong giỏ hanghf chưa
            let spFind = state.find((sp) => {
                return sp.maSP === action.sanPham.maSP
            })
            if (spFind) {
                // tìm thấy => có sản phẩm trong giỏ hàng
                spFind.soLuong += 1;
            } else {
                // tạo sản phẩm giỏ hàng
                // Spread Operator
                let spGH = { ...action.sanPham, soLuong: 1 }
                state.push(spGH)

            }
            console.log(state)
            // return về giá trị mới của state
            //? Cơ chế nếu state đổi giá trị thì tự động render lại các component có kết nối với store
            //! Redux đang không nhận biết là state đã đổi giá trị => UI không render lại
            //! imutable tính bất biến => tham chiếu (địa chỉ ô nhớ )
            //! => redux sẽ kiểm tra địa chỉ ô nhớ của state nếu địa chỉ ô nhớ không đổi => giá trị không đổi => không render lại UI
            // trả về 1 mảng mới của state (dùng cú pháp coppy của ES6)
            return [...state];

        case 'XOA_GIO_HANG':
            let gioHangCapNhat = state.filter((sp) => {
                // trả về mảng mới chứa các sản phẩm cần giữ lại
                return sp.maSP !== action.maSPXoa
            })
            // update vào state
            // vì gioHangCapNhat có địa chỉ ô nhớ mới thì khi gán vào state thì state sẽ có địa chỉ ô nhớ mới 
            state = gioHangCapNhat
            return state;

        case 'DOI_SO_LUONG':
            let spFindDoi = state.find((sp) => {
                return sp.maSP === action.maSPDOI
            });
            if (spFindDoi) {
                // tìm thấy
                spFindDoi.soLuong += action.soLuong
                if(spFindDoi.soLuong < 1){
                    spFindDoi.soLuong =  spFindDoi.soLuong -  action.soLuong
                }
            }
            return [...state]


        default:
            return state;
    }
}