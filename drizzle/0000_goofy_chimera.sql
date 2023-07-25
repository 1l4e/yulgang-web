-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `BachBaoCacRecord` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`UserId` varchar(50),
	`UserName` varchar(50),
	`VatPham_ID` varchar(50),
	`VatPhamTen` varchar(50),
	`VatPhamSoLuong` int,
	`NguyenBaoSoLuong` int,
	`ThoiGian` timestamp,
	CONSTRAINT `ID` UNIQUE(`ID`)
);
--> statement-breakpoint
CREATE TABLE `Character` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50) NOT NULL,
	`FLD_NAME` varchar(50),
	`FLD_INDEX` int NOT NULL,
	`FLD_LEVEL` int,
	`FLD_FACE` varbinary(10),
	`FLD_JOB` int NOT NULL,
	`FLD_EXP` varchar(50),
	`FLD_ZX` int,
	`FLD_JOB_LEVEL` int,
	`FLD_X` float,
	`FLD_Y` float,
	`FLD_Z` float,
	`FLD_MENOW` int,
	`FLD_MONEY` varchar(50),
	`FLD_MoneyX` varchar(50),
	`FLD_HP` int,
	`FLD_MP` int,
	`FLD_SP` int,
	`FLD_WX` int,
	`FLD_SE` int,
	`FLD_POINT` int,
	`FLD_SKILLS` varbinary(100),
	`FLD_WEARITEM` varbinary(5000),
	`FLD_WEARITEMFZ` varbinary(1500),
	`FLD_LCWEARITEM` varbinary(73),
	`FLD_ITEM` varbinary(8000),
	`FLD_ItemNTC` varbinary(438),
	`FLD_QITEM` varbinary(300),
	`FLD_KONGFU` varbinary(1404),
	`FLD_HITS` varbinary(250),
	`FLD_DOORS` varbinary(1200),
	`FLD_QUEST` varbinary(400),
	`FLD_LUMPID` int,
	`FLD_CTIME` varbinary(320),
	`FLD_FIGHT_EXP` int,
	`FLD_J9` int,
	`FLD_JQ` int,
	`FLD_JL` varchar(50),
	`FLD_NAMETYPE` varbinary(48),
	`FLD_ZBVER` int,
	`FLD_ZzType` int,
	`FLD_ZzSl` int,
	`FLD_CTIMENEW` varbinary(240),
	`FLD_QlNAME` varchar(50),
	`FLD_QlJZNAME` varchar(50),
	`FLD_QlDu` int,
	`FLD_ThangThienKhiCong` varbinary(60),
	`FLD_ThangThienVoCong` varbinary(144),
	`FLD_ThangThienLichLuyen` int,
	`FLD_ThangThienVoCongDiemSo` int,
	`FLD_ADD_HP` int NOT NULL,
	`FLD_ADD_AT` varchar(50),
	`FLD_ADD_DF` varchar(50),
	`FLD_ADD_HB` int NOT NULL,
	`FLD_ADD_MP` int NOT NULL,
	`FLD_ADD_MZ` int NOT NULL,
	`FLD_ZS` int NOT NULL,
	`FLD_VIPDJ` bigint NOT NULL,
	`FLD_FQID` varchar(20),
	`SoLanGietNguoi` bigint,
	`BiGietSoLan` bigint,
	`FLD_SuPhu` varbinary(28),
	`FLD_DeTu` varbinary(60),
	`FLD_SuDoVoCong` varbinary(10),
	`FLD_GiaiTruThoiGian` varchar(50),
	`FLD_TitlePoints` int,
	`CongThanhChienThoiGian` datetime,
	`FLD_XB` int,
	`FLD_RoseTitlePoints` int,
	`FLD_SpeakingType` int,
	`FLD_NSZITEM` varbinary(600),
	`FLD_LJKONGFU` varbinary(128),
	`FLD_STIME` varbinary(320),
	`BangPhai_DoCongHien` int,
	`FLD_MLZ` int,
	`FLD_PVP_Piont` int,
	`FLD_ThanNuVoCongDiemSo` int,
	`FLD_LOVE_WORD` varchar(50),
	`FLD_MARITAL_STATUS` int,
	`FLD_MARRIED` int,
	`FLD_JH_DATE` datetime,
	`FLD_FB_TIME` int,
	`FLD_LOST_WX` int,
	`FLD_GET_WX` int,
	`FLD_HD_TIME` int,
	`FLD_KieuToc` varbinary(4),
	`FLD_KhuonMat` varbinary(4),
	`FLD_WHTB` int,
	`FLD_CHTIME` varchar(500),
	`FLD_CONFIG` varchar(100),
	`FLD_FASHION_ITEM` varbinary(5082),
	`FLD_QUEST_FINISH` varbinary(1000),
	`FLD_ADD_CLVC` int,
	`FLD_ADD_PTVC` int,
	`FLD_ADD_KC` int,
	`FLD_CHECK_GIFTCODE` varchar(100),
	`FLD_Free_Spin` int NOT NULL,
	`FLD_Member_VIP` int NOT NULL,
	`FLD_VIP_Point` int NOT NULL,
	`FLD_ActionInDay` longtext NOT NULL,
	`FLD_CheckInCode` longtext NOT NULL,
	`FLD_BuyEventShop` int NOT NULL,
	`FLD_BuyEventShopTime` datetime NOT NULL,
	`FLD_CTIME_STR` longtext NOT NULL,
	`FLD_WorldBoss_Point` int NOT NULL,
	`FLD_PkPoint` int NOT NULL,
	`FLD_SafePoint` int NOT NULL,
	`FLD_ThemWuxun_MoiNgay` int NOT NULL,
	`FLD_GiamWuxun_MoiNgay` int NOT NULL,
	`FLD_NhiemVuDaTauID` int NOT NULL,
	`FLD_NhiemVuDaTauLevel` int NOT NULL,
	`FLD_ActionInWeek` longtext NOT NULL,
	`FLD_PHTD_DiemSo` int NOT NULL,
	`FLD_KyGui_Gold` bigint NOT NULL,
	`FLD_KyGui_Cash` int NOT NULL,
	`FLD_DiemHoangKim` int NOT NULL,
	`FLD_ITEM_STR` text,
	`FLD_WEARITEM_STR` text,
	CONSTRAINT `FLD_NAME` UNIQUE(`FLD_NAME`)
);
--> statement-breakpoint
CREATE TABLE `EventTop` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`TenNhanVat` varchar(50),
	`BangPhai` varchar(50),
	`TheLuc` varchar(50),
	`DangCap` int,
	`GietNguoiSoLuong` int,
	`TuVongSoLuong` int,
	`PhanKhuTinTuc` varchar(50),
	`NpcDiemSo` int NOT NULL,
	`TotalDiemSo` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ForceWar_Rewards_Request` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_Name` varchar(50),
	`FLD_Reward_Name` varchar(100),
	`FLD_Gold` bigint NOT NULL,
	`FLD_VoHoang` int NOT NULL,
	`FLD_VoHuan` int NOT NULL,
	`FLD_Status` int NOT NULL,
	`FLD_Cash` int NOT NULL,
	`FLD_Item` varchar(500),
	`FLD_Time_Request` datetime NOT NULL,
	`FLD_Time_Added` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ITEMSELL` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int,
	`FLD_RETURN` int,
	`FLD_NUMBER` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_SoCapPhuHon` int,
	`FLD_TrungCapPhuHon` int,
	`FLD_TienHoa` int,
	`FLD_PhaiChangKhoaLai` int,
	`FLD_DAYS` int
);
--> statement-breakpoint
CREATE TABLE `ItemRecord` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`UserId` varchar(50),
	`UserName` varchar(50),
	`ToUserId` varchar(50),
	`ToUserName` varchar(50),
	`Global_ID` varchar(50),
	`VatPham_ID` varchar(50),
	`VatPhamTen` varchar(50),
	`VatPhamSoLuong` int,
	`VatPhamThuocTinh` varchar(100),
	`SoTien` int,
	`LoaiHinh` varchar(50),
	`ThoiGian` datetime
);
--> statement-breakpoint
CREATE TABLE `LogPK` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`Nguoigiet` varchar(50),
	`Nguoibigiet` varchar(50),
	`Thoigian` datetime
);
--> statement-breakpoint
CREATE TABLE `Log_DeleteItem` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`MaItem` int NOT NULL,
	`IDItem` int NOT NULL,
	`Thoigian` datetime NOT NULL,
	`LevelItem` varchar(50),
	`Username` varchar(50),
	`TrangThai` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `LoginRecord` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`UserId` varchar(50),
	`UserName` varchar(50),
	`UserIp` varchar(50),
	`LoaiHinh` varchar(50),
	`ThoiGian` datetime
);
--> statement-breakpoint
CREATE TABLE `ShopEvent` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int,
	`FLD_RETURN` int,
	`FLD_NUMBER` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_SoCapPhuHon` int,
	`FLD_TrungCapPhuHon` int,
	`FLD_TienHoa` int,
	`FLD_PhaiChangKhoaLai` int,
	`FLD_DAYS` int
);
--> statement-breakpoint
CREATE TABLE `ShopHoangKim` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int NOT NULL,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int NOT NULL,
	`FLD_RETURN` int NOT NULL,
	`FLD_NUMBER` int NOT NULL,
	`FLD_MAGIC1` int NOT NULL,
	`FLD_MAGIC2` int NOT NULL,
	`FLD_MAGIC3` int NOT NULL,
	`FLD_MAGIC4` int NOT NULL,
	`FLD_MAGIC5` int NOT NULL,
	`FLD_SoCapPhuHon` int NOT NULL,
	`FLD_TrungCapPhuHon` int NOT NULL,
	`FLD_TienHoa` int NOT NULL,
	`FLD_PhaiChangKhoaLai` int NOT NULL,
	`FLD_DAYS` int NOT NULL,
	`FLD_GuildLevel` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ShopVoHoang` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int,
	`FLD_RETURN` int,
	`FLD_NUMBER` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_SoCapPhuHon` int,
	`FLD_TrungCapPhuHon` int,
	`FLD_TienHoa` int,
	`FLD_PhaiChangKhoaLai` int,
	`FLD_DAYS` int
);
--> statement-breakpoint
CREATE TABLE `ShopVoHuan` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int,
	`FLD_RETURN` int,
	`FLD_NUMBER` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_SoCapPhuHon` int,
	`FLD_TrungCapPhuHon` int,
	`FLD_TienHoa` int,
	`FLD_PhaiChangKhoaLai` int,
	`FLD_DAYS` int
);
--> statement-breakpoint
CREATE TABLE `ShopWorldBoss` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(255),
	`FLD_PRICE` int,
	`FLD_DESC` varchar(1000),
	`FLD_TYPE` int,
	`FLD_RETURN` int,
	`FLD_NUMBER` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_SoCapPhuHon` int,
	`FLD_TrungCapPhuHon` int,
	`FLD_TienHoa` int,
	`FLD_PhaiChangKhoaLai` int,
	`FLD_DAYS` int
);
--> statement-breakpoint
CREATE TABLE `TBL_ACCOUNT` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50) NOT NULL,
	`FLD_PASSWORD` varchar(50) NOT NULL,
	`FLD_CARD` varchar(50),
	`FLD_NAME` varchar(50),
	`FLD_QU` varchar(50),
	`FLD_ANSWER` varchar(50),
	`FLD_REGIP` varchar(50),
	`FLD_REGTIME` datetime,
	`FLD_LASTLOGINTIME` timestamp,
	`FLD_LASTLOGINIP` varchar(50),
	`FLD_VIP` int DEFAULT 0,
	`FLD_ZT` int DEFAULT 0,
	`FLD_ONLINE` int DEFAULT 0,
	`FLD_SEX` int DEFAULT 0,
	`FLD_RXPIONT` int NOT NULL DEFAULT 0,
	`FLD_RXPIONTX` int NOT NULL DEFAULT 0,
	`FLD_VIPTIM` timestamp,
	`FLD_Mail` varchar(50),
	`FLD_FQ` varchar(50),
	`FLD_JF` int,
	`FLD_ZJF` int,
	`FLD_YY` varchar(50),
	`FLD_BD` int,
	`FLD_PAY` int,
	`FLD_INCOME` int,
	`FLD_CARDOLD` varchar(50),
	`FLD_MONEY` int,
	`FLD_TotalAmount` int,
	`FLD_LOCK` int,
	`FLD_SAFEWORD` varchar(50),
	`FLD_SPREADERID` varchar(50),
	`FLD_SPREADER_LEVEL` int NOT NULL,
	`FLD_RUNMORE` timestamp,
	`FLD_MACHINEID` varchar(50),
	`FLD_COIN` int,
	`FLD_TRANSFER_TIMES` int NOT NULL,
	`FLD_USERID` int,
	`FLD_QCVIP` int,
	`FLD_QCVIPTIM` timestamp,
	`FLD_WCVIP` int,
	`FLD_WCVIPTIM` timestamp,
	`FLD_QDCS` int,
	`FLD_QDSJ` timestamp,
	`FLD_CHECKLOGIN` bit(1),
	`FLD_CHECKIP` varchar(50),
	`FLD_LANIP` varchar(50),
	`FLD_TYPE` int NOT NULL DEFAULT 0,
	`FLD_GIFTPOINT` int NOT NULL DEFAULT 0,
	`FLD_PHONE` int NOT NULL DEFAULT 0,
	CONSTRAINT `FLD_ID` UNIQUE(`FLD_ID`)
);
--> statement-breakpoint
CREATE TABLE `TBL_AscQigongOption` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_PID` int,
	`FLD_INDEX` int,
	`FLD_JOB` int,
	`FLD_NAME` text,
	`FLD_DES` varchar(2000),
	`FLD_ChiSo1` float,
	`FLD_Bonus1` float NOT NULL,
	`FLD_ChuThich1` varchar(500),
	`FLD_ChiSo2` float NOT NULL,
	`FLD_Bonus2` float NOT NULL,
	`FLD_ChuThich2` varchar(500),
	`FLD_Hieuqua1` float NOT NULL,
	`FLD_ChuThich3` varchar(500),
	`FLD_Hieuqua2` float NOT NULL,
	`FLD_ChuThich4` varchar(500)
);
--> statement-breakpoint
CREATE TABLE `TBL_BuffOfGuild` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`Guild_Level` int NOT NULL,
	`Bonus_HP` int NOT NULL,
	`Bonus_MP` int NOT NULL,
	`Bonus_ATK` int NOT NULL,
	`Bonus_DF` int NOT NULL,
	`Bonus_Percent_ATKSkill` int NOT NULL,
	`Bonus_DefSkill` int NOT NULL,
	`Bonus_Abilities` int NOT NULL,
	`Bonus_Percent_Exp` int NOT NULL,
	`Bonus_Percent_Lucky` int NOT NULL,
	`Bonus_Percent_Drop` int NOT NULL,
	`Bonus_Percent_DropGold` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_Buff_TanThu` (
	`Id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`Buff_Name` varchar(500),
	`Buff_Level` int NOT NULL,
	`Buff_LevelX` int NOT NULL,
	`Buff_TrungSinh` int NOT NULL,
	`Buff_Exp` int NOT NULL,
	`Buff_ItemID` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_CheckIn` (
	`Id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_Item` varchar(50),
	`FLD_Item_Name` varchar(100),
	`FLD_ItemVIP` varchar(50),
	`FLD_ItemVIP_Name` varchar(100),
	`FLD_Time` timestamp NOT NULL,
	`FLD_CheckCode` varchar(50),
	`FLD_CheckCodeVIP` varchar(50)
);
--> statement-breakpoint
CREATE TABLE `TBL_DropOptions` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(200),
	`FLD_LEVEL1` int NOT NULL,
	`FLD_LEVEL2` int NOT NULL,
	`FLD_RATE` int NOT NULL,
	`FLD_OPTION` int NOT NULL,
	`FLD_TYPE` int NOT NULL,
	`FLD_Drop` int NOT NULL,
	`FLD_OpenBox` int NOT NULL,
	`FLD_ShopNPC` int NOT NULL,
	`FLD_WebShop` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_GIFTCODE` (
	`Id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`GiftCode` varchar(50),
	`Reward_Type` int NOT NULL,
	`Use_Times` int NOT NULL,
	`UserID` varchar(50),
	`OneTimePerUserName` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_GIFTCODE_REWARDS` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(50),
	`FLD_TYPE` int NOT NULL,
	`FLD_GOLD` bigint NOT NULL,
	`FLD_WUXUN` int NOT NULL,
	`FLD_VOHOANG` int NOT NULL,
	`FLD_CASH` int NOT NULL,
	`FLD_ITEM` varchar(500)
);
--> statement-breakpoint
CREATE TABLE `TBL_Guild_SupportSettings` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_MaKichHoat` varchar(50),
	`FLD_PID` int NOT NULL,
	`FLD_Name` varchar(50),
	`FLD_Description` varchar(500),
	`FLD_PointRequest` int NOT NULL,
	`FLD_Guild_Level` int NOT NULL,
	`FLD_Buff_DropGold` float NOT NULL,
	`FLD_Buff_DropExp` float NOT NULL,
	`FLD_Buff_DropItem` float NOT NULL,
	`FLD_Buff_Lucky` float NOT NULL,
	`FLD_Buff_ATK` int NOT NULL,
	`FLD_Buff_DEF` int NOT NULL,
	`FLD_Buff_HP` int NOT NULL,
	`FLD_Buff_Qigong` int NOT NULL,
	`FLD_SummonBoss` int NOT NULL,
	`FLD_Minutes` int NOT NULL,
	`FLD_Type` int NOT NULL,
	`FLD_Level` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_HISTORY_SPIN` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_CHAR_NAME` varchar(50),
	`FLD_ITEM_ID` bigint,
	`FLD_SPIN_ID` int NOT NULL,
	`FLD_SPIN_TYPE` int,
	`FLD_SPIN` int,
	`FLD_SPINX` int,
	`FLD_ENERGY` int,
	`FLD_ENERGYX` int,
	`FLD_TIME` datetime,
	`FLD_STATUS` int NOT NULL,
	`FLD_SPIN_RATE` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_HatchItem` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(200),
	`FLD_PIDX` int NOT NULL,
	`FLD_NAMEX` varchar(200),
	`FLD_Number` int NOT NULL,
	`FLD_PP` int NOT NULL,
	`FLD_MAGIC0` int NOT NULL,
	`FLD_MAGIC1` int NOT NULL,
	`FLD_MAGIC2` int NOT NULL,
	`FLD_MAGIC3` int NOT NULL,
	`FLD_MAGIC4` int NOT NULL,
	`FLD_LowSoul` int NOT NULL,
	`FLD_MedSoul` int NOT NULL,
	`FLD_Quality` int NOT NULL,
	`FLD_Lock` int NOT NULL,
	`FLD_ExpiryDate` int NOT NULL,
	`FLD_Announce` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_ItemOption` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(100),
	`Bonus_HP` int NOT NULL,
	`Bonus_PercentHP` int,
	`Bonus_MP` int NOT NULL,
	`Bonus_PercentMP` int,
	`Bonus_ATK` int NOT NULL,
	`Bonus_PercentATK` int NOT NULL,
	`Bonus_PercentDF` int,
	`Bonus_DF` int NOT NULL,
	`Bonus_PercentATKSkill` int,
	`Bonus_DefSkill` int,
	`Bonus_Qigong` int NOT NULL,
	`Bonus_DropGold` int NOT NULL,
	`Bonus_Exp` int NOT NULL,
	`Bonus_Lucky` int NOT NULL,
	`Bonus_Accuracy` int NOT NULL,
	`Bonus_Evasion` int NOT NULL,
	`Bonus_DiemHoangKim` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_KyGuiVatPham` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_NAME` varchar(50),
	`FLD_ItemName` varchar(50),
	`FLD_ItemPID` int NOT NULL,
	`FLD_ItemOption` varchar(500),
	`FLD_Amount` int NOT NULL,
	`FLD_Price` bigint NOT NULL,
	`FLD_Type` int NOT NULL,
	`FLD_Time` timestamp NOT NULL,
	`FLD_STATUS` int NOT NULL,
	`FLD_RESIDE2` int NOT NULL,
	`FLD_LEVEL` int NOT NULL,
	`FLD_NOTICE` varchar(50),
	`FLD_ITEMBYTE` varbinary(73)
);
--> statement-breakpoint
CREATE TABLE `TBL_ListMagicQigong` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_MAGIC` int NOT NULL,
	`FLD_NAME` varchar(100),
	`Shop_PP` int NOT NULL,
	`Drop_PP` int NOT NULL,
	`QigongID` int NOT NULL,
	`DungChung_QigongID` varchar(500),
	`DonVi` int NOT NULL,
	CONSTRAINT `QigongID` UNIQUE(`QigongID`)
);
--> statement-breakpoint
CREATE TABLE `TBL_OPEN_CHEST` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`CHEST_NAME` varchar(200),
	`CHEST_ID` int NOT NULL,
	`ITEM_NAME` varchar(300),
	`FLD_ITEM` varchar(250),
	`FLD_LEVEL` varchar(50),
	`FLD_JOB_LEVEL` int NOT NULL,
	`FLD_JOB` varchar(50),
	`FLD_GENDER` int NOT NULL,
	`FLD_FORCE` int NOT NULL,
	`FLD_PP` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_QigongOption` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_PID` int,
	`FLD_INDEX` int,
	`FLD_JOB` int,
	`FLD_NAME` text,
	`FLD_DES` varchar(2000),
	`FLD_ChiSo1` float,
	`FLD_Bonus1` float NOT NULL,
	`FLD_ChuThich1` varchar(500),
	`FLD_ChiSo2` float NOT NULL,
	`FLD_Bonus2` float NOT NULL,
	`FLD_ChuThich2` varchar(500),
	`FLD_Hieuqua1` float NOT NULL,
	`FLD_ChuThich3` varchar(500),
	`FLD_Hieuqua2` float NOT NULL,
	`FLD_ChuThich4` varchar(500)
);
--> statement-breakpoint
CREATE TABLE `TBL_RebornSettings` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`Reborn_Times` int NOT NULL,
	`Reborn_Level` int NOT NULL,
	`Reborn_Level_Down` int NOT NULL,
	`Item_Request` varchar(500),
	`Bonus_HP` int NOT NULL,
	`Bonus_ATK` int NOT NULL,
	`Bonus_DF` int NOT NULL,
	`Bonus_WX` int NOT NULL,
	`Bonus_Gold` int NOT NULL,
	`Bonus_Cash` int NOT NULL,
	`Bonus_VoHoang` int NOT NULL,
	`Item_Rewards` varchar(500)
);
--> statement-breakpoint
CREATE TABLE `TBL_SPIN` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_ID` int NOT NULL,
	`FLD_ITEM_NAME` varchar(50),
	`FLD_PP1` int NOT NULL,
	`FLD_PP2` int NOT NULL,
	`FLD_INFO` text,
	`FLD_SHOW` varchar(50),
	`FLD_SPIN_TYPE` int NOT NULL,
	`FLD_ITEM_TYPE` int NOT NULL,
	`FLD_MAGIC0_MIN` int NOT NULL,
	`FLD_MAGIC0_MAX` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_StoreOnline` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_NAME` varchar(50),
	`FLD_ITEM` varbinary(8000),
	`FLD_ITEM_STR` longtext
);
--> statement-breakpoint
CREATE TABLE `TBL_SuDoSoLieu` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_TNAME` varchar(50),
	`FLD_INDEX` int,
	`FLD_SNAME` varchar(50),
	`FLD_TLEVEL` int,
	`FLD_STLEVEL` int NOT NULL,
	`FLD_STYHD` int NOT NULL,
	`FLD_STWG1` int NOT NULL,
	`FLD_STWG2` int NOT NULL,
	`FLD_STWG3` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_TayLuyenVatPham_ThuocTinh` (
	`Id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_Name` varchar(100),
	`FLD_Option` int NOT NULL,
	`FLD_Line` int NOT NULL,
	`FLD_PP` int NOT NULL,
	`FLD_NguyenLieuID` int NOT NULL,
	`FLD_TayLuyen_Type` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_ThienPhu` (
	`ID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_NAME` varchar(50),
	`FLD_TP_CongLuc_LV` int NOT NULL,
	`FLD_TP_PhongNgu_LV` int NOT NULL,
	`FLD_TP_CLVC_LV` int NOT NULL,
	`FLD_TP_ULPT_LV` int NOT NULL,
	`FLD_TP_SinhMenh_LV` int NOT NULL,
	`FLD_TP_NoiCong_LV` int NOT NULL,
	`FLD_TP_NeTranh_LV` int NOT NULL,
	`FLD_TP_ChinhXac_LV` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_DROP` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_LEVEL1` int,
	`FLD_LEVEL2` int NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_NAME` varchar(50),
	`FLD_PP` int NOT NULL,
	`FLD_MAGIC0` int NOT NULL,
	`FLD_MAGIC1` int NOT NULL,
	`FLD_MAGIC2` int NOT NULL,
	`FLD_MAGIC3` int NOT NULL,
	`FLD_MAGIC4` int NOT NULL,
	`FLD_SoCapPhuHon` int NOT NULL,
	`FLD_TrungCapPhuHon` int NOT NULL,
	`FLD_TienHoa` int NOT NULL,
	`FLD_KhoaLai` int NOT NULL,
	`FLD_SUNX` varchar(500),
	`CoMoThongBao` int,
	`FLD_TYPE` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_Guild` (
	`ID` int PRIMARY KEY NOT NULL,
	`G_Name` varchar(50),
	`G_Master` varchar(50),
	`G_Notice` varchar(60),
	`Leve` int,
	`ThanhDanh` int,
	`MonHuy` varbinary(800),
	`MonPhucWord` int,
	`MonPhucMauSac` int,
	`BangPhaiVoHuan` int,
	`Thang` int,
	`Thua` int,
	`Hoa` int,
	`MonPhaiTaiSan` varchar(50),
	`BangPhaiCongHien` int NOT NULL,
	`BangPhaiTaiNguyen` int NOT NULL,
	`BangPhaiTroCap` varchar(500),
	`KichHoatPhoBan` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_GuildMember` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(50),
	`G_Name` varchar(50),
	`Leve` int,
	`FLD_LEVEL` int,
	`FLD_JoinTime` timestamp NOT NULL,
	`FLD_LastDonateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`FLD_Donate` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_ITEM` (
	`FLD_PID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_TayLuyen_Type` int NOT NULL,
	`FLD_NAME` varchar(200),
	`FLD_ITEMGROUP` varchar(50),
	`FLD_RESIDE1` int NOT NULL,
	`FLD_RESIDE2` int NOT NULL,
	`FLD_SEX` int NOT NULL,
	`FLD_LEVEL` int NOT NULL,
	`FLD_UP_LEVEL` int NOT NULL,
	`FLD_RECYCLE_MONEY` int NOT NULL,
	`FLD_SALE_MONEY` int NOT NULL,
	`FLD_QUESTITEM` int NOT NULL,
	`FLD_NJ` int NOT NULL,
	`FLD_DF` int NOT NULL,
	`FLD_AT1` int NOT NULL,
	`FLD_AT2` int NOT NULL,
	`FLD_AP` int NOT NULL,
	`FLD_JOB_LEVEL` int NOT NULL,
	`FLD_ZX` int NOT NULL,
	`FLD_EL` int NOT NULL,
	`FLD_WX` int NOT NULL,
	`FLD_WXJD` int NOT NULL,
	`FLD_MONEY` int NOT NULL,
	`FLD_WEIGHT` int NOT NULL,
	`FLD_TYPE` int NOT NULL,
	`FLD_NEED_MONEY` int NOT NULL,
	`FLD_NEED_FIGHTEXP` int NOT NULL,
	`FLD_MAGIC1` int NOT NULL,
	`FLD_MAGIC2` int NOT NULL,
	`FLD_MAGIC3` int NOT NULL,
	`FLD_MAGIC4` int NOT NULL,
	`FLD_MAGIC5` int NOT NULL,
	`FLD_SIDE` int NOT NULL,
	`FLD_SELL_TYPE` int NOT NULL,
	`FLD_LOCK` int NOT NULL,
	`FLD_SERIES` int NOT NULL,
	`FLD_INTEGRATION` int NOT NULL,
	`FLD_DES` varchar(2000),
	`FLD_HEAD_WEAR` int NOT NULL,
	`FLD_SHIELD` int NOT NULL,
	`FLD_CJL` int NOT NULL,
	`FLD_CHAN` int NOT NULL,
	`FLD_BS` int NOT NULL,
	`FLD_PetNameType` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_KONGFU` (
	`FLD_PID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(50),
	`FLD_SOURCE_AT` int NOT NULL,
	`FLD_AT` int,
	`FLD_MP` int,
	`FLD_LEVEL` int,
	`FLD_NEEDEXP` int,
	`FLD_JOB` int,
	`FLD_ZX` int,
	`FLD_JOBLEVEL` int,
	`FLD_TYPE` int,
	`FLD_EFFERT` int,
	`FLD_INDEX` int,
	`FLD_CongKichSoLuong` int,
	`FLD_VoCongLoaiHinh` int,
	`FLD_MoiCapNguyHai` varchar(50),
	`FLD_MoiCapThemNguyHai` int,
	`FLD_MoiCapThemMP` int,
	`FLD_MoiCapThemLichLuyen` int,
	`FLD_MoiCapThemTuLuyenDangCap` int,
	`FLD_MoiCapVoCongDiemSo` int,
	`FLD_VoCongToiCaoDangCap` int,
	`FLD_TIME` int,
	`FLD_DEATHTIME` int,
	`FLD_CDTIME` int,
	`Time_Animation` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_MAP` (
	`FLD_MID` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(50),
	`FLD_FILE` varchar(50),
	`X` float,
	`Y` float
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_MONSTER` (
	`FLD_PID` int PRIMARY KEY NOT NULL,
	`FLD_NAME` varchar(200),
	`FLD_LEVEL` int NOT NULL,
	`FLD_HP` int NOT NULL,
	`FLD_AT` int NOT NULL,
	`FLD_DF` int NOT NULL,
	`FLD_EXP` int NOT NULL,
	`FLD_BOSS` int NOT NULL,
	`FLD_AUTO` int NOT NULL,
	`FLD_NPC` int NOT NULL,
	`FLD_QUEST` int NOT NULL,
	`FLD_QUESTID` int NOT NULL,
	`FLD_STAGES` int NOT NULL,
	`FLD_QUESTITEM` int NOT NULL,
	`FLD_PP` int NOT NULL,
	`FLD_GOLD` int NOT NULL,
	`FLD_Accuracy` int NOT NULL,
	`FLD_Evasion` int NOT NULL,
	`FLD_FreeDrop` int NOT NULL,
	CONSTRAINT `FLD_PID` UNIQUE(`FLD_PID`)
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_NPC` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int,
	`FLD_X` float,
	`FLD_Z` float,
	`FLD_Y` float,
	`FLD_FACE0` float,
	`FLD_FACE` float,
	`FLD_MID` int,
	`FLD_NAME` varchar(200),
	`FLD_HP` bigint,
	`FLD_AT` bigint,
	`FLD_DF` bigint,
	`FLD_NPC` int,
	`FLD_NEWTIME` int,
	`FLD_LEVEL` int,
	`FLD_EXP` int,
	`FLD_AUTO` int NOT NULL,
	`FLD_BOSS` int NOT NULL,
	`FLD_GOLD` int NOT NULL,
	`FLD_Accuracy` int NOT NULL,
	`FLD_Evasion` int NOT NULL,
	`FLD_QItemDrop` int NOT NULL,
	`FLD_QDropPP` int NOT NULL,
	`FLD_FreeDrop` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_OPEN` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_PID` int NOT NULL,
	`FLD_PIDX` int NOT NULL,
	`FLD_NUMBER` int,
	`FLD_NAME` varchar(50),
	`FLD_NAMEX` varchar(50),
	`FLD_PP` int NOT NULL,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_MAGIC5` int,
	`FLD_FJ_ThucTinh` int,
	`FLD_FJ_TienHoa` int,
	`FLD_FJ_TrungCapPhuHon` int,
	`FLD_BD` int,
	`FLD_DAYS` int,
	`CoMoThongBao` int,
	`FLD_RandomOption` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_PublicWarehouse` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_MONEY` varchar(50),
	`FLD_ITEM` varbinary(4380),
	`FLD_ITIME` varbinary(50),
	`FLD_ZBVER` int
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_SELL` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_NPCNAME` varchar(50),
	`FLD_NID` bigint,
	`FLD_INDEX` int,
	`FLD_PID` bigint,
	`FLD_ITEMNAME` varchar(100),
	`FLD_MONEY` bigint,
	`FLD_SELL` bigint NOT NULL,
	`FLD_MAGIC0` int,
	`FLD_MAGIC1` int,
	`FLD_MAGIC2` int,
	`FLD_MAGIC3` int,
	`FLD_MAGIC4` int,
	`FLD_CanVoHuan` int
);
--> statement-breakpoint
CREATE TABLE `TBL_XWWL_Warehouse` (
	`ID` int PRIMARY KEY NOT NULL,
	`FLD_ID` varchar(50),
	`FLD_NAME` varchar(50),
	`FLD_MONEY` varchar(50),
	`FLD_ITEM` varbinary(4380)
);

*/