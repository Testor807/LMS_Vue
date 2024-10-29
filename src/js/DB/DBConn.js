import { createRequire } from 'module';

export function init(){
    const require = createRequire(import.meta.url);

    const admin = require('firebase-admin');

    // 替換為你的服務帳戶密鑰的路徑
    const serviceAccount = require('../../assets/lms.json');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    const db = admin.firestore();

    return db;
}