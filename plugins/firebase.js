import firebase from 'firebase/app'  // firebase全般の機能を利用するために読み込み
import 'firebase/auth'  // ログイン機能を使うために読み込み
import 'firebase/firestore'  // データベース機能を使うために読み込み

// firebaseの準備ができている場合のみに設定する
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAVwQDKJ3tvk1W_HHfh7-naUsQExCTgvL0",
    authDomain: "vuejs-slack-clone-app.firebaseapp.com",
    databaseURL: "https://vuejs-slack-clone-app.firebaseio.com",
    projectId: "vuejs-slack-clone-app",
    storageBucket: "vuejs-slack-clone-app.appspot.com",
    messagingSenderId: "370225786412"
  }
  firebase.initializeApp(config)  // configによってfirebaseの設定を行う
}

const db = firebase.firestore()  // データベースを定義
export {
  firebase,
  db
}