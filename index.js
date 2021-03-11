const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./dark/help')
const {help1} = require('./src/help1')
const { modapk } = require('./src/modapk')
const { pack } = require('./src/pack')
const { outros } = require('./src/outros')
const { vipmenu } = require('./src/vipmenu')
const { animemenu } = require('./dark/animemenu')
const { destrava } = require('./src/destrava')
const { menu2 } = require('./src/menu2')
const { destrava2 } = require('./src/destrava')
const { musicas } = require('./dark/musicas')
const { gbin } = require('./src/gbin')
const { gpessoa } = require('./src/gpessoa')
const { tool } = require('./dark/tool')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { darkfb } = require('./dark/bash/darkfb')
const { fbcheker } = require('./dark/bash/fbcheker')
const { hackfb } = require('./dark/bash/hackfb')
const { bruteforcefb } = require('./dark/bash/bruteforcefb')
const { toolsphishing } = require('./dark/bash/toolsphishing')
const { socialfishv2 } = require('./dark/bash/socialfishv2')
const { terkeytermux } = require('./dark/bash/terkeytermux')
const { bayartokenlistrik } = require('./dark/bash/bayartokenlistrik')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const axios = require("axios");
const tiktod = require('tiktok-scraper')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const { name, yt, replySet } = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'Pepy '; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:dark\n' // Nama kamu
            + 'ORG:Pepyto;\n' // Nama bot
            + 'TEL;type=CELL;type=VOICE;waid=551999897566:+5519999897566\n' //Nomor whatsapp kamu
            + 'END:VCARD'
const ngonsol = JSON.parse(fs.readFileSync('./settings/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol            
prefix = '.','!','#','/'
blocked = []
limitawal = '999999999'
cr = '*dark*'

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Digitalize o c贸digo qr acima'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Conectando...')
	})
	client.on('open', () => {
		success('2', 'Conectado')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Ol谩 @${num.split('@')[0]}\nBem vindo ao grupo *${mdata.subject}*\n\nEspero que goste do grupo 鉂わ笍`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Tchau @${num.split('@')[0]} Ja foi tarde Bakaa馃槀馃憢`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
					wait: 'So um minuto amigo (a)',
					success: '锔忊潿 鉁� 鉂� Sucesso 馃枻',
					levelon: '鉂� 鉁� 鉂� *leveling* *ativado*',
					leveloff: ' 鉂� X 鉂�  *leveling* *desativado*',
					levelnoton: '鉂� X 鉂� *leveling n茫o ativado*',
					levelnol: '*error* 0 掳-掳',
					error: {
				stick: '*Tente Novamente Mais Tarde ^_^*',
				Iv: '饾棤饾棶饾棶饾棾 饾椆饾椂饾椈饾椄 饾榿饾椂饾棻饾棶饾椄 饾槂饾棶饾椆饾椂饾棻鈽癸笍'
				},
				only: {
					group: '[鉂梋 Este comando s贸 pode ser usado em grupos! 鉂�',
					premium: '[鉂梋 ESTE PEDIDO 脡 SO PARA *USU脕RIOS PREMIUMS*',
					mod: '[鉂梋 ESTE PEDIDO 脡 ESPEC脥FICO PARA USUARIO MOD Pepyto BOT*',
					benned: 'Voc锚 para a banda, por favor, contate o propriet谩rio para abrir sua banda',
					ownerG: '[鉂梋 Propriet谩rio? Este 茅 um recurso especial para o propriet谩rio do bot 鉂�',
					ownerB: '[鉂梋 Propriet谩rio? Este 茅 um recurso especial para o propriet谩rio do bot 鉂�',
					userB: `鈹�鈹�銆� LISTA 銆嶁攢鈹�\nOl谩 Kak !\nDesculpe, irm茫. Voc锚 n茫o est谩 registrado como amigo de Pepyto. Registre-se para fazer amizade com o bot Pepyto por meio, \n\nCommand : ${prefix}daftar nama|idade\nExemplo : ${prefix}daftar Pepyto|17\n\n鈹�鈹�銆� Pepyto BOT 銆嶁攢鈹�`,
					admin: '[鉂梋 Este comando s贸 pode ser usado por administradores de grupo! 鉂�',
					Badmin: ' [鉂梋 Este comando s贸 pode ser usado quando o bot se torna administrador! 鉂�',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["5519999897566@s.whatsapp.net","12267740582@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"5519999897566@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["5519999897566@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["5519999897566@s.whatsapp.net"]//ubah nomor lo
			const premium = ["557398183889@s.whatsapp.net","557399469117@s.whatsapp.net","5519999897566@s.whatsapp.net","559784130980@s.whatsapp.net","553598455925@s.whatsapp.net","553598455925@s.whatsapp.net","5511949051934@s.whatsapp.net","554792091566@s.whatsapp.net","558699541889@s.whatsapp.net","5519999611134@s.whatsapp.net","5519989895444@s.whatsapp.net","+553493117667@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*銆� LEVEL UP 銆�*\n\n鉃� *Nome*: ${sender}\n鉃� *XP*: ${getLevelingXp(sender)}\n鉃� *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParab茅ns!!  馃帀馃帀`)
                }
            } catch (err) {
                console.error(err)
            }
        }
if (messagesC.includes("!ip"))
  { const aris = text.replace(/!ip /, "") 
  anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *CIDADE:* sem info\n 鉃� *Latitude* : ${anu.latitude}\n 鉃� *Longtitude* : ${anu.longitude}\n 鉃� *REGI脙O* : ${anu.region_name}\n 鉃� *UF* : ${anu.region_code}\n 鉃� *IP* : ${anu.ip}\n 鉃� *TIPO* : ${anu.type}\n 鉃� *CEP* : ${anu.zip}\n 鉃� *LOCALIDADE* : ${anu.location.geoname_id}\n 鉃� *CAPITAL* : ${anu.location.capital}\n 鉃� *DDD* : ${anu.location.calling_code}\n 鉃� *PA脥S* : ${anu.location.country_flag_emoji}\n *馃搶BY:May Bot*` 
  client.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(anu.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	conn.sendMessage(id, '[鉂梋 ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *ATIVIDADE PRINCIPAL:* ${anu.atividade_principal[0].text} \n\n 鉃� *DATA SITUA脟脙O:* ${anu.data_situacao}\n\n 鉃� *TIPO:* ${anu.tipo} \n\n 鉃� *NOME:* ${anu.nome} \n\n 鉃� *UF:* ${anu.uf} \n\n 鉃� *TELEFONE:* ${anu.telefone}\n\n 鉃� *SITUA脟脙O:* ${anu.situacao} \n\n 鉃� *BAIRRO:* ${anu.bairro} \n\n 鉃� *RUA:* ${anu.logradouro} \n\n 鉃� *N脷MERO :* ${anu.numero} \n\n 鉃� *CEP :* ${anu.cep} \n\n 鉃� *MUNIC脥PIO:* ${anu.municipio} \n\n 鉃� *PORTE:* ${anu.porte}\n\n 鉃� *ABERTURA:* ${anu.abertura}\n\n 鉃� *NATUREZA JUR脥DICA:* ${anu.natureza_juridica} \n\n 鉃� *FANTASIA:* ${anu.fantasia}\n\n 鉃� *CNPJ:* ${anu.cnpj}\n\n 鉃� *脷LTIMA ATUALIZA脟脙O:* ${anu.ultima_atualizacao}\n\n 鉃� *STATUS:* ${anu.status}\n\n 鉃� *COMPLEMENTO:* ${anu.complemento}\n\n 鉃� *EMAIL:* ${anu.email}\n\n *馃搶BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
const aris = text.replace(/!cpf /, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=${aris}`).then((res) => {
	conn.sendMessage(id, '[鉂梋 ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let ecpf = `*馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *CPF:* ${anu.CPF} \n\n 鉃� *NOME:* ${anu.Nome}\n\n 鉃� *M脙E:* ${anu.NomeMae} \n\n 鉃� *NASCIMENTO:* ${anu.DataNascimento} \n\n 鉃� *RUA:* ${anu.Rua} \n\n 鉃� *N掳:* ${anu.NumeroRua}\n\n 鉃� *COMPLEMENTO:* ${anu.Complemento}\n\n 鉃� *BAIRRO:* ${anu.Bairro}\n\n 鉃� *CEP:* ${anu.CEP}\n\n 鉃� *UF:* ${anu.EstadoSigla}\n\n 鉃� *CIDADE:* ${anu.Cidade}\n\n 鉃� *ESTADO:* ${anu.Estado}\n\n 鉃� *PAIS:* ${anu.Pais}  \n\n *馃搶BY:May Bot* `;
    conn.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	conn.sendMessage(id, '[鉂梋 ESPERE ESTA PROCESSANDO', MessageType.text)
         let cpf = `*馃攳CPF GERADOS馃攳* \n\n 鉃� *CPF:* ${anu.data.number}  \n\n *馃搶BY:May Bot*`;
    conn.sendMessage(id, cpf ,MessageType.text);
})
}	

if (messagesC.includes("!cep")){
const aris = text.replace(/!cep /, "")
teks = body.slice(7)
anu = await getBuffer(`https://viacep.com.br/ws/${teks}/json/`).then((res) => {
	client.sendMessage(from, '[鉂梋 ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *CEP:* ${anu.cep} \n\n 鉃� *ENDERE脟O:* ${anu.logradouro}\n\n 鉃� *COMPLEMENTO:* ${anu.complemento} \n\n 鉃� *BAIRRO:* ${anu.bairro} \n\n 鉃� *LOCALIDADE:* ${anu.localidade} \n\n 鉃� *UF:* ${anu.uf}\n\n 鉃� *DDD:* ${anu.ddd} \n\n *馃搶BY:May Bot* `;
    client.sendMessage(from, cep ,MessageType.text);
}) 
}

if (messagesC.includes(".cpfj")){
const aris = text.replace(/.cpfj /, "")
var gh = body.slice(5)
var gbl3 = gh.split("|")[0];
var gbl4 = gh.split("|")[1];
cpfj = `${body.slice(10)}`
anu = await fetchJson(`http://70.37.60.112:8080/test/test.php?cpf=01213606365/json`).then((res) => {
if (anu.error) return reply(anu.error)
ri = JSON.parse(JSON.stringify(anu));
	client.sendMessage(id, '[鉂梋 ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *NOME:* ${anu.nome} \n\n 鉃� *SEXO:* ${anu.sexo}\n\n 鉃� *NASCIMENTO:* ${anu.nascimento}\n\n*馃搶BY:Pepyto Bot* `;
    client.sendMessage(id, cep ,MessageType.text);
}) 
}


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *ANO:*  ${anu.ano}\n 鉃� *ANO MODELO* : ${anu.anoModelo}\n 鉃� *CHASSI* : ${anu.chassi}\n 鉃� *CODIGO RETORNO* : ${anu.codigoRetorno}\n 鉃� *CODIGO SITUACAO* : ${anu.codigoSituacao}\n 鉃� *COR* : ${anu.cor}\n 鉃� *MARCA* : ${anu.marca}\n 鉃� *MUNICIPIO* : ${anu.municipio}\n 鉃� *SITUACAO* : ${anu.situacao}\n 鉃� *UF* : ${anu.uf}\n *馃搶BY: Pepyto BOT*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        

        if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, 茅 errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("Nesse grupo, n茫o gostamos de racismos, que isso sirva de exemplo 馃毝")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau ot谩rio 馃様馃")
		}, 0)
	}
	
	        if (messagesC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, 茅 errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau ot谩rio 馃様馃")
		}, 0)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, 茅 errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau ot谩rio 馃様馃")
		}, 0)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, 茅 errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau ot谩rio 馃様馃")
		}, 0)
	}
	
	   if (messagesC.includes(".meuid")){
	   client.updatePresence(from, Presence.composing)
      client.sendMessage(from, trujuh, MessageType.text);
      client.sendMessage(from, MessageType + " / " + messageType, MessageType.text);
   }
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, 茅 errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau ot谩rio 馃様馃")
		}, 0)
	}
	
       if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*Voc锚 茅 admin, nao irei te banir, fica suave.*`)
		client.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau馃憢')
		}, 1100)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`link detectado voc锚 vai ser expulso`)
		}, 0)
		}
	
//INTERA脟脙O

  //Info convid
if (text.includes('.Covid')){
client.sendMessage(id, 'Por favor, repita o comando em min煤sculas',MessageType.text, { quoted: m } );
}
if (text.includes(".covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    client.sendMessage(id,`馃搶脷LTIMOS DADOS DO DISTRITO COVID-19 DA INDON脡SIA\n\n*Positif* = ${positif} \n*Sembuh* = ${sembuh} \n*Meninggal* = ${meninggal}\n*Dirawat* = ${dirawat}\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: m } );
}
	
	if (messagesC.includes("fdp")){
			client.updatePresence(from, Presence.composing)
			reply("teu pai")
	}
	
		if (messagesC.includes("kkk")){
			client.updatePresence(from, Presence.composing)
			reply("kskskskk")
	}
	
			if (messagesC.includes("lixo")){
			client.updatePresence(from, Presence.composing)
			reply("por acaso eu sou vc agr?")
	}
	
			if (messagesC.includes("but")){
			client.updatePresence(from, Presence.composing)
			reply("茅 bot seu analfabeto")
	}
	
	
			if (messagesC.includes("Tudo bem?")){
			client.updatePresence(from, Presence.composing)
			reply("to bem, vlw por perguntar 馃槒")
	}
	
				if (messagesC.includes("!help")){
			client.updatePresence(from, Presence.composing)
			reply("脡 com . caralho")
	}
	
	
	
					if (messagesC.includes("!menu")){
			client.updatePresence(from, Presence.composing)
			reply("脡 com . caralho")
	}
	
					if (messagesC.includes("#help")){
			client.updatePresence(from, Presence.composing)
			reply("脡 com . caralho")
	}
	
					if (messagesC.includes("#menu")){
			client.updatePresence(from, Presence.composing)
			reply("脡 com . caralho")
	}				
	             if (messagesC.includes("/menu")){
			client.updatePresence(from, Presence.composing)
			reply("脡 com . caralho")
	}
	
			if (messagesC.includes("chato")){
			client.updatePresence(from, Presence.composing)
			reply("nossa 馃ズ")
	}
	
			if (messagesC.includes("vadia")){
			client.updatePresence(from, Presence.composing)
			reply("ai mano, vc acha legal usar um argumento machista?")
	}
	

	
		if (messagesC.includes("corno")){
			client.updatePresence(from, Presence.composing)
			reply("vsfd seu merda")
	}
	
		if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			reply("vai vc, tu ja me disse q 茅 mo bom")
	}
	
		if (messagesC.includes("vsfd")){
			client.updatePresence(from, Presence.composing)
			reply("bora juntos?")
	}
	
		if (messagesC.includes("cade o bot")){
			client.updatePresence(from, Presence.composing)
			reply("olha eu aqui carai")
	}
	
		if (messagesC.includes("Pepy")){
			client.updatePresence(from, Presence.composing)
			reply("Opa, Me chamou? ")
	}
	
