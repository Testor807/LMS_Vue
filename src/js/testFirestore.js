import { createRequire } from 'module';
// 測試連接
export async function testFirestoreConnection() {
    try {
        const require = createRequire(import.meta.url);

        const admin = require('firebase-admin');

        // 替換為你的服務帳戶密鑰的路徑
        const serviceAccount = require('../assets/lms.json');

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });

        const db = admin.firestore();

        // 測試讀取數據
        const docRef = db.collection('testCollection').doc('testDoc');
        await docRef.set({ message: 'Hello, Firestore!' }); // 寫入測試文檔
        const doc = await docRef.get();

        if (!doc.exists) {
            //console.log('No such document!');
            return "No such document!";
        } else {
            //console.log('Firestore connection successful! Document data:', doc.data());
            return "Firestore connection successful!";
        }
        // 清理測試數據
        await docRef.delete();
    } catch (error) {
        console.error('Error connecting to Firestore:', error);
    }
}