// ============================================================
//  影片連結（由 site_writeback.py 自動回寫，也可以手動改）
//  youtube ：影片 ID 或網址      short  ：直式重點版（Shorts）ID
//  duration：片長 "6:35"          sections：各小節開始秒數（數量＝小節數），null 用 content.js 預估
//  noVoice ：無旁白版 ID          mp4    ：自架 MP4（沒有 YouTube 時才用）
// ============================================================

window.SERIES_PLAYLIST = ""; // 系列播放清單網址（公開或不公開後才填）
window.SERIES_TRAILER = "";  // 系列前導片 ID（延續型系列）

window.VIDEO_LINKS = {
  u01: { youtube: "fD_j9Svl48U", mp4: "", duration: "16:26", sections: [0, 78.6, 158.6, 260.1, 335.2, 454.1, 663.3, 808, 902.5], noVoice: "", short: "" },
  u02: { youtube: "4pBBMUkjQxg", mp4: "", duration: "15:49", sections: [0, 79, 173.1, 263.4, 422.9, 537.1, 670.4, 809.5, 865.1], noVoice: "", short: "" },
  u03: { youtube: "Gss2nsfdCBg", mp4: "", duration: "16:01", sections: [0, 64.9, 214.2, 313.7, 404.8, 492.5, 668, 761, 905.8], noVoice: "", short: "" },
  u04: { youtube: "QGYmnez-nL8", mp4: "", duration: "15:52", sections: [0, 67.2, 172.7, 280.6, 480.6, 576.1, 656.7, 790, 895.1], noVoice: "", short: "" },
  u05: { youtube: "7Cn-NOzfqXA", mp4: "", duration: "15:12", sections: [0, 69.1, 138.1, 269, 412.5, 499.7, 623.4, 728.4, 853.7], noVoice: "", short: "" },
  u06: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u07: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u08: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u09: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u10: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u11: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u12: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u13: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u14: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u15: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" },
  u16: { youtube: "", mp4: "", duration: "", sections: null, noVoice: "", short: "" }
};
