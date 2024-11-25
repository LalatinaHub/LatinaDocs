+++
title = 'Doc | API Get Endpoint'
date = 2023-11-20T15:27:50+07:00
draft = false
+++

# Tabel Kueri

|   Key   |             Penjelasan              | Multiple |       Contoh        |
| :-----: | :---------------------------------: | :------: | :-----------------: |
|  pass   |          Masukkan password          |    No    |     &pass=fool      |
|  free   |        Pilih VPN gratis saja        |    No    |       &free=1       |
|   vpn   |   Pilih VPN bersadarkan protokol    |   Yes    |     &vpn=vmess      |
| format  |            Pilih format             |    No    |    &format=clash    |
| region  |    Pilih VPN berdasarkan wilayah    |   Yes    |    &region=Asia     |
|   cc    |  Pilih VPN berdasarkan kode negara  |   Yes    |       &cc=SG        |
| include |     Pilih VPN berdasarkan nama      |   Yes    |   &include=melbi    |
| exclude |   Kecualikan VPN berdasarkan nama   |   Yes    |   &exclude=amazon   |
|   tls   |       Pilih VPN TLS atau NTLS       |    No    |       &tls=1        |
| network | Pilih VPN berdasarkan tipe jaringan |   Yes    |     &network=ws     |
|  port   |     Pilih VPN berdasarkan port      |   Yes    |    &port=80,443     |
|   ip    | Merubah domain host VPN menjadi IP  |    No    |        &ip=1        |
|   sni   |       Isi VPN dengan host SNI       |   Yes    |    &sni=sni.host    |
|   cdn   |       Isi VPN dengan host CDN       |   Yes    |    &cdn=cdn.host    |
|  mode   |         Pilih mode koneksi          |   Yes    |      &mode=cdn      |
|  limit  |          Batasi jumlah VPN          |    No    |      &limit=10      |
|   arg   |       Masukkan pair key-value       |   Yes    | &arg=xudp,key:value |

Key yang mendukung input lebih dari 1 (Multiple), dipisahkan menggunakan tanda koma (,)  
Contoh: [https://fool.azurewebsites.net/get?cdn=host1,host2,host3](https://fool.azurewebsites.net/get?cdn=host1,host2,host3)
