import app from 'firebase/app';
// import Swal from 'sweetalert2'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

//test
// const config = {
//     apiKey: "AIzaSyC_0QtkXQApYKK101apDFYf6pn7LNAWItg",
//     authDomain: "plankawen-61a3a.firebaseapp.com",
//     databaseURL: "https://plankawen-61a3a.firebaseio.com",
//     projectId: "plankawen-61a3a",
//     storageBucket: "plankawen-61a3a.appspot.com",
//     messagingSenderId: "745867454643",
//     appId: "1:745867454643:web:a3e3cfba41ea05de"
//   }
//production
var config = {
    apiKey: "AIzaSyDJwYfTFCcAG71iHs6pqxIyBJaBRa-qOH8",
    authDomain: "plankawen-19918.firebaseapp.com",
    databaseURL: "https://plankawen-19918.firebaseio.com",
    projectId: "plankawen-19918",
    storageBucket: "plankawen-19918.appspot.com",
    messagingSenderId: "79976166898",
    appId: "1:79976166898:web:b6fa8275211bf940b9a76b",
    measurementId: "G-3ZEDEV7BH1"
  };

class Firebase {
    constructor(){
        !app.apps.length ? app.initializeApp(config) : app.app();
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
        this.provider = new app.auth.GoogleAuthProvider()
    }

    async check(email){
        return await this.db.collection('client').where('email', '==', email).get()
    }

    // async checkAuth(email){
    //     return await app.auth.fetchProvidersForEmail(email);
    // }

    async signIn(email, password){
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async signInWithSocial(){
        return await this.auth.signInWithPopup(this.provider );
    }
    async updateClientId(id){
        return await this.db.collection('client').doc(id).update({documentId:id})
    }
    async signUpClient(data){
        return await this.db.collection('client').add(data)
    }

    async createClient(email, password){
        await app.auth().createUserWithEmailAndPassword(email, password).then( async ()=>{
            var user = app.auth().currentUser;

            user.sendEmailVerification().then(function() {
            // Email sent.
            alert('Registered! please check email for verification.')

            window.location.href = '/'

            }).catch(function(error) {
            // An error happened.
            });
        }).catch((err)=>{
            alert(err)
        })
    }


    async emailVerification(){
        var user = app.auth().currentUser;

        user.sendEmailVerification().then(function() {
        // Email sent.
        alert('Registered! please check email for verification.')

        window.location.href = '/'

        }).catch(function(error) {
        // An error happened.
        });
    }

    signOut(){
        return this.auth.signOut();
    }

    isInitialized(){
        return new Promise( resolve => {
            this.auth.onAuthStateChanged(resolve);
        })
    }

    currentUser(){
        return this.auth.currentUser;
    }

    async getImagesService(images, serviceType, email){
        var storageRef = this.storage.ref();
        var newImg = [];
        await images.map(async (x,i)=> {
            var img     = x;
            if (img.urlStorage) {
                let param = {
                    urlStorage:img.urlStorage
                }
                newImg.push(param);
            }else{
                var base    = img.base64;
                var locRef     = storageRef.child(`service/${email}/${serviceType}/${x.name}`)
                var locResult = locRef.putString(base, 'data_url');
    
                await locResult.on('state_changed',snapshot=>{
    
                },(error)=>{
                    console.log(error)
                },async ()=>{
                    await locResult.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        let param = {
                            urlStorage:downloadURL
                        }
                        newImg.push(param);
                    })
                })    
            }
        })
        console.log(newImg);

        return newImg
    }

    async getImagesPackage(images, email){
        var storageRef = this.storage.ref();
        var newImg = [];
        await images.map(async (x,i)=> {
            var img     = x;
            if (img.urlStorage) {
                let param = {
                    urlStorage:img.urlStorage
                }
                newImg.push(param);
            }else{
                var base    = img.base64;
                var locRef     = storageRef.child(`package/${email}/${x.name}`)
                var locResult = locRef.putString(base, 'data_url');
    
                await locResult.on('state_changed',snapshot=>{
    
                },(error)=>{
                    console.log(error)
                },async ()=>{
                    await locResult.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        let param = {
                            urlStorage:downloadURL
                        }
                        newImg.push(param);
                    })
                })    
            }
        })
        console.log(newImg);

        return newImg
    }

    async createBooking(serviceName, data){
        return await this.db.collection(serviceName).add(data)
    }
  
    async updateBooking(serviceName, data, id){
        return await this.db.collection(serviceName).doc(id).set(data)
    }
    
    //pending patot ada status = approved
    async checkServiceType(serviceType, email){
        return await this.db.collection(serviceType).where('email', '==', email).get() 
    }

    async checkBookingType(bookType, email){
        return await this.db.collection(bookType).where('email', '==', email).get() 
    }

    async getPackageById(id){
        return await this.db.collection('package').doc(id).get() 
    }

    async deleting(serviceType, id){
        await this.db.collection(serviceType).doc(id).delete();
        location.reload();
    }

    async deletingPackage(id){
        await this.db.collection('package').doc(id).delete();
        location.reload();
    }

    async verification(){
        var user = app.auth().currentUser;
        user.sendEmailVerification().then(function() {
            // Email sent.
            alert('Sent! please check email for verification.')
        }).catch(function(error) {
            console.log(error)
        });
    }

    async getVendorUsers(state){
        return await this.db.collection('vendor').where('kawasan', 'array-contains', state).get()
    }

    async getVendorUser(email){
        return await this.db.collection('vendor').where('email', '==', email).get()
    }

    async getServiceByEmail(email, serviceName){
        return await this.db.collection(serviceName).where('email', '==', email).get()
    }

    async getServiceByState(state, serviceName){
        return await this.db.collection(serviceName).where('areaCovered', 'array-contains', state).get()
    }

    async getPackageByState(state){
        return await this.db.collection('package').where('coveredArea', 'array-contains', state).get()
    }


    async getVendorUser(email){
        return await this.db.collection('vendor').where('email', '==', email).get()
    }

    async getPackages(email){
        return await this.db.collection('package').where('email', '==', email).get()
    }

    async createPackage(data){
        return await this.db.collection('package').add(data)
    }

    async updatePackage(id, data){
        return await this.db.collection('package').doc(id).update(data)
    }
    
}



export default new Firebase();