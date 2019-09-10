export const state = () => ({
    items: [],
    nomor: 0,
})

export const mutations = {
    tambah(state) {
        state.nomor++
    },
}

export const getters = {

}