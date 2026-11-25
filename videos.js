// ============================================================
//  影片連結（由 site_writeback.py 自動回寫，也可以手動改）
//  youtube ：影片 ID 或網址      short  ：直式重點版（Shorts）ID
//  duration：片長 "6:35"          sections：各小節開始秒數（數量＝小節數），null 用 content.js 預估
//  noVoice ：無旁白版 ID          mp4    ：自架 MP4（沒有 YouTube 時才用）
// ============================================================

window.SERIES_PLAYLIST = "https://www.youtube.com/playlist?list=PLLZHjORIjZG4"; // 系列播放清單網址（公開或不公開後才填）
window.SERIES_TRAILER = "";  // 系列前導片 ID（延續型系列）

window.VIDEO_LINKS = {
  u01: { youtube: "fD_j9Svl48U", mp4: "", duration: "16:26", sections: [0, 78.6, 158.6, 260.1, 335.2, 454.1, 663.3, 808, 902.5], noVoice: "", short: "" },
  u02: { youtube: "4pBBMUkjQxg", mp4: "", duration: "15:49", sections: [0, 79, 173.1, 263.4, 422.9, 537.1, 670.4, 809.5, 865.1], noVoice: "", short: "" },
  u03: { youtube: "Gss2nsfdCBg", mp4: "", duration: "16:01", sections: [0, 64.9, 214.2, 313.7, 404.8, 492.5, 668, 761, 905.8], noVoice: "", short: "" },
  u04: { youtube: "QGYmnez-nL8", mp4: "", duration: "15:52", sections: [0, 67.2, 172.7, 280.6, 480.6, 576.1, 656.7, 790, 895.1], noVoice: "", short: "" },
  u05: { youtube: "7Cn-NOzfqXA", mp4: "", duration: "15:12", sections: [0, 69.1, 138.1, 269, 412.5, 499.7, 623.4, 728.4, 853.7], noVoice: "", short: "" },
  u06: { youtube: "_EIBApydilg", mp4: "", duration: "943.23", sections: [0, 63.5, 228.3, 344.4, 423.9, 518, 634.1, 754, 881.5], noVoice: "", short: "" },
  u07: { youtube: "MezPkusx_8I", mp4: "", duration: "15:55", sections: [0, 65.7, 201.5, 273.7, 392.7, 515.2, 652.1, 762.7, 897.6], noVoice: "", short: "" },
  u08: { youtube: "u8h_k3HDdJw", mp4: "", duration: "15:55", sections: [0, 67.8, 200.7, 335.4, 459.1, 618.6, 730.3, 814.4, 898.1], noVoice: "", short: "" },
  u09: { youtube: "rAPFC_b5Lp0", mp4: "", duration: "15:30", sections: [0, 66.9, 244.4, 345.7, 443.3, 545.9, 658.9, 800.2, 877.2], noVoice: "", short: "" },
  u10: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u11: { youtube: "TzpSine1KXA", mp4: "", duration: "16:11", sections: [0, 74.9, 182, 256.4, 383.9, 517.1, 669.1, 821.8, 913.2], noVoice: "", short: "" },
  u12: { youtube: "mYz4DBBBovA", mp4: "", duration: "15:47", sections: [0, 77.7, 164, 255.5, 436.2, 558.5, 688.1, 819, 887.4], noVoice: "", short: "" },
  u13: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u14: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u15: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u16: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" }
};
