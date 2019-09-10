export const state = () => ({
    items: [],
    nomor: 0,

})

export const mutations = {
    savexxx(state) {
        console.log('string')
    },
    tambah(state) {
        state.nomor++
    }
}