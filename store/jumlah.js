export const state = () => ({
    hasil: 0
})

export const mutations = {
    tambah: (state, payload) => {
        const form1 = payload.form1
        const form2 = payload.form2
        let jumlah = form1 + form2
        state.hasil = jumlah
    }
}

export const getters = {
    kuadrat: (state, getters) => {
        return state.hasil * state.hasil
    },
    kubik: (state, getters) => {
        return state.hasil * state.hasil * state.hasil
    }
}