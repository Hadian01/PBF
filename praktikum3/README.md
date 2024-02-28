Nama    : Hadian Nelvi
Nim     : 2341728025

Pada Soal Pertama ini saya melakukan bebrapa step untuk mendapatkan hasil yang sesuai dengan perintah modul
![gambar-pratikum](img/gambar1.png)

=> Yang dapat saya pelajari adalah untuk memangil gambar ini saya harus membuat components terlebih dahulu . di dalam components ini saya membuat file profile.tsx .setelah itu  components ini dapat di panggil pada halaman page.tsx tanpa mengimput kode yang panjang cukup panggil components profile tadi. selain itu ada yang harus di modif juga di bagian next.config.mjs nya yaitu menjadi 

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['i.imgur.com'],
    },
  };

  export default nextConfig;


Pada Soal No 2 saya mendapatkan hasil yang sama dengan percobaan pertama hanya saja ini cara mendapatkan hasilnya berbeda
![gambar-pratikum](img/gambar2.png)

Penjelasan :
-> disini saya membuat file baru di component dengan nama gallery.tsx yang mana fungsinya untuk mengimpor dan merender beberapa instansi dari komponen Profile.

-> disini saya juga File page.tsx dan menempatkan komponen <Gallery /> di dalam fungsi Home, yang kemudian akan dirender di halaman.

->untuk next.config.mjs tetap sama dengan praktikum pertama dan tidak ada yang diubah

Pada Soal No 3 ini
saya membuat file baru bernama convert.jsx dan saya input kode yang ada di petunjuk laporan ketika diinputkan ada beberapa eror yang muncul yaitu:
![gambar-pratikum](img/gambar3.png)
setelah  beberapa kali percobaan saya berhasil menyelsaikan erornya menjadi :
![gambar-pratikum](img/gambar4.png)

Pada soal No 4 saya mendapat eror seperti ini:
![gambar-pratikum](img/gambar5.png)
dan saya perbaiki menjadi seperti ini:
![gambar-pratikum](img/gambar6.png)
perbaikan yang say lakukan di bagian elemen h1, saya menggunakan properti name dari objek person untuk menampilkan nama orang tersebut. Hal ini memastikan bahwa hanya nama orang tersebut yang akan dicetak, bukan seluruh objek person.

Pada soal No 5 saya mengikuti perintah panduan dan mengahsilkan bentuk seperti ini
kodingan:
![gambar-pratikum](img/gambar7.png)
hasilnya:
![gambar-pratikum](img/gambar8.png)
penjelasan : jadi kan saya udh bikin component todolist.tsx setelah itu di src/app/page.tsx saya import component todolist tersebut dan saya pangill maka hasilinya seperti digambar.

Pada soal no 6 saya mengikuti perintah panduan dan menganti eror menjadi seperti ini
Kodingan:
![gambar-pratikum](img/gambar9.png)
hasilnya:
![gambar-pratikum](img/gambar10.png)

yang saya ubah:
-> saya menambahkan variabel baseUrl yang berisi bagian awal dari URL gambar, yaitu 'https://i.imgur.com/'. Variabel ini akan digunakan untuk menggabungkan URL gambar bersama dengan imageId, imageSize, dan ekstensi file.

->Di atribut src pada elemen <img>, saya menggunakan string template (dengan backtick) untuk menggabungkan nilai dari variabel baseUrl, person.imageId, person.imageSize, dan ekstensi file .jpg. Ini memastikan bahwa URL gambar dibangun dengan benar.

Pada soal no 7 saya mengikuti perintah panduan dan menganti eror menjadi seperti ini
Kodingan:
![gambar-pratikum](img/gambar11.png)
![gambar-pratikum](img/gambar12.png)
Hasilnya :
![gambar-pratikum](img/gambar13.png)
Penjelasaan :
-> Mengekstrak komponen MyProfile dari MyGallery untuk mengurangi duplikasi kode

Pada soal no 8 saya mengikuti perintah panduan dan menganti eror sampe menjadi :
Kodingan:
![gambar-pratikum](img/gambar14.png)
![gambar-pratikum](img/gambar15.png)
Hasilnya:
![gambar-pratikum](img/gambar16.png)
Penjelasan:
-> komponen MyAvatar menerima prop size untuk mengatur ukurannya dan prop imageUrl untuk menampilkan gambar yang sesuai. Saat memperbarui nilai prop size atau imageUrl, komponen MyAvatar akan secara otomatis memperbarui tampilannya sesuai dengan nilai yang diberikan.

Pada soal no  saya mengikuti perintah panduan dan menganti eror sampe menjadi :
Kodingan:
![gambar-pratikum](img/gambar17.png)
![gambar-pratikum](img/gambar18.png)
![gambar-pratikum](img/gambar19.png)
Hasilnya:
![gambar-pratikum](img/gambar20.png)
Penjelasan ya:
Saya membuat komponen card dari komponen MyProfileV2 lalu Saya buat terpisah agar kodenya menjadi lebih terorganisir. Dan saya menggunakan Prop children, untuk mengirimkan JSX yang berbeda ke dalam komponen card yang mana untuk memasukan konten yang bervariasi ke Card tanpa perlu properti khusus lalu saya masukan di page.tsx
