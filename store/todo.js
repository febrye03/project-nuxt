export const state = () => ({
    items: [{
            no: 1,
            nama: 'todo 1',
            deskripsi: 'asal',
        },
        {
            no: 2,
            nama: 'todo 2',
            deskripsi: 'asal',
        },
        {
            no: 3,
            nama: 'todo 3',
            deskripsi: 'asal',
        }
    ]
})

export const mutations = {
    tambah: (state, payload) => {
        const noTambah = payload.noTambah
        const namaTambah = payload.namaTambah
        const deskripsiTambah = payload.deskripsiTambah
        const baru = {
            no: noTambah,
            nama: namaTambah,
            deskripsi: deskripsiTambah,
        }
        state.items.push(baru)
    },
    edit: (state, std) => {
        const noEdit = std.noEdit
        const namaEdit = std.namaEdit
        const deskripsiEdit = std.deskripsiEdit
        const idx = state.items.findIndex((val) => {
            return val.no === noEdit
        })
        state.items[idx].nama = namaEdit
        state.items[idx].deskripsi = deskripsiEdit
    },
    deleteItem(state) {
        const index = state.items.indexOf(state)
        confirm('Are you sure you want to delete this item?') && state.items.splice(index, 1)
    },
}