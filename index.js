var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "حساباتي",
assets : {
large_image : "my-photo",
large_text : "حساباتي الشخصية" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "facebook" , url : "https://www.facebook.com/eihabgamal20/"},{label : "instagram",url : "https://www.instagram.com/eihabgamal20/"}]
}
})
})
client.login({ clientId : "862001586296979456" }).catch(console.error);