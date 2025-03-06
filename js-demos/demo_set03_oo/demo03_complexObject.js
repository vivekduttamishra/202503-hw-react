

let authors = [
    {
        name:'Vivek Dutta Mishra',
        books:[
            {
                title: 'The Accursed God',
                price:299
            },
            {
                title:'Manas',
                price:199
            }
        ]
    },
    {
        name:'Mahatma Gandhi',
        books:[
            {
                title:'My Experiments with the truth',
                price:400
            }
        ]

    }
]


for(let author of authors){
    console.log(author.name)
    for(let book of author.books){
        console.log('\t',book.title)
    }
    console.log('----------------------------------------------------------------\n')
}