<script>
export default {
    data() {
        return {
            vpnList: ["vmess", "vless", "trojan", "ssr"],
            formatList: ["clash", "surfboard", "singbox", "raw"],
            regionList: ["Asia", "Americas", "Europe", "Africa"]
        }
    }
}
</script>

# Quick Introduction

This endpoint used to get vpn accounts

# Queries Table

| Key    | Explanation                | Default | Multiple | Example       | Available Option                                                                                                                             |
| :----- | :------------------------- | :-----: | :------: | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| vpn    | Get vpn by type            |  vmess  |    No    | ?vpn=vmess    | <details><summary>Open</summary><ul><li v-for="i in vpnList">{{ i }}</li></ul></details>                                                     |
| format | Select output format       |  clash  |    No    | &format=clash | <details><summary>Open</summary><ul><li v-for="i in formatList">{{ i }}</li></ul></details>                                                  |
| region | Select vpn by region       |   all   |    No    | &region=Asia  | <details><summary>Open</summary><ul><li v-for="i in regionList">{{ i }}</li></ul></details>                                                  |
| cc     | Select vpn by Country Code |   all   |    No    | &cc=SG        | <details><summary>Open</summary><a href="https://raw.githubusercontent.com/LalatinaHub/LatinaSub/main/countries.json">Get List</a></details> |
| sni    | Fill vpn with SNI host     |         |   Yes    | &sni=sni.host |
| cdn    | Fill vpn with CDN host     |         |   Yes    | &cdn=cdn.host |

::: info
Multiple input is separated with coma (,)  
Example: https://fool.azurewebsites.net/get?cdn=host1,host2,host3
:::