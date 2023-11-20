<script>
export default {
    data() {
        return {
            vpnList: ["vmess", "vless", "trojan", "ss"],
            formatList: ["sfa", "clash", "surfboard", "raw"],
            regionList: ["Asia", "Americas", "Europe", "Africa"],
            networkList: ["ws", "grpc", "tcp", "hu"]
        }
    }
}
</script>

# Get

Endpoint ini digunakan untuk mengambil akun VPN

## Tabel Kueri

|   Key   |             Penjelasan              | Multiple |       Contoh        |                                                                   Pilihan                                                                    |
| :-----: | :---------------------------------: | :------: | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
|  pass   |          Masukkan password          |    No    |     &pass=fool      |
|   vpn   |   Pilih VPN bersadarkan protokol    |   Yes    |     &vpn=vmess      |                           <details><summary>Buka</summary><ul><li v-for="i in vpnList">{{ i }}</li></ul></details>                           |
| format  |            Pilih format             |    No    |    &format=clash    |                         <details><summary>Buka</summary><ul><li v-for="i in formatList">{{ i }}</li></ul></details>                          |
| region  |    Pilih VPN berdasarkan wilayah    |   Yes    |    &region=Asia     |                         <details><summary>Buka</summary><ul><li v-for="i in regionList">{{ i }}</li></ul></details>                          |
|   cc    |  Pilih VPN berdasarkan kode negara  |   Yes    |       &cc=SG        | <details><summary>Buka</summary><a href="https://raw.githubusercontent.com/LalatinaHub/LatinaSub/main/countries.json">Get List</a></details> |
| include |     Pilih VPN berdasarkan nama      |   Yes    |   &include=melbi    |
| exclude |   Kecualikan VPN berdasarkan nama   |   Yes    |   &exclude=amazon   |
|   tls   |       Pilih VPN TLS atau NTLS       |    No    |       &tls=1        |                                                                      1                                                                       |
| network | Pilih VPN berdasarkan tipe jaringan |   Yes    |     &network=ws     |                         <details><summary>Buka</summary><ul><li v-for="i in networkList">{{ i }}</li></ul></details>                         |
|  port   |     Pilih VPN berdasarkan port      |   Yes    |    &port=80,443     |
|   ip    | Merubah domain host VPN menjadi IP  |    No    |        &ip=1        |                                                                      1                                                                       |
|   sni   |       Isi VPN dengan host SNI       |   Yes    |    &sni=sni.host    |
|   cdn   |       Isi VPN dengan host CDN       |   Yes    |    &cdn=cdn.host    |
|  mode   |         Pilih mode koneksi          |   Yes    |      &mode=cdn      |                                                               `cdn` dan `sni`                                                                |
|  limit  |          Batasi jumlah VPN          |    No    |      &limit=10      |
|   arg   |       Masukkan pair key-value       |   Yes    | &arg=xudp,key:value |

::: info
Key yang mendukung input lebih dari 1 (Multiple), dipisahkan menggunakan tanda koma (,)  
Contoh: https://fool.azurewebsites.net/get?cdn=host1,host2,host3
:::
