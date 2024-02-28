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

  