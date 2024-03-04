export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae est cupiditate numquam. Adipisci, at voluptatibus accusantium perspiciatis recusandae tempore odio quasi, non impedit dolore pariatur possimus. Possimus, aut. Quo, dolorum?'
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae est cupiditate numquam. Adipisci, at voluptatibus accusantium perspiciatis recusandae tempore odio quasi, non impedit dolore pariatur possimus. Possimus, aut. Quo, dolorum?'
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae est cupiditate numquam. Adipisci, at voluptatibus accusantium perspiciatis recusandae tempore odio quasi, non impedit dolore pariatur possimus. Possimus, aut. Quo, dolorum?'
        }
    ]
})