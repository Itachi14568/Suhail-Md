const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Eddyson:Êddysöñ@cluster0.ysiv0x0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_08_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICA4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXY2orR04vVWIvR3N1UWR1MUlZOGYrOHllc0N0MUlTeUJPZ3krMW8rZldFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2RDE4RkM4NUQ5RTM5MzVCMDQ5RUM3NjJDMEEzRDI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjY2NzY4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzY1NzA0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlGRDM3RjIzNUVEODdBOTMzQjRCMDMwQURCMzBBMDMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjY2NzY4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0WjZUTmF6WFNLaUxMUEF1dUN4WDR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI3MTE5MjE4LWQ3YmMtNGFmZi1iZWM2LWYxMTA2NmM5OGE5ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDE5OCxcbiAgICAgIDY0LFxuICAgICAgNixcbiAgICAgIDY2LFxuICAgICAgMTI5LFxuICAgICAgNDMsXG4gICAgICA2LFxuICAgICAgMTE2LFxuICAgICAgMjA2LFxuICAgICAgMTk1LFxuICAgICAgMTU4LFxuICAgICAgNDcsXG4gICAgICAyNDIsXG4gICAgICAxNTEsXG4gICAgICA1NixcbiAgICAgIDEzMSxcbiAgICAgIDE4NyxcbiAgICAgIDIzOSxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDIyOCxcbiAgICAgIDEsXG4gICAgICAxMjgsXG4gICAgICA2NCxcbiAgICAgIDEwNixcbiAgICAgIDIyMyxcbiAgICAgIDEzMixcbiAgICAgIDE2NCxcbiAgICAgIDE3MSxcbiAgICAgIDEyOSxcbiAgICAgIDM2LFxuICAgICAgMTc5LFxuICAgICAgMTgzLFxuICAgICAgMzksXG4gICAgICAxMzEsXG4gICAgICA4MCxcbiAgICAgIDEzMyxcbiAgICAgIDQxLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUVFRlFLUzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzY1NzA0MjM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc4MTA4MDkxNDY1OTM0OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiw4pkZHlzw7bDsVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ArdjNvd0NFS0NLeWJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTis1dTNld1hWNnlQa1krb2FPWHZiVmVRR1NnWFVJTFM3T0dGa1dlOHd5MD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKT3dsMkphSU1Kend4b2VKVjdqOWhrd0dSdUtNMWZ6MUQwM1FzR0VudUtSenp1UXUwQUIxRk9IcHlILy9NMmtGRjJWTWhhSW1xSkdHTGg4Rkw0dEJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmL0dvaEg0ekYyRlYwTjFmc3NYMmJ0VkkvdEtZU0lJa3hGNUdVYmQzNVpXTWtEbFRVKzFWcnNBMlQ0ZzV6bWtWRzJiUWYxWlBGWVU0ZkNnUWRHYVZndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM2NTcwNDIzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY2Njc2ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBU2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFTZC5qc29uIjogIntcImtleURhdGFcIjpcIkJhdE1Xb08rWTYvb3d6eVRCd3RpckR6d3pRQXNpTFFFYndqcnpzTWRPdE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTYzNTgyOTc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2Njc2ODU4MTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
