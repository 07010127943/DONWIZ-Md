/**

//═════════════════════════════════════════════════════════════════════════════════════//
//                     ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                             //
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗       //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗      //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║      //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║      //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝      //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝       //
//═════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.3.4
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
   * UPDATED ON : 08 May 2024.
*
 ⛥
  //┌┤\n`
 **/




/*
cmd({
pattern : "help",
type : help,

}

*/






global.BUTTONS = process.env.BUTTONS || "0"
const os = require('os')
let menus = false
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny,bot_,alive, runtime, formatp, smsg ,getAdmin , send , react ,botpic,sleep, getBuffer ,prefix, sck1,smd,sck ,getTime ,formatDate  , groupdb,smdJson,smdBuffer, isAdmin  } = require(lib_dir || "../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/plugins')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const axios = require('axios')
const fetch = require("node-fetch");
const util = require("util");
const events = sᴜʜᴀɪʟ_ᴍᴅ;
const { commands } = require('../lib');
const { exec } = require("child_process")
const translatte = require("translatte");
const cheerio = require('cheerio');
const path = require('path');
const cron = require('node-cron');
  
var cronStart = false 

if(!cronStart){
  cron.schedule('*/15 * * * *', () => {
    cronStart =  true;
    fs.readdir( './temp', (err, files) => {        
      if (err) { return }
      else files.forEach((file) => { try{ fs.unlinkSync("./temp/"+file) }catch{console.log("ERROR DELETING FILES: " , e)} });
    });
  });
}













global.caption =process.env.CAPTION ||  global.caption || Config.caption  || ""
global.ownername = global.ownername || Config.ownername || "≛ Willis"
global.botname = global.botname || Config.botname || "ᴡɪʟʟɪꜱ-ᴍᴅ"
global.menu =  process.env.MENU || global.menu || Config.menu || "3"
global.HANDLERS = process.env.HANDLERS || Config.HANDLERS  || prefix || ""
global.WORKTYPE = process.env.MODE ||   global.WORKTYPE  || Config.WORKTYPE  || "" || ""
global.menu_fancy = process.env.MENU_FANCY || global.menu_fancy  || "1"
global.ui_Cache = {};
global.ui_urls = [];






const _0x588970=_0x3c89;(function(_0x15559b,_0x53aff9){const _0x4ed061=_0x3c89,_0x52baa1=_0x15559b();while(!![]){try{const _0x554047=parseInt(_0x4ed061(0x118))/0x1+parseInt(_0x4ed061(0x8f))/0x2+-parseInt(_0x4ed061(0x91))/0x3+-parseInt(_0x4ed061(0x13a))/0x4*(-parseInt(_0x4ed061(0x6b))/0x5)+-parseInt(_0x4ed061(0xc1))/0x6+-parseInt(_0x4ed061(0x90))/0x7*(parseInt(_0x4ed061(0x98))/0x8)+-parseInt(_0x4ed061(0xcd))/0x9*(-parseInt(_0x4ed061(0x184))/0xa);if(_0x554047===_0x53aff9)break;else _0x52baa1['push'](_0x52baa1['shift']());}catch(_0x3253ac){_0x52baa1['push'](_0x52baa1['shift']());}}}(_0x5d3e,0xbb881),smd({'cmdname':_0x588970(0x172),'alias':['l'],'desc':_0x588970(0xe3),'category':_0x588970(0xf8)},async(_0x4b07ea,_0x447c06)=>{const _0xb10166=_0x588970;try{const _0x2c5cf1={};commands['map'](async(_0x45813b,_0x4a4ca3)=>{const _0x2fe231=_0x3c89;if(_0x45813b[_0x2fe231(0x7b)]===![]&&_0x45813b[_0x2fe231(0x6d)]!==undefined){if(!_0x2c5cf1[_0x45813b[_0x2fe231(0x155)]])_0x2c5cf1[_0x45813b[_0x2fe231(0x155)]]=[];_0x2c5cf1[_0x45813b[_0x2fe231(0x155)]][_0x2fe231(0x170)](_0x45813b['pattern']);}});let _0x17675f=(_0xb10166(0x10a)+runtime(process['uptime']())+'\x0a*🍁\x20ᴛᴏᴅᴀʏ\x20ɪs\x20:*\x20'+_0x4b07ea[_0xb10166(0x111)]+'\x0a*🎗\x20ɴᴏᴡ\x20ᴛɪᴍᴇ\x20:*\x20'+_0x4b07ea['time']+_0xb10166(0xd4)+ownername+'\x0a\x20\x20➮Nᴜᴍ\x20-\x20'+owner[_0xb10166(0x108)](',')[0x0]+_0xb10166(0x136)+formatp(os[_0xb10166(0xf6)]()-os['freemem']())+'/'+formatp(os[_0xb10166(0xf6)]())+'\x0a')[_0xb10166(0x159)](),_0x880056='',_0x309144=[],_0xcf9ed4=Math[_0xb10166(0x120)](Math[_0xb10166(0x121)]()*0x2),_0x559f2b=_0xcf9ed4===0x0?'MENU':_0xb10166(0xa3),_0x32f705='┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09\x20*WILLIS-MD_'+_0x559f2b+_0xb10166(0xe6)+_0x17675f+_0xb10166(0x9c),_0x45868a=0x1,_0x56f23d=0x0;for(const _0x4e3aab in _0x2c5cf1){_0x56f23d+=0x1;if(_0x447c06['toLowerCase']()==_0x4e3aab[_0xb10166(0x18b)]()){_0x32f705=_0xb10166(0x181)+_0x4e3aab['toUpperCase']()+_0xb10166(0xb1);for(const _0x37b214 of _0x2c5cf1[_0x4e3aab]){_0x32f705+=_0xb10166(0xc8)+fancytext(_0x37b214,0x1)+'\x0a';}_0x32f705+=_0xb10166(0xc3),_0x309144=![];break;}_0x56f23d>=0xa&&(_0x45868a+=0x1,_0x56f23d=0x0),_0x32f705+='\x0a*'+_0x45868a+'.'+_0x56f23d+'\x20|'+_0x4e3aab[_0xb10166(0x164)]()+'\x20'+_0x559f2b+'*\x0a',_0x880056+=_0xb10166(0x14b)+_0x4e3aab+_0xb10166(0xa5)+prefix+'help\x20'+_0x4e3aab+_0xb10166(0x17c),_0x309144=[_0x4e3aab];};_0x32f705+='\x0a\x0a'+caption,_0x880056+=_0xb10166(0xee)+prefix+'list\x22}';let _0x36617e=[{'name':'single_select','buttonParamsJson':_0xb10166(0x119)+_0x880056+_0xb10166(0xf1)}],_0x501ea7=_0xb10166(0x149);if(_0x309144&&/1|buttons|btn/gi[_0xb10166(0x15e)](BUTTONS)&&_0x4b07ea[_0xb10166(0xbd)]!==_0xb10166(0x144))await sendButtons(_0x4b07ea,{'after_data':{'image':log0},'caption':_0x17675f,'buttons':_0xb10166(0x13d)+prefix+'menu\x20/#\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#button:cta_url\x20|\x20display_text\x20:\x20JOIN\x20Us\x20👤|\x20id:'+gurl+'\x20/#\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','quoted':_0x4b07ea},_0x36617e);else return await _0x4b07ea[_0xb10166(0xfa)](_0x4b07ea[_0xb10166(0xef)],{'caption':_0x32f705});}catch(_0x43a5d1){await _0x4b07ea[_0xb10166(0x12e)](_0x43a5d1+_0xb10166(0x105),_0x43a5d1);}}));function _0x3c89(_0x4537c6,_0x2d7c6f){const _0x5d3ec8=_0x5d3e();return _0x3c89=function(_0x3c8981,_0x5b477f){_0x3c8981=_0x3c8981-0x6b;let _0x4b4655=_0x5d3ec8[_0x3c8981];return _0x4b4655;},_0x3c89(_0x4537c6,_0x2d7c6f);}function _0x5d3e(){const _0x4f7994=['length','string','reply','quoted','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20➮Fᴏᴜɴᴅᴇʀ-\x20SuhailTechInfo𝛁\x0a\x20\x20➮Oᴡɴᴇʀ\x20-\x20','const\x20a\x20=\x20async()=>{\x0a','\x20Time:-\x20','\x0a┃\x20✭\x20Uptime:\x20','Translate\x27s\x20given\x20text\x20in\x20desird\x20language.','⬡│▸','<\x20text\x20>','┬│▸\x0a│╰─────────────···▸\x0a└───────────────···▸','isSuhail','Inavlid_Type_URL','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#button:quick_reply\x20|\x20display_text\x20:\x20OWNER\x20🌟\x20|\x20id:','log','\x0a}\x0aa()','┌──『','ping\x20/#\x0a\x20\x20\x20\x20\x20\x20\x20\x20#button:quick_reply\x20|\x20display_text\x20:\x20Search\x20🔎\x20|\x20id:','category\x20list','[ERROR]\x20','bot','_LIST*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x09```Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x0a','desc','a17','Search\x20/#\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','----\x0a\x0a','\x20Uptime:-\x20',')\x20not\x20found\x20in\x20bot\x20cmds.\x20Please\x20Provide\x20Valid\x20cmd\x20Name_*','*Uhh\x20PLease,\x20Provide\x20A\x20Command/Directory*','{\x22title\x22:\x20\x22list\x22,\x22id\x22:\x22','jid','owner',']}]}','footer','\x0a\x20\x20\x20\x20\x20\x20\x20\x20#button:cta_url\x20|\x20display_text\x20:\x20Support\x20Us\x20🫂|\x20id:','sender','*_Provided\x20Cmd(\x20','totalmem','*Pong*\x0a\x20*','general','\x0aCommand:owner','sendUi','\x20\x20》────⊷\x0a│\x20╭──────✧❁✧──────◆','\x22\x20Already\x20set\x20for\x20\x22','to\x20get\x20extact\x20name\x20where\x20that\x20command\x20is\x20in\x20repo.\x0aSo\x20user\x20can\x20edit\x20that.','_LIST*\x20\x0a┗━━━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a\x09```Reply\x20the\x20number\x20you\x20wants\x20to\x20select```\x0a\x0a','Error\x20reading\x20directory','findOne','*🧩Function:*\x20','stringify','```','╭────❏','\x0aCommand:help','│\x20│','*_Uhh\x20Dear,\x20Give\x20Cmd\x20With\x20New\x20Name_*\x0a*Eg:\x20_.setcmd\x20New_Name,\x20Cmd_Name_*','split','│\x20╰──────✧❁✧──────◆\x0a╰══════════════════⊷','\x0a*🦄\x20ᴜᴘ\x20ᴛɪᴍᴇ\x20:*\x20','\x0a┃\x20✭\x20Prefix:\x20','message','*_Uptime\x20of\x20','\x0a┃\x20✭\x20Commands:\x20','reply_text','true','date','from','https://www.google.com','need\x20m\x20instance','commands','.png','translate','718202emmtYu','{\x22title\x22:\x22SELECT\x20MENU\x22,\x22sections\x22:[{\x22title\x22:\x22Select\x20Menu\x22,\x22highlight_label\x22:\x22suhail\x22,\x22rows\x22:[','includes','\x20/#\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20#button:quick_reply\x20|\x20display_text\x20:\x20Ping\x20🍫\x20|\x20id:','append','setCmdAlias','shell','find','round','random','sticker-','messages.upsert','not','join','videoMessage','lastIndexOf',',*\x0a_You\x20are\x20banned\x20from\x20using\x20commands._','false','cmd','\x0a\x20\x20*🍁\x20ᴛᴏᴅᴀʏ\x20ɪs\x20:*\x20','\x0a╭━━〘\x20*','alias','error','Sticker','\x0a\x0acommand\x20shell','slice','waUploadToServer','VERSION:3.0\x0a','video','NativeFlowMessage','\x0a\x20\x20➮Mᴇᴍᴏ\x20-\x20','fromMe','Help\x20list','runtime','276uDeIgA','*_Please\x20provide\x20cmd\x20name\x20by\x20replying\x20a\x20Sticker_*','\x0aCommand:menus','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#button:quick_reply\x20|\x20display_text\x20:\x20ALL\x20MENU\x20🍫\x20|\x20id:','┌───〈','cta_url','\x0a╰━━━━━━━━━━━━━━⊷\x0a','private','messageId','\x22\x20Succesfully\x20set\x20to\x20\x22','web','.avi','Given\x20Sticker','\x0a\x20\x20\x0a\x20\x20➮Fᴏᴜɴᴅᴇʀ-\x20SuhailTechInfo𝛁\x0a\x20\x20➮Oᴡɴᴇʀ\x20-\x20','Message','\x20\x22{\x22title\x22:\x22title\x22,\x22sections\x22:[{\x22title\x22:\x22select\x22,\x22highlight_label\x22:\x22label\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22rows\x22:[{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22header\x22:\x22header\x22,\x22title\x22:\x22title\x22,\x22id\x22:\x22.ping\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20},{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22header\x22:\x22header\x22,\x22title\x22:\x22title\x22,\x22id\x22:\x22.ping\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}]\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}]}\x22\x20\x0a','react','{\x22title\x22:\x20\x22','getTime','』──❖\x0a','MENU\x20list','disablegroup','function','imageMessage','caption','*\x20⟫━━⦿','\x0aCommand:delcmd','category','\x0aCommand:menu','trt','forEach','trim','menu','\x22\x20not\x20Set\x20for\x20any\x20cmd._*\x0a\x20*_Please\x20Provide\x20Valid\x20','┏━━━━━━━━━━━━━━━━━━━━━━━━\x0a┃\x09\x20*SUHAIL-MD_','.jpeg','test','END:VCARD','freemem','TEL;type=CELL;type=VOICE;waid=','*🧩Category:*\x20','sendMessage','toUpperCase','eval','To\x20check\x20ping','filename','\x20Theme:-\x20','⬡│▸\x20','InteractiveMessage','title','*❌No\x20Such\x20commands.*','toString','https://wa.me/+','usage','push','messageTimestamp','listmenu','readdir','emit','list\x20menu','\x20|\x20','\x0a\x20\x20╭──❰\x20*ALL\x20MENU*\x20❱\x0a\x20\x20│🏮\x20Lɪꜱᴛ\x0a\x20\x20│🏮\x20Cᴀᴛᴇɢᴏʀʏ\x0a\x20\x20│🏮\x20Hᴇʟᴘ\x0a\x20\x20│🏮\x20Aʟɪᴠᴇ\x0a\x20\x20│🏮\x20Uᴘᴛɪᴍᴇ\x0a\x20\x20│🏮\x20Wᴇᴀᴛʜᴇʀ\x0a\x20\x20│🏮\x20Lɪɴᴋ\x0a\x20\x20│🏮\x20Cᴘᴜ\x0a\x20\x20│🏮\x20Rᴇᴘᴏꜱɪᴛᴏʀʏ\x0a\x20\x20╰─────────────⦁','list','.mkv','ping','*_\x22','\x22},','../lib','\x20/#','Name','*✨FileName:*\x20','┏━━⟪\x20*','button_name\x20missing\x20in','MENU','2462980nNxwIP','.jpg','\x22\x20deleted\x20Succesfully\x20at\x20\x22','floor','Tells\x20runtime/uptime\x20of\x20bot.','runsmd','*\x20]═──▸\x0a│╭────────────···▸\x0a┴│▸','toLowerCase','70755bnBqcN','create','pattern','*_Cmd\x20\x22','isGroup','userImages','relayMessage','createButtons','blockJid','exec','smd','\x0aCommand:setcmd','.mp4','?text=Hii+','.gif','\x0a└──────────────◉','dontAddCommandList','text','substring','*-------------\x20FILE\x20MANAGER\x20-------------*\x0a','┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸','disablecmds','after_media','map','\x0aCommand:file','\x22\x20cmd_*','fileSha256','*〽️Usa:*\x0a\x20```','cta_copy','BEGIN:VCARD\x0a','replace','use','\x22\x20Cmd,\x20Please\x20try\x20another\x20','image','┗━━━━━━━━━━━━━━━⦿','msg','2637798BBHnvZ','7DySPyH','644097OCcajl','senderName','<shell\x20cmds\x20|\x20ls,cd\x20>','Touch\x20here.','\x0aCommand:list','nothing','prefix','10985008phyWTv','misc','allowJid','\x20Plugins:-\x20','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a','pushName','\x0a┃\x20✭\x20Mem:\x20','object','╰━━━━━━━━━━━━━━──⊷','*Hey\x20','*〽️Usage:*\x0a\x20```','COMMANDS','*🍁Command:*\x20','\x20menu\x22,\x22id\x22:\x22','┌───═[\x20*','null','buttons','isArray','uptime','help','startsWith','*Provide\x20A\x20Query\x20To\x20Run\x20Master*','send','*_Uhh\x20Dear,\x20provide\x20Name\x20that\x20set\x20to\x20a\x20cmd_*\x0a*Eg:\x20_.delcmd\x20Cmd_Name_*','*_Please\x20reply\x20to\x20a\x20Sticker\x20that\x20set\x20for\x20a\x20Cmd_*','*\x20⟫━━⦿\x0a\x0a','owner\x20/#\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','chat','after_data','.mov','.m4v','╭────《\x20\x20','body','mtype','disablepm','ban','botenable','device','contextInfo','empty','header','8378760CSawwO','*✨Description:*\x20','\x0a┗━━━━━━━━━━━━━━⦿','\x0a\x20\x20\x0a\x20\x20\x20*🧑‍💻\x20:*\x20\x20Sᴜʜᴀɪʟ-Mᴜʟᴛɪᴅᴇᴠɪᴄᴇ\x20ɪꜱ\x20ɴᴏᴡ\x20Aᴠᴀɪʟᴀʙʟᴇ\x0a\x20\x20\x0a\x20\x20','*🧩Alias:*\x20','stickerMessage','checkban.ban','┃\x20✗\x20','\x0a\x20\x20➮Nᴜᴍ\x20-\x20','\x20ms*\x20','isCreator','*🧩Description:*\x20','27XiCBNt','\x0a\x0acommand\x20trt','┃\x20✗'];_0x5d3e=function(){return _0x4f7994;};return _0x5d3e();}const create_UI=async()=>{const _0x2b1d33=_0x588970,_0x5b1b76=[_0x2b1d33(0x185),_0x2b1d33(0x15d),_0x2b1d33(0x116),'.webp'],_0x153259=[_0x2b1d33(0x77),_0x2b1d33(0x145),_0x2b1d33(0xb5),_0x2b1d33(0x179),_0x2b1d33(0x79),_0x2b1d33(0xb6)];let _0x247d2d=(''+(global[_0x2b1d33(0x70)]||''))['split'](','),_0x43a9ad=(_0x247d2d[Math[_0x2b1d33(0x187)](Math[_0x2b1d33(0x121)]()*_0x247d2d['length'])]||'')[_0x2b1d33(0x159)](),_0x4eecbd=![];if(/http/g[_0x2b1d33(0x15e)](_0x43a9ad)){const _0x23b214=_0x43a9ad[_0x2b1d33(0x7d)](_0x43a9ad[_0x2b1d33(0x127)]('.'))[_0x2b1d33(0x18b)]();if(_0x153259[_0x2b1d33(0x11a)](_0x23b214))_0x4eecbd=_0x2b1d33(0x134);else _0x5b1b76[_0x2b1d33(0x11a)](_0x23b214)&&(_0x4eecbd=_0x2b1d33(0x8c));}return{[_0x4eecbd||_0x2b1d33(0xdd)]:{'url':_0x43a9ad}};};global[_0x588970(0x72)]=_0x4b5a01=>{const _0x51e292=_0x588970;if(!_0x4b5a01||Array[_0x51e292(0xa9)](_0x4b5a01))return _0x4b5a01||[];const _0x248c48=/#button\s*:\s*([^|]+)\s*\|\s*display_text\s*:\s*([^|]+)(?:\s*\|\s*(id)\s*:\s*([^|]+))?(?:\s*\|\s*(copy_code)\s*:\s*([^|]+))?\/#/ig,_0x3045d5=[];let _0x5993a7;while((_0x5993a7=_0x248c48[_0x51e292(0x74)](_0x4b5a01))!==null){try{const _0x50ebc6=_0x5993a7[0x1][_0x51e292(0x159)](),_0x59ac70=_0x5993a7[0x2][_0x51e292(0x159)](),_0x117d84=_0x5993a7[0x4]?_0x5993a7[0x4][_0x51e292(0x159)]():'';let _0x3b433f=_0x5993a7[0x6]?_0x5993a7[0x6][_0x51e292(0x159)]():'',_0xa83c33={'display_text':_0x59ac70};if(_0x50ebc6===_0x51e292(0x87))_0xa83c33={'display_text':_0x59ac70,'id':_0x117d84,'copy_code':_0x3b433f};else{if(_0x50ebc6===_0x51e292(0x13f))_0xa83c33={'display_text':_0x59ac70,'url':(''+(_0x117d84||''))[_0x51e292(0x89)](_0x51e292(0x17e),'')[_0x51e292(0x159)](),'merchant_url':_0x3b433f||_0x51e292(0x113)};else _0xa83c33={'display_text':_0x59ac70,'id':_0x117d84};}if(_0x50ebc6)_0x3045d5[_0x51e292(0x170)]({'name':_0x50ebc6,'buttonParamsJson':JSON[_0x51e292(0x102)](_0xa83c33)});else console[_0x51e292(0xdf)](_0x51e292(0x182),_0x5993a7[0x0]);}catch(_0x50189a){console[_0x51e292(0xdf)](_0x50189a);}}return _0x3045d5||[];},global['sendButtons']=async(_0x54498b,_0x46c6e5={},_0x56ada3=[],_0xecab7=![])=>{const _0x1574d7=_0x588970;if(!_0x54498b)throw _0x1574d7(0x114);let _0x5896c3=_0xecab7||_0x54498b[_0x1574d7(0xef)];typeof _0x46c6e5!=_0x1574d7(0x9f)&&(_0x46c6e5={});_0x46c6e5[_0x1574d7(0x142)]=_0x46c6e5[_0x1574d7(0x142)]||_0x54498b[_0x1574d7(0xe5)][_0x1574d7(0x142)]();typeof _0x56ada3===_0x1574d7(0xd1)&&(_0x56ada3=createButtons(_0x56ada3));(typeof _0x46c6e5['buttons']===_0x1574d7(0xd1)||Array['isArray'](_0x46c6e5['buttons']))&&(_0x56ada3=[..._0x56ada3,...createButtons(_0x46c6e5[_0x1574d7(0xa8)])||[]]);let {generateWAMessageFromContent:_0x12af2f,proto:_0x5b3b09,prepareWAMessageMedia:_0x490672}=require('@whiskeysockets/baileys'),_0x534db0={};try{if(typeof _0x46c6e5['imageMessage']===_0x1574d7(0x9f))_0x534db0={'imageMessage':_0x46c6e5[_0x1574d7(0x151)]};else{if(typeof _0x46c6e5['videoMessage']==='object')_0x534db0={'videoMessage':_0x46c6e5[_0x1574d7(0x126)]};else{let _0x24bc42=![],_0x28d357=_0x46c6e5[_0x1574d7(0x8c)]||_0x46c6e5['video']?_0x46c6e5:await create_UI();!_0x28d357[_0x1574d7(0x8c)]&&!_0x28d357[_0x1574d7(0x134)]&&(_0x28d357=_0x46c6e5[_0x1574d7(0x81)]||_0x46c6e5[_0x1574d7(0xb4)]||_0x28d357);if(_0x28d357[_0x1574d7(0x8c)])_0x24bc42=await _0x490672({'image':_0x28d357[_0x1574d7(0x8c)]||log0},{'upload':_0x54498b[_0x1574d7(0xe5)][_0x1574d7(0x132)]})||![];else _0x28d357[_0x1574d7(0x134)]&&(_0x24bc42=await _0x490672({'video':_0x28d357[_0x1574d7(0x134)]||log0},{'upload':_0x54498b['bot'][_0x1574d7(0x132)]})||![]);_0x24bc42&&(_0x534db0=_0x24bc42['imageMessage']?{'imageMessage':_0x24bc42[_0x1574d7(0x151)]}:_0x24bc42[_0x1574d7(0x126)]?{'videoMessage':_0x24bc42[_0x1574d7(0x126)]}:{});}}}catch(_0x2a6989){_0x534db0={};}let _0x3318cc={...await _0x54498b[_0x1574d7(0xe5)]['contextInfo'](botname,_0x54498b[_0x1574d7(0x92)]||ownername),..._0x46c6e5[_0x1574d7(0xbe)]||{}},_0x214047=await _0x12af2f(_0x5896c3,{'viewOnceMessage':{'message':{'interactiveMessage':_0x5b3b09[_0x1574d7(0x148)][_0x1574d7(0x16a)][_0x1574d7(0x6c)]({'body':{'text':_0x46c6e5['text']||_0x46c6e5[_0x1574d7(0xb8)]||_0x46c6e5[_0x1574d7(0x152)]||'Suhail'},'footer':{'text':_0x46c6e5[_0x1574d7(0xf2)]||'Powered\x20by\x20Suhail-Md'},'header':{..._0x534db0||{},'hasMediaAttachment':_0x534db0[_0x1574d7(0x151)]||_0x534db0[_0x1574d7(0x126)]?!![]:![],..._0x46c6e5[_0x1574d7(0xc0)]||{}},'contextInfo':_0x3318cc,'nativeFlowMessage':_0x5b3b09[_0x1574d7(0x148)][_0x1574d7(0x16a)][_0x1574d7(0x135)][_0x1574d7(0x6c)]({'buttons':_0x56ada3})}),'messageContextInfo':{'deviceListMetadata':{},'deviceListMetadataVersion':0x2}}}},_0x46c6e5);return await _0x54498b['bot'][_0x1574d7(0x71)](_0x5896c3,_0x214047[_0x1574d7(0x10c)],{'messageId':_0x46c6e5[_0x1574d7(0x142)]}),_0x214047;},global[_0x588970(0x189)]=async(_0x2f9e88,_0x4fdd6d)=>{const _0x36e492=_0x588970;try{const {commands:_0x3f8644,groupdb:_0x249859,userdb:_0x23bcfd}=require(lib_dir||'../lib');let {isCreator:_0x4421c0,dbuser:_0x279f61,dbgroup:_0xb8719e}=_0x4fdd6d||{},{body:_0x411da6}=_0x2f9e88;var _0x567f7=(''+(_0x411da6||_0x2f9e88[_0x36e492(0x7c)]||''))[_0x36e492(0x159)]();let _0x482a1f=![],_0x1eaedd=![],_0x1bac39=![],_0x84642b=global[_0x36e492(0x97)];var _0x3188cb=!HANDLERS||[_0x36e492(0x129),_0x36e492(0xa7),'\x20','',_0x36e492(0x96),_0x36e492(0x124),_0x36e492(0xbf),'']['includes'](HANDLERS)?!![]:![];_0x84642b=_0x411da6&&prefixRegex[_0x36e492(0x15e)](_0x411da6[0x0])&&_0x411da6[0x0]||'';if(_0x567f7&&HANDLERS['toLowerCase']()[_0x36e492(0x11a)](_0x36e492(0xa7)))_0x482a1f=!![],_0x1eaedd=_0x411da6[_0x36e492(0x108)]('\x20')[0x0][_0x36e492(0x18b)]()||![];else _0x567f7&&!HANDLERS[_0x36e492(0x18b)]()[_0x36e492(0x11a)](_0x36e492(0xa7))?(_0x482a1f=prefixboth||_0x411da6&&prefixRegex[_0x36e492(0x15e)](_0x411da6[0x0]),_0x1eaedd=_0x482a1f?_0x3188cb?_0x411da6[_0x36e492(0x159)]()['split']('\x20')[0x0][_0x36e492(0x18b)]():_0x411da6[_0x36e492(0x131)](0x1)[_0x36e492(0x159)]()[_0x36e492(0x10
