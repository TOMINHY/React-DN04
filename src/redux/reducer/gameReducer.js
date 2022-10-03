//rxr
// giá trị mặc định của state
// game: mangXucXac, banChon, tongBan, soBanThang
const game = {
    mangXucXac: [
        { hinh: './img/game/1.png', diem: 1 },
        { hinh: './img/game/2.png', diem: 2 },
        { hinh: './img/game/3.png', diem: 3 },
    ],
    banChon: true,
    tongBan: 0,
    soBanThang: 0
}

export const gameReducer = (state = game, action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            // console.log(action)
            state.banChon = action.datCuoc;
            return { ...state }; // đổi địa chỉ ô nhớ cho state 
        case 'LAC_XUC_XAC':
            // Math.floor(Math.random() * 6) + 1;
            let mangNgauNhien = [];// mảng chứa các đối tượng xúc xắc 
            for (let i = 0; i < 3; i++) {
                let matXucXac = Math.floor(Math.random() * 6) + 1;
                let xucXac = {
                    hinh: `./img/game/${matXucXac}.png`,
                    diem: matXucXac
                }
                mangNgauNhien.push(xucXac)
            }
            // console.log(mangNgauNhien)
            //tổng điểm >= 11 => tài ;  tổng điểm  <= 11 => xỉu

            state.mangXucXac = mangNgauNhien

            let tongDiem = state.mangXucXac.reduce((tong, xucXac, index) => {
                return tong += xucXac.diem;
            }, 0)
            console.log(tongDiem);
            // điều kiện thắng
            //TH1: banChon:true(tài) && tổng điểm >= 11 => win
            //TH2: banChon:false(xỉu) && tổng điểm < 11 => win

            if ((state.banChon && tongDiem >= 11) || (!state.banChon && tongDiem < 11)) {
                // người chơi thắng 
                state.soBanThang += 1;
            }

            state.tongBan += 1;

            return { ...state }
        default:
            return state
    }
}
