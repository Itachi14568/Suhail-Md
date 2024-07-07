const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Itachi:Itachi@cluster0.vkdxcxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_00_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgODcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQWgzRlUzV3pLNU1vVTJvNHhjWkJ5bzJkSmtkZHV0aks5enpjSFp1OVIzOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFJOX0xPWE5TUGUwVlZQTXZuZ2w5d1wiLFxuICBcInBob25lSWRcIjogXCI1OTM3YzRkYy0yZTI5LTRkMjgtOThkYS03YmVkZDlkYjBmMGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTIzLFxuICAgICAgMjIsXG4gICAgICA5OCxcbiAgICAgIDQ4LFxuICAgICAgMjAxLFxuICAgICAgMTgzLFxuICAgICAgMjE3LFxuICAgICAgMjMwLFxuICAgICAgNDMsXG4gICAgICAxNTQsXG4gICAgICAyNCxcbiAgICAgIDE2OCxcbiAgICAgIDQzLFxuICAgICAgMjA3LFxuICAgICAgOTcsXG4gICAgICAxNzgsXG4gICAgICA0OSxcbiAgICAgIDI0NCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxODEsXG4gICAgICAxNTQsXG4gICAgICAyMjgsXG4gICAgICAxNjEsXG4gICAgICA1MCxcbiAgICAgIDEyMixcbiAgICAgIDI1LFxuICAgICAgMTIxLFxuICAgICAgMTcwLFxuICAgICAgMTE1LFxuICAgICAgMjEsXG4gICAgICAxMjIsXG4gICAgICA0MSxcbiAgICAgIDM3LFxuICAgICAgMTkyLFxuICAgICAgMTQ3LFxuICAgICAgMjMzLFxuICAgICAgMTY5LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNSTlhRWFJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQzNTQ2ODU2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTIzODQ2MjUwNjIwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pJbCtFREVQL1N1N0lHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIydURyTDQ4Z2hpS2w5b0ZZM1IzTnNlU0xMMlFEME8ySFpIMnF4eTFDWDFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9lZURnQXZXUW5jREJ2M1V0M2NTVk53SmFyNFRUbVMxRDg4NGdWS09QVExTMGN1S29VZUs5VEN0TndKMjZUbXFxWFBoL3V0OGRvcUFGUzlrTGMxYkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlk5cTRTOTQ5M2JKa3ZNcWxrR3M3MjlqSkJpdERZNHl0dkxyZ0RnSUFKQ0JRWVJhcmt6dFJkckVlSTRKRFhRY2c5azdKTm1PYlN5QWNuVUVTTUxxOUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDM1NDY4NTY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ0NzYxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNKY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0pjLmpzb24iOiAie1wia2V5RGF0YVwiOlwickxGZWFRQmhDMmFaV29meWpsUTVTM1hOblBIWmtlQ3NmV0dNL243cVZkTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA5MTE2MjYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
