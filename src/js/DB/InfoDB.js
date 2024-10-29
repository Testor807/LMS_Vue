import {init} from './DBConn.js'

class Library{
    constructor(){
        this.db = init()
    }
}