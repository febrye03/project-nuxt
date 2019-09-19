export const state = () => ({
    items: []
})

export const mutations = {
    simpan: (state, payload) => {
        const username = payload.username
        const email = payload.email
        const password = payload.password
        const save = {
            username: username,
            email: email,
            password: password,
        }
        state.items.push(save)
    },
}