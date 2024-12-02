
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


const firebaseConfig = {
  apiKey: "AIzaSyCfqZD7UZZt-GWmtNhfJyksrv3-8ENRjto",
  authDomain: "insan-cemerlang-d5574.firebaseapp.com",
  projectId: "insan-cemerlang-d5574",
  storageBucket: "insan-cemerlang-d5574.appspot.com",
  messagingSenderId: "1035937160050",
  appId: "1:1035937160050:web:6d77d3874c3f78b2811beb",
  measurementId: "G-EVVQ80Q08C"
};

// Inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function tambahPelanggan(nama, alamat, notlpon) {
  try {
    // menyimpan data ke firebase
    const refDokumen = await addDoc(collection(basisdata, "pelanggan2"), {
      nama: nama,
      alamat: alamat,
      notlpon: notlpon
    })

    // menampilkan pesan berhasil
    console.log("berhasip menyimpan data pelanggan")
  } catch (e) {
    // menampilkan pesan gagal
    console.log("gagal menyimpan data pelanggan" + e)
  }
}
export async function hapusPelanggan(id) {
    await deleteDoc(doc(basisdata,"pelanggan2",id))
  }

export async function ambilDaftarPelanggan() {
  const refDokumen = collection(basisdata, "pelanggan2");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);
  
  let hasilKueri = []; 
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      alamat: dokumen.data().alamat,
      notlpon: dokumen.data().notlpon
    })
  })
  
  return hasilKueri;
}
  
 export async function ubahBarang(id, nama,alamat,notlpon) {
   await updateDoc(
     doc(basisdata, "pelanggan2", id),
     { 
     nama: nama,
     alamat: alamat,
     notlpon:notlpon
       
     })
   }
   
   export async function ambilPelanggan(id) {
    const refDokumen = await doc(basisdata, "pelanggan2", id)
    const snapshotDocumen = await getDoc(refDokumen)
    
    return await snapshotDocumen.data()
  }

