import {init} from './DBConn'
class Account{
    constructor(){
        this.db = init()
        this.docRef = this.db.collection('LMS').doc('Tables').collection('Account');
    }
}