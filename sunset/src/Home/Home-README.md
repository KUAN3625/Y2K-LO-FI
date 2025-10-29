#說明檔案&備忘錄

避免開發遇到忘記的情況
順便記錄遇到問題
按照順序排列開發頁面順序

Routes 路由器，管理並集成所有頁面
<Routes>

<Route path="/" element={ } />

<Routes/>

注意，路由器一定要包含在APP.JSX中


Home 包含所有程式頁面

Entry 主標題首頁畫面


Login 登入

Core 核心頁面

Todolist 

Settings 設定

About 收尾 


音樂播放器使用指南

title	string	"MusicName"	顯示音樂名稱
artist	string	"Artist"	顯示演出者
coverUrl	string	""	封面圖片路徑（可空）
progress	number	0	進度（0–1）
className	string	""	外層樣式擴充