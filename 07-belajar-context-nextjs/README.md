Nama    : Hadian Nelvi
Kelas   : TI-3C
Nim     : 

Prakktikum 1 : Membuat Variasi Ukuran Teks Heading dengan context

Langakah 1 : Buat project baru dan repo baru di github 
![gambar](img/1.jpeg)

Langkah 2 : Buat Struktur Folder dengan prinsip atomic design
![gambar](img/2.jpeg)
Pada langkah ke 2 ini saya mengiinput kode yang sesuai dengan panduan praktikum.

Soal 1
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
![gambar](img/3.jpeg)
Dengan menggunakan atomic design ini, struktur penulisan kode untuk sintaks lebih mudah digunakan dan untuk component yang memiliki struktur yang mirip ataupun class yang sama dapat menggunakan function component yang sudah dibuat tanpa harus menulis kode yang sama berulang kali, sehinga lebih meudahkan dalam penulisan kode atau pemangilan kode berikutnya . hanya perlu memasukkan parameter untuk kedinamisan tampilkan yang dihasilkan dari kode yang dibuat. Tampilan laman yang ditampilkan dapat seperti hasil dari kode html yang umum digunakan, dengan variasi penggunaan heading.


Langkah 3 :Buat dan gunakan Contect
![gambar](img/5.jpeg)
![gambar](img/6.jpeg)

Langkah 4 : Sediakan Contect
![gambar](img/4.jpeg)
![gambar](img/7.jpeg)

Soal no 2 :

Meneruskan suatu value dapat dilakukan dengan menggunakan context, sehingga child hanya perlu mengakses value dari node atas terdekat atau parent, tanpa perlu diberi value untuk masing-masing child. Meskipun menggunakan context, tampilan laman yang dihasilkan masih sama seperti sebelumnya.

Langkah 5: Menggunakan dan menyediakan context dari komponen yang sama
![gambar](img/8.jpeg)
![gambar](img/9.jpeg)
![gambar](img/10.jpeg)
![gambar](img/11.jpeg)

Soal No 3:

Selain dapat membagikan value ke child secara manual, context dapat mengirimkan data dengan operasi atau pola yang sama, seperti pada langkah keenam ini, dapat dilakukan pengiriman value secara auto increment, namun perbedaan tampilan saat ini adalah, ukuran font lebih kecil, dikarenakan dengan value default 1, maka saat sampai ke child nya sudah dilakukan penambahan.

Praktikum 2: Membuat Context melewati komponen perantara

Langkah 1:Buat komponen atom baru
![gambar](img/12.jpeg)
![gambar](img/13.jpeg)
![gambar](img/14.jpeg)
![gambar](img/15.jpeg)
![gambar](img/16.jpeg)

Langkah 2: Tambahkan ProfilePage ke page.tsx lalu run
![gambar](img/17.jpeg)
![gambar](img/18.jpeg)
![gambar](img/19.jpeg)
![gambar](img/20.jpeg)
![gambar](img/21.jpeg)

Praktikum 3: Membuat Context Tema Light/Dark

Langkah 1: Membuat variabel tema
![gambar](img/1.png)
![gambar](img/2.png)

Langkah 2: Buat komponen atom NavBar
![gambar](img/3.png)

Langkah 3: Buat Provider
![gambar](img/4.png)

Langkah 4: Buat masing-masing page
![gambar](img/5.png)
![gambar](img/6.png)

Langkah 5: Buat routing
![gambar](img/7.png)
![gambar](img/8.png)

soal No 5

apakah toggle button tema sudah berfungsi ? jika belum, silakan perbaiki!
![gambar](img/8.png)
![gambar](img/9.png)
![gambar](img/10.png)
![gambar](img/11.png)
![gambar](img/12.png)
![gambar](img/13.png)

Mengapa ketika refresh atau berpindah halaman tema tidak permanen ? Buatlah menjadi permanen walaupun page sudah direfresh dan pindah halaman!

Hal tersebut dapat terjadi karena tidak disimpannya state tema dalam browser, masalah ini dapat diatasi dengan kode sebagai berikut.






