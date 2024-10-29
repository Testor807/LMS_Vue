import {init} from './DBConn.js'

class Book{
    constructor(){
        this.db = init()
        this.docRef = this.docRef = this.db.collection('LMS').doc('Tables').collection('Book');
    }

    async getAll(){
        const snapshot = await this.docRef.get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
        });
    }
}

const book = new Book()
book.getAll()