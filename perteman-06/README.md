Nama    : Hadian Nelvi
Nim     :
Kelas   : TI-3C

LAPORAN PRAKTIKUM 6

Praktikum1
![gambar](img/foto1.png)

=> Bootstrap berhasil diterapkan dan class yang disediakan oleh bootstrap dapat dipakai pada nextJs dengan mengikuti langkah-langkah yang telah dijelaskan.

Praktikum2
![gambar](img/foto2.png)
![gambar](img/foto3.png)

![gambar](img/foto4.png)

Terjadi error karena menurut saya pada authSlice terdapat initialState isLogin: false di mana hasilnya jika ke /login maka memang di set ke anda telah logout. Nah kerana kita pencet login dan kita berada di state di mana islogin pada local storage menjadi true, lalu direfresh

soal ke 2

kalau tidak mengunakan parse tidak bisa. karena ,tujuan dari parse adalah untuk mengkonversi baris html menjadi javascript. Karena biasanya java script mengguanakan className sedangkan ini hanya menggunakan class. Lalu jika tidak memakai parse terdapat error jsx harus punya parent class yang dimana tidak dapat digunakan di ternary operation seperti ini, jadi menggunakan parse merupakan langkah yang baik dan efektif serta efisien.


Jawaban soal 

1.Digunakan untuk mengimpor fungsi useEffect dari library React. _app.tsx adalah file khusus yang digunakan untuk mengonfigurasi aplikasi,yang mengatur hal-hal seperti layout global, pembaruan global, dan lain-lain.

2.ketika tidak menggunakan useEffect maka jika button modal diklik di index, maka popup tidak akan muncul karena tidak ada aksi apa apa ketika button tersebut di klik

3.agar tidak konflik dengan kata kunci class yang sudah ada di JavaScript

4.Bisa, redux reducer bisa disimpan lebih dari satu di store, seperti contoh praktikum ada 2 reducer, authReducer dan counterReducer, keduanya berada di 1 state tree.

5.kegunaan nya adalah untuk mengelola state dari proyek dan digunakan untuk menyimpan state ke penyimpanan lokal.

6.digunakan untuk mengambil data yang berasal dari state.auth dan disimpan dalam variabel isLogin

7.digunakan untuk mengambil data yang berasal dari state.counter dan disimpan dalam variabel totalCounter