if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			reply("To aqui ")
	}
	
			if (messagesC.includes("bah")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fdp.mp3');   
			client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
			if (messagesC.includes("tude4")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Tude4.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
				if (messagesC.includes("Raça")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Raça. mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
				if (messagesC.includes("oii")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/ola.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
//msc
	
					if (messagesC.includes("hylander")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/hylander.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmflamengo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmflamengo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("cmgremio")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/cmgremio.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("m4")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/m4.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("macaverde")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/macaverde.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("kalidade")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/kalidade.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
						if (messagesC.includes("nikeb")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nikeb.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("banhodeleite")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/BanhoDeLeite.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("akdoflamengo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/akdoflamengo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
					if (messagesC.includes("nemo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/nemo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("video")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/laranjinha.mp4');
            client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})

	}
	
//msc fim
	
					if (messagesC.includes("grita")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("digita")){
			client.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://i.yGKwBW1.jpg`)
            client.sendMessage(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
					if (messagesC.includes("machista")){
			client.updatePresence(from, Presence.composing)
            tod = await getBuffer(`https://i.imgur.com/yGKwBW1.jpg`)
            client.sendMessage(from, tod, image, { quoted: mek, caption: 'Voce chama isso de machismo?? sua puta.'})                  
	}
	
				if (messagesC.includes("mandememe")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
	}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'help1':
				case 'menu1':
					client.sendMessage(from, help1(prefix), text)
					break
					case 'kiss':
				    try {    
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						client.sendMessage(from, bufferv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro como!!'})
						reply('鉂� *ERRO* 鉂�')
					}
					break
					case 'lista':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Voc锚 quem 茅 o propriet谩rio?')
					if (args.length < 1) return reply('Onde est谩 o texto, irm茫o?')
					reply(mess.wait)
					client.sendMessage(from, 'Adicionando mensagem 脿 lista com sucesso' , text, { quoted: mek })
					client.sendMessage(from, addsay(prefix), text, { quoted: mek })
					break
			case 'help4':
			case 'menu4':
			case 'cmd':
			case 'm':
				uptime = process.uptime()
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                setTimeout( () => {
					costum(help(name, yt, replySet), text, FadhilGraphy, replySet)
					}, 1500)
					setTimeout( () => {
					/*client.sendMessage(from, rules(name, uptime, tanggal, jam, prefix), text, {quoted: mek })
					}, 1200)
					setTimeout( () => {*/
					client.sendMessage(from, text, {quoted: mek})
					}, 0)
    				break
					case 'addsay':
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sucesso, Disse ${hai} Adicionado ao banco de dados`)
						break
                   case 'saylist':
					teks = 'Esta 茅 a lista de dizeres :\n'
					for (let awokwkwk of sayrandom) {
						teks += `鈺犫灔 ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
				case 'ssweb':
				
					if (args.length < 1) return reply('Cad锚 o url tio')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					bufferz = await getBuffer(anu.gambar)
					client.sendMessage(from, bufferz, image, {quoted: mek})
					break
                case 'ytkomen':
					if (args.length < 1) return reply('Cad锚 o texto tio?')
					gh = body.slice(9)
					usnm = gh.split("|")[0];
					cmn = gh.split("|")[1];
					var imgbb = require('imgbb-uploader')
					ghost = mek.participant
					try {
					pp = await client.getProfilePicture(ghost)
					} catch {
					pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
					buffer88 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
					break
				case 'walpaperhd':
				
					if (args.length < 1) return reply('Cad锚 o texto tio')
					teksj = body.slice(7)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'este comando s贸 pode ser usado dentro do grupo', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (馃挊) @${(/[@c.us]/g, '')} acabei de te inventar\nPor favor, compartilhe o pj`

                    client.sendMessage(from, sapa)

                    break
				case 'ramaljadian':
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					reply(anu.result.hasil)
					break
                   case 'modapk':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                   case 'gbin':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                    break
                   case 'gpessoa':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gpessoa(prefix), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'pack':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break
                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gcpf(prefix), text, { quoted: mek })
                    break
				case 'ytmp4':
					if (args.length < 1) return reply('Cad锚 o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*T铆tulo* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'n':
					if (args.length < 1) return reply('Cad锚 o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*T铆tulo do anime* : ${anu.title}\n\n*AGUARDE, ENVIANDO O V脥DEO DO ANIME.*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
		case 'iri':
			client.sendPtt(from, './lindy/iri.mp3', {quoted: mek, ptt:true})
			break
				case 'ytmp3':
			    	if (!isPremium) return reply(mess.only.premium)
                   reply(mess.wait)
					if (args.length < 1) return reply('Cad锚 o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*T铆tulo* : ${anu.title}\n*Tamanho do arquivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp':
					if (args.length < 1) return reply('Cad锚 o url, hum?')
					anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(7)}&apikey=OOute55hhUyiwy772999she88982665000kjuGaGh`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.size}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'game':
				
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*鉃� Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo鈥', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_鈥�', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_鈥�', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'quotemaer':
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Usage: \n.}quotemaker teks | marca d'谩gua | tema\n\nEx :\n${prefix}quotemaker este 茅 um exemplo | bicit | aleat贸rio`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih dah jadi kak', quoted: mek})
					break
				case 'galaxtext':
					if (args.length < 1) return reply('o que voc锚 quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto 茅 longo, com at茅 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'phlogo':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'encode64':

				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':

				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':

				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':

				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':

				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':

				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':

				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':

				decoc = `${reply(mess.wait).slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':

				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':

					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
case 'cep1':
                    if (args.length < 1) return reply('Cade O Cep? ')
                    anu = await fetchJson(`https://viacep.com.br/ws/${body.slice(10)}/json/`)
			        base1 = `馃攷 Pepyto CONSULTAS / BASE 1 馃攷

鉃� ENDERE脟O: ${anu.logradouro}
鉃� CEP: ${anu.cep}
馃搶 BY: Pepyto BOT `
			        reply(base1)
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'testing':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'testing2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
//gif					
				case 'hubgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'blowgif':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'kissgif':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'shota':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'hentaifig':
				   if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 	
				case 'nekofig':
					if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'lolifig':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'dogfigu':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`https://media4.giphy.com/media/UuebWyG4pts3rboawU/giphy.gif`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 	
				case 'attp':
			    	if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 						
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
		case 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Cad锚 o texto, mano??')
                     if (args.length > 10) return reply('m铆nimo 10 linhas')
                     buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`, {method: 'get'})
                     anker.sendMessage(from, buff, image, {quoted: mek, caption: `Tesouro do trono ${tahta}`})
                  await limitAdd(sender) 
                  break  
                    case 'glitch':
                    gh = body.slice(7)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    anker.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break
          case 'snack':
				if (args.length < 1) return reply('Cad锚 o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `銆� *SNACK VIDEO DOWNLOADER* 銆峔n\n*鈥� Formato:* ${anu.format}\n*鈥� Tamanho:* ${anu.size}\n\n*ESPERE ENVIANDO POR FAVOR, N脙O SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                frhan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto 茅 muito longo, at茅 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					break
				case 'modoanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('O modo anime j谩 est谩 ativo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`鉁揂tivado com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`鉁揗odo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('O modo antiracismo j谩 est谩 ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`鉁揂tivado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`鉁揗odo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'atris':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('N脙O COME脟A BRO')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'gcpf2':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./dark/gcpf2.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('Gerando cpf, caso falhe tente novamente.')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'gcard':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./dark/gcard.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('Gerando cart茫o, caso falhe tente novamente.')
                 randTeks = randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw j谩 est谩 ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`鉁揂tivado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`鉁揗odo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto 茅 longo, com at茅 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto 茅 muito longo, at茅 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                 case 'nomegp':
		             if (args.length < 1) return reply ('o nome do grupo 茅: *${groupMetadata.subject}*')
		             break
				case 'loli2':
					if (!isAnime) return reply('鉂� *Deve ativar o modo Anime* 鉂�')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = await getBuffer(i2)
					client.sendMessage(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', quoted: mek })
					break
//@darkYT					
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                    await limitAdd(sender)
					break
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            client.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
    
				case 'semoji':
					if (args.length < 1) return reply('onde est谩 o emojis hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('O que voc锚 est谩 procurando?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`T铆tulo\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Dura莽茫o\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'vipmenu':
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *#daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'outros':
					client.sendMessage(from, outros(prefix) , text, { quoted: mek })
					break
					case 'menu2':
					client.sendMessage(from, menu2(prefix) , text, { quoted: mek })
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'rize':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'mia':
				  	if (!isNsfw) return reply(' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					reply(mess.wait)
					anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'i love you, mia 馃ズ鉂わ笍', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'gcpf3':
					reply(mess.wait)
					anu = await fetchJson(`https://api-textcpf.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, {quoted: mek, caption: mess.success})
					await limitAdd(sender) 	
					break 
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'emojih':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${args[0]}&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
				case 'igstalkear':
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
					break 
                case 'wolflogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
				case 'c3d':
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(5)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					itsmeiky.sendMessage(from, tigaa, image, {caption: 'Nih kak', quoted: shizuka})
					await limitAdd(sender) 
					break                    
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que voc锚 quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
				case 'testetxt':
				case 'tst':
					if (args.length < 1) return reply('O que voc锚 quer escrever??') 
					teks = body.slice(7)
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://litheade.sirv.com/296c784ea885c846beaa0a66fd646448.jpg?text.0.text=${teks}`, {method: 'get'})
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
//logo
//minhas apis					
                case 'pslogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_035224.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=26%25&text.0.size=23&text.0.color=000000&text.0.font.family=Playfair%20Display%20SC&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=5`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'plogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'canal':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto 茅 longo, at茅 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210226_190234.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=26%25&text.0.position.y=49%25&text.0.size=14&text.0.color=000000&text.0.font.family=Poppins`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'jjkk':
					if (args.length < 1) return reply(mess.blank)
					a = body.slice(10)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await fetchJson(`https://api.ritekit.com/v2/image/extract-image?url=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*FOTO DO LINK: ${a} 鉁�*'})
					break
                case 'emp':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 400) return reply('O url 茅 longo, at茅 400 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://api.ritekit.com/v2/image/extract-image?url=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*IMAGEM DO SITE: ${teks} 鉁�*'})
					break
                case 'comunis':
				    client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
                    if (args.length < 1) return reply('marque seus amigos!')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://api.alexflipnote.dev/filter/communist?image=${ppimg}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'wlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_052617.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=6%25&text.0.position.y=55%25&text.0.size=30&text.0.color=ff0000&text.0.font.family=Signika%20Negative&text.0.font.weight=700&text.0.background.opacity=11&text.0.outline.blur=98&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'bfig':
					if (args.length < 1) return reply(' envie um texto!鉁�')
					reply(mess.wait)	
					teks = body.slice(10)
					ranp = getRandom('.png')
					rano = getRandom('.webp')		
					anu = await fetchJson(`https://api.xteam.xyz/ttp?file&text=${teks}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
			    case 'glogo':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente 鉁�*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
			    await limitAdd(sender) 
			    break  
			    case 'dnobg2':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente 鉁�*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${no}&text.0.position.gravity=north&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0&text.1.text=${bg}&text.1.position.gravity=center&text.1.position.y=25%25&text.1.color=4f00ff&text.1.opacity=83&text.1.font.family=Marck%20Script&text.1.outline.blur=82`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
			    await limitAdd(sender) 
			    break
			    case 'frase':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente 鉁�*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
			    await limitAdd(sender) 
			    break
			    case 'amor':
			    love = `${body.slice(7)}`
			    lo = love.split("/")[0];
			    ve = love.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente 鉁�*')
			    buffer = await getBuffer(`https://assets.imgix.net/examples/couple.jpg?txt64=VEUgQU1PIOKdpO-4jw&txt-font=bold&txt-align=middle%20center&txt-size=${lo}&blur=${ve}&txt-color=FF0000`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
			    await limitAdd(sender) 
			    break  
			    case 'aguia2':
			    agia = `${body.slice(7)}`
			    ag = agia.split("/")[0];
			    ia = agia.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente 鉁�*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${ia}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=24&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${ag}&text.1.position.gravity=north&text.1.size=24&text.1.color=0040f2&text.1.font.family=Noticia%20Text&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
			    await limitAdd(sender) 
			    break  
                case 'black':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T225108.251.jpeg?text.0.text=${teks}&text.0.color=ffffff&text.0.font.family=Tangerine&text.0.font.weight=800&text.0.background.opacity=18&text.0.outline.blur=82`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'attp2':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					client.sendMessage(from, buffer, video, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'clogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_230542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=2%25&text.0.size=23&text.0.color=000000&text.0.opacity=58&text.0.font.weight=600&text.0.font.style=italic&text.0.outline.opacity=24`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break	
                case 'letxt':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break		
                case 'text3d':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break			
                case 'milogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T014719.920.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=15&text.0.color=000000&text.0.font.family=Ek%20Mukta&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=29`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'aguia':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto 茅 longo, at茅 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Philosopher&text.0.font.style=italic&text.0.background.color=ffffff`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'randlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto 茅 longo, at茅 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://darkkkw.herokuapp.com/`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'monkey':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_030251.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=39%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Source%20Sans%20Pro&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'dlg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://mhankbarbar.tech/api/ephoto?text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'dnulis':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 200) return reply('O texto 茅 longo, at茅 200 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'tlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto 茅 longo, at茅 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_164542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=40%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Lobster%20Two&text.0.font.weight=800&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'nlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto 茅 longo, at茅 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_165159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=38%25&text.0.size=24&text.0.color=ff0000&text.0.font.family=Signika&text.0.font.weight=600&text.0.background.opacity=34&text.0.outline.opacity=16`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'dmeme':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_050527.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=18&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'dnobg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                case 'imgur':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('ate 15 car谩cteres')
					reply('*Estou fazendo, se der erro tente novamente 鉁�*')
					buffer = await getBuffer(`https://m.imgur.com/t/${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO 鉁�*'})
					break
                  case 'wp':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto 茅 longo, at茅 15 caracteres')
					anu = await fetchJson(`https://br.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&exintext&redirects=1&titles=${body.slice(9)}`)
					reply(mess.wait)
				    translate = `pesquisa: *${teks}*\n\nResultado: *${anu.text}*`
				    client.sendMessage(from, teks, text, {quoted:mek})
				   await limitAdd(sender)
				   break 
//fim logo
//fim comandos dark				   
				case 'jogo':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*鉃� Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo鈥', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_鈥�', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_鈥�', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'premiumlist':
					teks = '鈺攢鈹�鈹�鈹�*銆� *PREMIUM USER馃憫* 銆峔n'
					for (let V of premium) {
						teks += `鈹�+  @${V.split('@')[0]}\n`
					}
					teks += `鈹�+ Total : ${premium.length}\n鈺扳攢鈹�鈹�鈹�鈹�鈹�*銆� *Pepyto BOT* 銆�*鈹�鈹�鈹�鈹�`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                  case 'qrcode':
        			if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um c贸digo qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
		    	case 'wa.me':
		        case 'wame':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `銆� *LINK WHATSAPP* 銆峔n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*dark DOMINA 馃悐馃毄*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `鈥� *Nome Apk:* ${ply.app.name}\n鈥� *ID:* ${ply.app.id}\n鈥� *Link Apk:* ${ply.app.url}\n===================掳]\n`
                  }
                  reply(store.trim())
                  break
			     case 'nekopoi':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Cad锚 o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `T铆tulo: ${neko.title}\nDescri莽茫o: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
// NINJALOGO				
				case 'nlogo':
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply('銆屸潡銆岰ontoh : ${prefix}ninjalogo IKY & Gans')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
// HALLOWEEN				
		case 'htxt':
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    client.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
// PORNHUB
				case 'phub':
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply('銆屸潡銆岰ontoh : ${prefix}pornhub IKY & Hub')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
//GEMBOK TEXT
                case 'gtxt':
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply('[鉂梋 Contoh : ${prefix}gemboktext 11 01 2021 & IKY dan Nadia')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
			     case 'xvideos':
              	    if (args.length < 1) return reply('Cad锚 o texto, mano?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `鈥� T铆tulo: ${b.title}\n鈥� Info: ${b.info}\n鈥� Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
				case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ICHI|12`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8HEUZBEHDO\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${jeneng}\`\`\`\n\`\`\`[N煤mero]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Era]: ${umure}\`\`\`\n\`\`\`Para usar um bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usu谩rios ${user.length}\`\`\``, text, {quoted: mek})
					break
				case 'hunti':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descri莽茫o alterada com sucesso', text, {quoted: mek})
				     break
			case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺怽n\n*T铆tulo* : ${results[i].title}\n\n*Descri莽茫o* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
		case 'bpfont':
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break 
			 
                case 'speed':
                case 'ping':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Xiaomi*\nRAM: *6/64*\nData: *Telkomsel*\nRede: *4G*\nStatus: *Ainda n茫o cobrado*\nTipo do bot: *Termux Somente*\n\n*O bot esteve ativo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'ninjalogo':
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`銆屸潡銆岰ontoh : ${prefix}ninjalogo Ramlan & Gans`)
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
		
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
				case 'pornhub':
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply('escreve certo irm茫o')
				reply(mess.wait)
				buffer = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${porn}&text2=${hub}&apikey=${VhtearKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
                case 'gltext':
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply('[鉂梋 Contoh : ${prefix}glitchtext IKY & Gans')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${gli}&text2=${tch}%20&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'bloodtxt':
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`銆屸潡銆岰ontoh : ${prefix}gemboktext NAKANO&MIKU`)
					reply(mess.wait)
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=Tobz&text2=Ganz&apikey=${TobzApi}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'nuh':
				case 'tuh':
				if (args.length < 1) return reply('txt, cade?')
				IKY = body.slice(8)
				reply('銆屸潡銆峟azendo')
				buff = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${IKY}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buff, image, {quoted: mek, caption: 'Melhor escrever voc锚 mesma, mana :*'})
				await limitAdd(sender)
				break				
                case 'glitchtext':
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`銆屸潡銆岰ontoh : ${prefix}glitchtext NAKANO&MIKU`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'travar':
                     const pesan = body.slice(5)
                      if (!isPremium) return reply(mess.only.premium)
                      if (pesan.length > 5000) return client.sendMessage(from, 'ate 5k de caracteres', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[TRAVA馃悐馃毄]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks2 = `*[TRAVA馃悐馃毄]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks3 = `*[TRAVA馃悐馃毄]*\nTRAVADO POR : @${nomor.split("@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                       const teks4 = `*[TRAVA馃悐馃毄]*\nTRAVADO POR : @${nomor.split("5519999897566@s.whatsapp.net")[0]}\nMensagem : ${pesan}`
                      var options = {
                         text: teks1,
                         text: teks2,
                         text: teks3,
                         text: teks4,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('5519999897566@s.whatsapp.net', options, text, {quoted: mek})
                    reply('1 trava enviada')
                    break
           case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `銆� *TIMELINE PLAY MP3* 銆峔n*鈥� T铆tulo:* ${anu.result.title}\n*鈥� Link:* ${anu.result.source}\n*鈥� Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, N脙O SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 
            case 'smule':
					if (args.length < 1) return reply('Cad锚 o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*T铆tulo* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de v铆deos esta executando`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
				case 'ttp':
					if (args.length < 1) return reply('Cad锚 o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
                case 'image':
					if (args.length < 1) return reply('O que voc锚 quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `voc锚 foi banido ${body.slice(7)}@c.us`, text)
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*鉃� title :* ${anu.title}\n*鉃� app_id :* ${anu.app_id}\n*鉃� description :* ${anu.description}\n*鉃� developer_id :* ${anu.developer_id}\n*鉃� developer :* ${anu.developer}\n*鉃� score :* ${anu.score}\n*鉃� full_price :* ${anu.full_price}\n*鉃� price :* ${anu.price}\n*鉃� free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*馃槝* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'pinterest':
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    await limitAdd(sender)
					break
                case 'darkjokes':
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
         case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*煤ltima vers茫o*: ${hepi.latest_version}\n*g锚nero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
		case 'happymod':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*vers茫o*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
	
				case 'naruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'nsfwboquete':

					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
case 'base1':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/bf/base1.php?cpf=${body.slice(10)}`)
			        base1 = `馃攷 Pepyto CONSULTAS / BASE 1 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
case 'base1':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base1.php?cpf=${body.slice(10)}`)
			        base1 = `馃攷 Pepyto CONSULTAS / BASE 1 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base1)
			        break
			        case 'base2':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base2.php?cpf=${body.slice(10)}`)
			        base2 = `馃攷 Pepyto CONSULTAS / BASE 2 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base2)
			        break
                case 'base3':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base3.php?cpf=${body.slice(10)}`)
			        base3 = `馃攷 Pepyto CONSULTAS / BASE 3 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base3)
			        
					break
					
					case 'base4':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base4.php?cpf=${body.slice(10)}`)
			        base4 = `馃攷 Pepyto CONSULTAS / BASE 4 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base4)
			        break
                case 'base5':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base5.php?cpf=${body.slice(10)}`)
			        base5 = `馃攷 Pepyto CONSULTAS / BASE 5 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base5)
			        break
                case 'base6':
                    if (args.length < 1) return reply('Cade O Cpf? ')
                    anu = await fetchJson(`http://70.37.60.112:8080/so/base6.php?cpf=${body.slice(10)}`)
			        base6 = `馃攷 Pepyto CONSULTAS / BASE 6 馃攷

鉃� NOME: ${anu.nome}
鉃� SEXO: ${anu.sexo}
鉃� NASCIMENTO: ${anu.nascimento}
馃搶 BY: Pepyto BOT `
			        reply(base6)
					break
			        reply(base1)
			        break
				case 'boruto':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
                case 'dono1':
                    anu = await fetchJson(`https://darkkkw.herokuapp.com/`)
                    anuk = await getBuffer(data.screenshot)
                    dark = `鉃� NOME: Guilherme\n鉃� NUMERO: 5519999897566\n鉃� SEXO: ${anu.sexo}\n鉃� NICK: '🥶ᣳ⃟ᣳ⃟ᣳ⃟ᣳᣳ 𝙿𝙸𝙲𝙾𝙻𝙸𝙽𝙾'𝐗𝐒❄️\n鉃� YT: Off_ \n鉃� INSTA: @Hishigaki_guilherme`
					client.sendMessage(from, anuk, image, {quoted: mek, caption: dark})
                    await limitAdd(sender)
                    break
                case 'carta':
                    if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 30) return reply('ate 30 caracteres')
                    anu = await fetchJson(`https://deckofcardsapi.com/api/deck/${teks}/draw/?count=2`)
			        carta = `INFORMA脟脮ES DA SUA CARTA

鉃� IMAGEM DA CARTA: ${anu.image}
鉃� VALOR: ${anu.data.value}
鉃� TRAJE: ${anu.data.suit}
鉃� CARTA: ${anu.code}

鉃� SUAS CARTAS RESTANTES: ${anu.remaining}

Eae, ganhou do seu oponente 馃槼`
			        reply(carta)
					break
					
                case 'bmerc':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 30) return reply('O id 茅 longo, at茅 30 caracteres')
                    anu = await fetchJson(`https://api.mercadolibre.com/applications/${teks}`)
			        merc = `INFORMA脟脮S DO PRODUTO 馃悐馃毄

鉃� ID DO PRODUTO: ${anu.id}
鉃� NOME DO PRODUTO: ${anu.name}
鉃� LINK: ${anu.url}
鉃� DESCRI脟脙O: ${anu.description}

馃搶 BY: Pepyto BOT `
			        reply(merc)
					break
                case 'wikin':
                    anu = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UOqdO-2ei6z2DRyBfYWb_JX8D1Cw6Ev0XA&usqp=CAU`)
                    client.sendMessage(from, anu, image, { quoted: mek, caption: '*Informa莽玫es logo abaixo 鉁�*'})
                    anu = await fetchJson(`https://br.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${body.slice(10)}`)
			        wiki = `INFORMA脟脮S WIKIP脡DIA 馃悐馃毄

鉃� TITULO: ${body.slice(10)}
鉃� QUERY: ${anu.query}
鉃� PAGINA: ${anu.to}
鉃� NS: ${anu.ns}

DESCULPEM POR TER POUCAS COISAS, POIS AINDA TOU APRENDENDO SOBRE APIS. `
			        reply(wiki)
					break
//consulta					
                case 'iplog':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${teks}`)
			        ipl = `INFORMA脟脮S IP 馃悐馃毄

鉃� *CIDADE:* ${anu.city}
鉃� *Latitude*: ${anu.latitude}
鉃� *Longtitude*: ${anu.longitude}
鉃� *REGI脙O*: ${anu.region_name}
鉃� *UF*: ${anu.region_code}
鉃� *IP*: ${anu.ip}
鉃� *TIPO*: ${anu.type}
鉃� *CEP*: ${anu.zip}
鉃� *LOCALIDADE*: ${anu.location.geoname_id}
鉃� *CAPITAL*: ${anu.location.capital}
鉃� *DDD*: ${anu.location.calling_code}
鉃� *PA脥S*: ${anu.location.country_flag_emoji}


CR脡DITOS: 

DONO API: wa.me/+554591450728
DONO C脫DIGO: 鈨儣饾棢饾棬饾棖饾棓饾棪  鈽� `
			        reply(ipl)
					break
                case 'toemoj':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.ritekit.com/v1/emoji/auto-emojify?text=${teks}&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`)
			        ipl = `*TEXTO CONVERTIDO EM EMOJI*

鉃� *RESULTADO:* ${anu.text}`
			        reply(ipl)
					break
                case 'pes':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://triunfo.pe.gov.br/wp-json/wp/v2/posts?search=${teks}`)
			        ipl = `NOTICIAS ${teks} 馃悐馃毄

鉃� *ID:* ${anu.id}
鉃� *DATA*: ${anu.date}
鉃� *LINK NOT脥CIA*: ${anu.link}
鉃� *T脥TULO*: ${anu.title}
鉃� *FONTE*: ${anu.slug}`
			        reply(ipl)
					break
                case 'bcnpj':
                    teks = body.slice(7)
                    res = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${teks}`)
			        cnp = `CONSULTA CNPJ 馃悐馃毄

 鉃� *ATIVIDADE PRINCIPAL:* ${res.atividade_principal}
 鉃� *DATA SITUA脟脙O:* ${res.data_situacao}
 鉃� *TIPO:* ${res.tipo}
 鉃� *NOME:* ${res.nome}
 鉃� *UF:* ${res.uf}
 鉃� *TELEFONE:* ${res.telefone}
 鉃� *SITUA脟脙O:* ${res.situacao}
 鉃� *BAIRRO:* ${res.bairro} 
 鉃� *RUA:* ${res.logradouro}
 鉃� *N脷MERO:* ${res.numero}
 鉃� *CEP :* ${res.cep}
 鉃� *MUNIC脥PIO:* ${res.municipio}
 鉃� *PORTE:* ${res.porte}
 鉃� *ABERTURA:* ${res.abertura}
 鉃� *NATUREZA JUR脥DICA:* ${res.natureza_juridica}
 鉃� *FANTASIA:* ${res.fantasia}
 鉃� *CNPJ:* ${res.cnpj}
 鉃� *脷LTIMA ATUALIZA脟脙O:* ${res.ultima_atualizacao}
 鉃� *STATUS:* ${res.status}
 鉃� *COMPLEMENTO:* ${res.complemento}
 鉃� *EMAIL:* ${res.email}

CR脡DITOS: 

DONO C脫DIGO: 鈨儣饾棢饾棬饾棖饾棓饾棪  鈽� `
			        reply(cnp)
					break
                case 'bcep':
					lxrd = body.slice(6)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})
                    if (data.error) return reply(data.error)
                    kiny = `*馃攳CONSULTA REALIZADA馃攳* \n\n 鉃� *CEP:* ${data.cep} \n\n 鉃� *ENDERE脟O:* ${data.logradouro}\n\n 鉃� *COMPLEMENTO:* ${data.complemento} \n\n 鉃� *BAIRRO:* ${data.bairro} \n\n 鉃� *LOCALIDADE:* ${data.localidade} \n\n 鉃� *UF:* ${data.uf}\n\n 鉃� *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    await limitAdd(sender)
                    break
                case 'bpl':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://apicarros.com/v1/consulta/${teks}/json/`)
			        placa = `CONSULTA PLACA 馃悐馃毄

鉃� *ANO:* ${anu.ano}
鉃� *ANO MODELO*: ${anu.anoModelo}
鉃� *CHASSI*: ${anu.chassi}
鉃� *CODIGO RETORNO*: ${anu.codigoRetorno}
鉃� *CODIGO SITUACAO*: ${anu.codigoSituacao}
鉃� *COR*: ${anu.cor}
鉃� *MARCA*: ${anu.marca}
鉃� *MUNICIPIO*: ${anu.municipio}
鉃� *SITUACAO*: ${anu.situacao}
鉃� *UF*: ${anu.uf}


CR脡DITOS: 

DONO DA API: wa.me/+554591450728
CRIADO DA CASE: 鈨儣饾棢饾棬饾棖饾棓饾棪  鈽� `
			        reply(placa)
					break
                case 'cpfg':
                    anu = await fetchJson(`http://geradorapp.com/api/v1/cpf/generate?token=c253cb1c1864a8d8e32d5115cc5ad60b`)
			        dono1 = `CPF GERADO 馃悐馃毄

鉃� CPF: ${anu.data.number}
鉃� FORMATO: ${anu.data.number_formatted}
鉃� STATUS: ${anu.data.message}

馃搶 BY: Pepyto BOT `
			        reply(dono1)
					break
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
case 'onich':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
tujuh = fs.readFileSync('./assets/a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
tujuh = fs.readFileSync('./assets/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'mercury':
tujuh = fs.readFileSync('./bi/mercury.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ponta':
tujuh = fs.readFileSync('./bi/ponta.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'mo莽a':
tujuh = fs.readFileSync('./bi/mo莽a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nav':
tujuh = fs.readFileSync('./bi/nav.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dama':
tujuh = fs.readFileSync('./bi/dama.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'remedy':
tujuh = fs.readFileSync('./bi/remedy.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'cavala':
tujuh = fs.readFileSync('./bi/cavala.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'facetime':
tujuh = fs.readFileSync('./bi/facetime.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pe':
tujuh = fs.readFileSync('./bi/pe.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'nike12':
tujuh = fs.readFileSync('./bi/nike12.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'minato1':
tujuh = fs.readFileSync('./bi/vibeyondaime.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vibea':
tujuh = fs.readFileSync('./bi/vibeanimes.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'minato2':
tujuh = fs.readFileSync('./bi/tipominato.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'deidara':
tujuh = fs.readFileSync('./bi/tipodeidara.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hashirama':
tujuh = fs.readFileSync('./bi/tipohashirama.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pain':
tujuh = fs.readFileSync('./bi/tipopain.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'vegeto':
tujuh = fs.readFileSync('./bi/tipovegeto.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'gogeta':
tujuh = fs.readFileSync('./bi/tipogogeta.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'eren':
tujuh = fs.readFileSync('./bi/facyeager.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'renegado':
tujuh = fs.readFileSync('./bi/renegado.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tobi':
tujuh = fs.readFileSync('./bi/tipotobi.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tobirama':
tujuh = fs.readFileSync('./bi/tipotobirama.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
//say
case 'say1':
tujuh = fs.readFileSync('./assets/say1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say2':
tujuh = fs.readFileSync('./assets/say2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say3':
tujuh = fs.readFileSync('./assets/say3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'say4':
tujuh = fs.readFileSync('./assets/say4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//xxx
case 'xxx1':
tujuh = fs.readFileSync('./assets/xxx1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'xxx2':
tujuh = fs.readFileSync('./assets/xxx2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
//variados
case 'teto1':
tujuh = fs.readFileSync('./assets/teto1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit1':
tujuh = fs.readFileSync('./assets/edit1.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit2':
tujuh = fs.readFileSync('./assets/edit2.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit3':
tujuh = fs.readFileSync('./assets/edit3.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'edit4':
tujuh = fs.readFileSync('./assets/edit4.mp4');
client.sendMessage(from, tujuh, video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break

		
				case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Quest茫o : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'gay1':

					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay ${gay}\n\n\nPercentagem Gay : ${anu.persen}%\nAlerta!!! : gay, mas n茫o cego`
		   reply(hasil)
		   await limitAdd(sender)
					break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break	
                case 'truth':
				case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Voc锚 quem 茅 o dono? ')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEMESBRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'hoje eu tou com茅diante锔�', quoted: mek })
					await limitAdd(sender) 	
					break 
			    case 'kbbi':
					if (args.length < 1) return reply('O que voc锚 quer procurar um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
					if (args.length < 1) return reply('O que voc锚 quer procurar um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('De acordo com o percentual gay:\n\n'+anu.desc+anu.persen)
					break
			  case 'next':
               
                if (isGroup) return  reply( 'N脙O PODE ESTAR EM GRUPO KAK')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 馃悐\n*${prefix}next* 鈥� Encontre novos parceiros`)
                break
			case 'instaimg':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `鈥� *Envio:* ${story.uploaded}\n鈥� *Termina:* ${story.expired}\n鈥� *Tamanho: ${story.filesize}\n鈥� *Tipo:* ${story.type}\n鈥� Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irm茫o afk por causa do que?')                                  
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *M脡DIO AFK ${tels} N脙O PERTURBE SIM*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break 
				case 'indo10':
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *.daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute9, image, { quoted: mek, caption: 'Aqui est谩 o Bro Baixe o seu pr贸prio link\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'bucin':
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('N茫o fique entediado:\n\n'+anu.desc)
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return reply('鉂� *FALSO* 鉂�')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'N茫o fa莽a ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERRO* 鉂�')
					}
					break
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'O tempo acabou:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos para ir', text) // ur cods
					}, 0) // 1000 = 1s,
					break
		        case 'gay':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como voc锚 茅 gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%', text, { quoted: mek })
					break
                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break
				case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
				case 'openanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('O modo anime j谩 est谩 ativo')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Ativado com sucesso o modo anime neste grupo 鉁旓笍')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desativado com sucesso neste grupo 鉁旓笍')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return reply('鉂� *FALSO* 鉂�')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERRO* 鉂�')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return reply('鉂� *FALSO* 鉂�')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERRO* 鉂�')
					}
					break
				case 'animekiss':
                if (!isAnime) return reply(' *Deve ativar o modo Anime* ')
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o 铆cone do Grupo')
                    break			
                case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `鈹忊攣鈹佲潐 *LEVEL* 鉂夆攣鈹乗n鈹ｂ姳 Nome : ${sem}\n鈹ｂ姳 Seu XP :  ${userXp}\n鈹ｂ姳 Seu Level : ${userLevel}\n鈹椻攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹乣
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :饾槂')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*O comando de level j谩 estava ativo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefix}leveling on para ativar e  ${prefix}leveling off para desativar')
					}
					break
			    case 'tinyurl':
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
				case 'slide':
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cpaper':
				cpaper = `${body.slice(8)}`
				buff = await getBuffer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				client.sendMessage(from, buff, image, {quoted: mek})
				break 
                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link est谩 ativo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Antilink ativado com sucesso 鉁�')
						client.sendMessage(from,`*Aten莽茫o, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('O anti-link foi desabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo 鉁旓笍')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
				case 'cgame':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cstyle':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Cad锚 o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return reply('Cad锚 o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
			    case 'lovemake':
              	    if (args.length < 1) return reply('Onde est谩 o texto, irm茫o??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('鉂� Falha ao converter v铆deo para mp3 鉂�')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'boquet':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = await fetchJson(randKey.teks)
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

			    case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*n煤mero* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*鉃� Nama :* ${anu.result.full_name}\n*鉃� Username :* ${anu.result.username}\n*鉃� Followers :* ${anu.result.follower}\n*鉃� Mengikuti :* ${anu.result.follow}\n*鉃� Jumlah Post :* ${anu.result.post_count}\n*鉃� Private :* ${anu.result.is_private}\n*鉃� Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				//lgiproses
				case 'tesss':
					if (args.length < 1) return reply('o que voc锚 quer tio')
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto 茅 longo, com at茅 8 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                                case 'mining':
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque voc锚 茅 nosso propriet谩rio da equipe bot de envio ${one}Xp para voce`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Parab茅ns* ${pushname} voc锚 pega *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
			    case 'waifu':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ksksksks hmm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERROR* 鉂�')
					}
					break
			    case 'waifu2':
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'wibu':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` 鉃� *nome* ${anu.result.nama} 鉃� *descri莽茫o* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   case 'covidcountry':
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Pa铆s : ${data.result.country}\n\nAtivo : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncr铆tico : ${data.result.critical}\nMortes por milh茫o : ${data.result.deathsPerOneMillion}\nrecuperado : ${data.result.recovered}\nteste por milh茫o : ${data.result.testPerOneMillion}\ncasos de hj : ${data.result.todayCases}\nMortes de hj : ${data.result.todayDeath}\nCasos total : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
					case 'totaluser':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`鈺攢鈹�鈹�鈹�*銆� *TOTAL DE USU脕RIO Pepyto BOT 馃憫* 銆峔n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `鈹�+ Total de usu谩rios : ${user.length}\n鈺扳攢鈹�鈹�鈹�鈹�鈹�*銆� *dark* 銆�*鈹�鈹�鈹�鈹�`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'desligar':
					if (!isOwner) return reply(mess.only.ownerB)
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('*ERRO AO DESLIGAR*')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break
			case 'closegc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
// recursos anime, random @Pepyto domina vida

                case 'anjing':
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
                case 'resepmasakan':
                
                reply(mess.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*INGREDIENTES虏 INDISPENS脕VEL*\n${anu.result.bahan}\n\n*COMO COZINHAR*\n${anu.result.cara}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `鈥� *T铆tulo:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'cerpen':

                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`, {method: 'get'})
                   cerpen = `鈥� *Title:* ${anu.result.title}\n鈥� *Pengarang:* ${anu.result.pengarang}\n鈥� *Kategori:* ${anu.result.kategori}\n\n${anu.result.cerpen}`
                   client.sendMessage(from, cerpen, text, {quoted: mek})
                   break 
               case 'puisiimg':

                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   client.sendMessage(from, pus, image, {quoted: mek})
                   break 
				case 'akira':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
                case 'opengc':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nsekarang *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessa
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que j谩 foram enviadas`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil馃槜')
					break
				case 'filme':
				if (args.length < 1) return reply('Que filme quer encontrar?')
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `鈥� T铆tulo: *${anu.result.judul}*\n鈥� Resolu莽茫o: *${anu.result.data.resolusi}*\n鈥� Link Download: *${anu.result.data.urlDownload}*\n`
				client.sendMessage(from, film, text, {quoted: mek})
				await limitAdd(sender) 
					break					
				case 'randomcat':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'mlherolist':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=ANTIGRATISNIHANJENKKK`)
					icon = await getBuffer(anu.icon)
					client.sendMessage(from, icon, image, {quoted: mek})
					break
			    case 'randomanime':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERROR* 鉂�')
					}
					break
			    case 'randomhentai':
				    try {
						if (!isNsfw) return reply('鉂� *FALSE* 鉂�')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERROR* 鉂�')
					}
					break
                case 'irii':
			client.sendPtt(from, './lindy/iri2.mp3', id)
			break
                 case 'play':
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nT铆tulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamanho : ${anu.result.size}\n\n*ESPERE UM POUQUINHO, N SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				case 'setnome':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: mek})
                   break
				case 'galaxtext':
					if (args.length < 1) return reply('o que voc锚 quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto 茅 longo, com at茅 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'phlogo':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
                      case 'gay1': 
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                                             break
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'txtoc':
				case 'txtocean':
					if (args.length < 1) return reply('O que voc锚 quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=Tobz&apikey=${TobzApi}`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cad锚 o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'teste':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'teste2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cad锚 o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                    case 'fbcheker':

                    client.sendMessage(from, fbcheker(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                    case 'musicas':
                    case 'msc':
                    case 'm煤sicas':

                    client.sendMessage(from, musicas(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPT0j8l4LzReLf1xM9IBhzFgwy-I0UHGZEw&usqp=CAU`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Comandos de m煤sicas 鉁�*'})
                    break
                    case 'hackfb':

                    client.sendMessage(from, hackfb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                    case 'tool':

                    client.sendMessage(from, tool(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Pepyto domina 鉁�*'})
                    break
                    case 'animemenu':

                    client.sendMessage(from, animemenu(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuSbtfXab8BfnyFVg-ex9ti1fNafH7bRp4A&usqp=CAU`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '*Comandos de anime 鉁�*'})
                    break
                    case 'bruteforcefb':

                    client.sendMessage(from, bruteforcefb(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                    case 'toolsphishing':

                    client.sendMessage(from, toolsphishing(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                    case 'socialfishv2':

                    client.sendMessage(from, socialfishv2(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                    case 'terkeytermux':

                    client.sendMessage(from, terkeytermux(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://i.ibb.co/Lv8QGtQ/ch3-1-svg-compress81.jpg`)
                    client.sendMessage(from, tod, image, { quoted: mek, caption: '鈻夆棧鈼⑩枆鈻夆枖鈻夆枆鈻斺枆鈻夆枖鈻夆枆鈻斺枆 鈻夆棩鈼も枆鈻夆杺鈻夆枆鈻傗棨鈻夆杺鈻夆枆鈻傗棨 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻斺枆鈻夆攩鈻夆枆鈻斺枆 鈻夆攩鈹嗏枆鈻夆攩鈻夆枆鈻傗枆鈻夆攩鈻夆枆鈹嗏枆'})
                    break
                case 'glitch':
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto 茅 muito longo, at茅 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui mana', quoted: mek})
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto 茅 longo, com at茅 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto 茅 muito longo, at茅 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto 茅 longo, at茅 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
					case 'spamcall':
          if (!isPremium) return reply(mess.only.premi)
          reply('Espere..')
                                       if (args[0].startsWith('08')) return reply('Use o prefixo n煤mero 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Falha ao ligar para o n煤mero do bot')
                                       if (args[0].startsWith('82387804410')) return reply('Falha ao ligar para o n煤mero do propriet谩rio')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cad锚 o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
			    case 'fakereplay':
                   client.reply(from, 'ange mas', 'mending lari', "0816-5466368")
                   break
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descri莽茫o :* ${groupDesc}\n*N煤mero de Administradores :* ${groupAdmins.length}\n*N煤mero de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			    case 'owner':
                    client.sendMessage(from, {displayname: "Gui", vcard: vcard}, MessageType.contact, { quoted: mek})
                    client.sendMessage(from, 'Ctt do meu dono ai, pfv n flode o chat',MessageType.text, { quoted: mek} )
                    break
                case 'fitnah':	
				case 'fake':          
                    if (!isGroup) return reply(mess.only.group)
                    arg = body.substring(body.indexOf(' ') + 1)
				    isi = arg.split(' |')[0] 
			        pesan = arg.split('|')[1] 
				    pesan2 = arg.split('|')[2] 
                    costum(pesan, isi, pesan2)
                    break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nome do bot* : ${me.name}\n*N煤mero do bot* : @${me.jid.split('@')[0]}\n*Prefixo* : ${prefix}\n*Contatos bloqueados* : ${blocked.length}\n*O bot est谩 ativo em* : ${kyun(uptime)}\n\n*Digite .dono para ver a info do dono*`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                case 'blowjob':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'bloqueados':
					teks = 'Esta 茅 a lista de n煤meros bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'leens':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('S贸 uma foto mano')
					}
					break
				case 'figu':
				case 'fig':
				case 'f':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`鉂� Falhou, no momento da convers茫o ${tipe} para o adesivo`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos com legendas *.f* ou marque uma imagem que j谩 foi enviada`)
					}
					break
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual 茅 o c贸digo da linguagem, tio?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cad锚 o texto tio', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto 茅 merda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'shadow': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nihkkkak', quoted: mek})
					break
				case 'minion':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nihhjmmak', quoted: mek})
					break
				case 'neon':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nihjjkkak', quoted: mek})
					break
				case 'neongreen': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Njkkkak', quoted: mek})
					break
				case 'neon2':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'kkkkkk', quoted: mek})
					break
				case '3d':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'kkksk', quoted: mek})
					break
				case 'walpaperanime':
				    try {
			    	if (!isOwner) return reply(mess.only.ownerB)
						if (!isNsfw) return reply('鉂� *FALSO* 鉂�')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						client.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ksksks'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('鉂� *ERRO* 鉂�')
					}
					break
					case 'dado':    
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'addvip':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que voc锚 quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '鈺攢鈹�鈹�鈹�銆� *PREMIUM馃憫* 銆嶁攢鈹�*\n鈹�+ *N煤mero* : \n鈹�+ *Expirado*: *30 Days*\n鈹�+ *Status*: *ATIVO*\n鈹� Thx para atualizar para premium馃グ\n*鈺扳攢鈹�鈹�鈹�鈹�鈹�銆� *posi莽茫o* 銆嶁攢鈹�鈹�鈹�'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`鈺攢鈹�鈹�鈹�銆� *PREMIUM馃憫* 銆嶁攢鈹�*\n鈹�+ *N煤mero* : @${mentioned[0].split('@')[0]}\n鈹�+ *Expirado*: *30 Days*\n鈹�+ *Status*: *ATIVO*\n鈹� Thx para atualizar para premium馃グ\n*鈺扳攢鈹�鈹�鈹�鈹�鈹�銆� *posi莽茫o* 銆嶁攢鈹�鈹�鈹�`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'daftarvip': 
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':   
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break	
					case 'cekvip': 
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite *.Daftarvip* para adquirir o acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�*\n*Nome do bot:* PepytoBOT\n*鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�*\n銆� *饾悤饾悎饾悘 饾悢饾悞饾悇饾悜*銆廫n*鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�*\n*鈥煤mero:* *${sender.split("@s.whatsapp.net")[0]}*\n*鈥tatus:* *ATIVO*\n*鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�*\n*Status Bot:* *${kyun(uptime)}*\n\n*VOCE 脡 UM MEMBRO PREMIUM* 馃悐馃毄\n*鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�鈹�*` , text, { quoted: mek, })
					break
					case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Voc锚 n茫o 茅 um Membro Premium, entre em contato com o propriet谩rio ou digite .Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '鈺攢鈹�鈹�鈹�銆� *PREMIUM馃憫* 銆嶁攢鈹�*\n鈹�+ *N煤mero* : \n鈹�+ *Status*: *DEATIVO*\n鈹� Te vejo para o pr贸ximo pedido馃檪\n*鈺扳攢鈹�鈹�鈹�鈹�鈹�銆� *posi莽茫o* 銆嶁攢鈹�鈹�鈹�'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`鈺攢鈹�鈹�鈹�銆� *PREMIUM馃憫* 銆嶁攢鈹�*\n鈹�+ *N煤mero* : @${mentioned[0].split('@')[0]}\n鈹�+ *Status*: *DEATIVO*\n鈹� Te vejo para o pr贸ximo pedido馃檪\n*鈺扳攢鈹�鈹�鈹�鈹�鈹�銆� *posi莽茫o* 銆嶁攢鈹�鈹�鈹�`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'ichiadmin':
					tod = await getBuffer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*鈺攢鈹�鈹�鈹�*銆� *ADMINBOT dark 鉁�* 銆峔n*鈹�+ wa.me/5573998183889*鈺扳攢鈹�鈹�鈹�鈹�鈹�*銆� *Pepyto* 銆�*鈹�鈹�鈹�鈹�*\n\n*_SE QUER SER ADMIN DO BOT Pepyto_*\n*_Tipo /iklan_*' })
					break
				case 'iklan':
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'premiumcek':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*鈺攢鈹�鈹�鈹�*銆� *PREMIUM USER馃憫* 銆峔n*鈹�+ wa.me/551999897566*鈺扳攢鈹�鈹�鈹�鈹�鈹�*銆� *Pepyto* 銆�*鈹�鈹�鈹�鈹�*\n\n*_SE QUER SER UM USU脕RIO PREMIUM DO Pepyto BOT_*\n*_Ketik #daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isOwner) return reply(mess.only.ownerB)
                 if (!ismod) return reply('kamu Belum Terdaftar sebagai User Modbot')
                reply('kamu udah ke daftar sebagai user Modbot')
                break
                    case 'modbotlist':
					teks = 'Esta 茅 a lista de usu谩rios premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium': 
					client.updatePresence(from, Presence.composing) 
 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando aceito adicionar usu谩rio premium : ${premium}`)
					break
                 case 'calculadora':
				     if (args.length < 1) return reply(`[鉂梋 Enviar pedidos *${prefix}calculadora [ N煤meros ]*\nExemplo : ${prefix}calculadora 12*12\n*NOTA* :\n- Para multiplica莽茫o usando *\n- Para uso adicional +\n- Para redu莽茫o do uso -\n- Para compartilhar usando /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    client.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'porno':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'k'})
					break
				case 'belle2':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.pinimg.com/originals/24/5f/91/245f91208f9030724dbc8d1bede2e9ff.gif`)
					client.sendMessage(from, buffer, sticker, {quoted: mek, caption: 'slc'})
					break
				case 'bot':
			     	memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/dPUVFF6.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*_Comandos basicos para bot:_*\n\n*pkg upgrade && pkg update*\n*pkg install git*\n*git clone (link da git)*\n*cd (reposit贸rio)*\n*bash install.sh*\n*npm start*\n\n*Pepyto Domina*'})
					break
				case 'belle3':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://1.bp.blogspot.com/-3K_b14RzHTA/XwTW7SQTPRI/AAAAAAAAPtY/UOaKURECbzwXfvASa3g6Pz0D_Ha73Dw4wCLcBGAsYHQ/s1600/boabronha_10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'olha p isso mano, pqp '})
					break
				case 'akeno':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFAocqaur5ZX1DPN6ZGP8PJy2cNppas_gYA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'loli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/iphQUGi.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hmm, ent茫o quer ver loli?'})
					break
				case 'hentai':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/8U9GwX4.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Cara bate pra 2d 馃槀'})
					break
				case 'bomdia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Bom dia, vcs sao fodas 鉂わ笍'})
					break
				case 'boatarde':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa tarde, rapeize 馃槑馃憤'})
					break
				case 'boanoite':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Boa noite fml 鉂わ笍'})
					break
                case 'belle':                 
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Belle :V*')
				break
				case 'belle1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '馃憖锔�'})
					break
				case 'lofi':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '锔忦煉�'})
					break
				case 'malkova':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '锔忦煉�'})
					break
				case 'nsfwloli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhzKetbU3pzhoZdaIo6qBklCzwvmCCOznbg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Rum锔�'})
					break
				case 'reislin':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlc2hMIJ4PjW5tIXltrKe6xeBoKPLKTZMnQ&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '馃き'})
					break
				case 'boanoite':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia 鉂わ笍'})
					break
				case 'bomdia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'bom dia 鉂わ笍'})
					break
				case 'termux':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Terminal 茅 um programa muito conhecido no mundo das distribui莽玫es聽Linux. Ele 茅 uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, j谩 pensou em聽utilizar o聽Terminal Linux聽no seu聽Android? Esta 茅 a proposta do聽Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utiliza莽茫o do Terminal聽aumenta muito a produtividade聽do usu谩rio que j谩 possui um determinado n铆vel de conhecimento t茅cnico.\nCom o terminal, 茅 poss铆vel fazer diversas e diferentes coisas, desde navegar entre os diret贸rios e instalar programas, at茅 descompactar arquivos e monitorar os processos.'})
					break
		    	case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRI脟脙O* : ${groupDesc}`})
                    break
				case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe锔�', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'dono':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`Eu https://imgur.com/gallery/zIjUg8s`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*CRIADOR:* Guilherme \n*WPP:* wa.me/+5519999897566\n*INSTA:* @Hoshigaki_Guilherme\n\n\nEspero que tenham gostado do bot 馃悐馃毄锔�'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('鉂� *ERROR* 鉂�')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'lolizinha'})
					})
					break					
                                case 'lolih':
                                        gatauda = body.slice(6)
                                                            reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
				case 'nsfwloli':
					if (!isNsfw) return reply('*COMANDO SO FUNCIONA NO PV AMIGO.*')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('鉂� *ERRO* 鉂�')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'pronomeneu':
					if (args.length < 1) return reply('Onde est谩 o texto, hum?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Onde est谩 o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'tiktok':
					if (args.length < 1) return reply('Onde est谩 o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'Onde est谩 o nome de usu谩rio, hum', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Poss铆vel nome de usu谩rio inv谩lido')
					}
					break
				case 'nulis':
				case 'tulis':
				  client.updatePresence(from, Presence.composing)
			if (args.length < 1) return reply(`O que voc锚 deve escrever?`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Que tipo 茅??')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Cad锚 o url, hum?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Onde est谩 o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `鈺犫灔 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `鈺犫灔 https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'limpar':
					if (!isOwner) return reply('Quem 茅 Voc锚?, Voce n茫o 茅 meu dono 馃槀')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Excluido todos os chats com sucesso :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem 茅 Voc锚, voc锚 n茫o 茅 meu dono 馃槀?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMI脟脙O DE AVISO ]\n\n${body.slice(4)}`})
						}
						reply('Transmiss茫o enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ TRANSMISS脙O DE AVISO ]\n\n${body.slice(4)}`)
						}
						reply('Transmiss茫o enviada com sucesso')
					}
					break
        case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora 茅 admin do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Voc锚 quer adicionar um g锚nio?')
					if (args[0].startsWith('08')) return reply('Use o c贸digo do pa铆s, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque 茅 privado')
					}
					break
				case 'banir':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que voc锚 quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('{ 鉂� } *Marque a figurinha*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('鉂� Falha ao converter adesivos em imagens 鉂�')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Onde est谩 o texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('O modo Simi est谩 ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Ativado com sucesso o modo simi neste grupo 馃槜锔�')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desativado modo simi com sucesso neste grupo 馃槨锔�')
					} else {
						reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
					}
					break
				case 'bemvindo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('J谩 esta ativo.')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo 馃槈锔�')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativou com sucesso o recurso de boas-vindas neste grupo 馃槨锔�')
					} else {
						reply('1 para ativar, 0 para desativar, lerd茫o vc em KAKKKK')
					}
                                      break
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque a pessoa que voc锚 quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 馃様')
					}
					break
		        case 'setfoto2':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quem 茅 Voc锚?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o 铆cone do Grupo')
                    break
                case 'bc2':
					if (!isadminbot) return reply('Quem 茅 Voc锚?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmiss茫o enviada')
					}
					break
				case 'hidetag2':
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('Quem 茅 Voc锚?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quem 茅 Voc锚?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o 铆cone do Grupo')
                    break
                case 'bc3':
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmiss茫o enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRANSMISS脙O* ]\n\n${body.slice(4)}`)
						}
						reply('Transmiss茫o enviada')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('S贸 uma foto mano')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
