export default function Home() {
  const currentTime = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit", 
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{
        fontSize: "4rem",
        marginBottom: "1rem",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
      }}>
        🎉 コンカフェなう
      </h1>
      
      <p style={{
        fontSize: "1.5rem",
        marginBottom: "2rem",
        opacity: 0.9
      }}>
        デプロイ成功！アプリケーションが正常に動作しています
      </p>
      
      <div style={{
        background: "rgba(255,255,255,0.15)",
        padding: "2rem",
        borderRadius: "15px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <p style={{
          margin: "0 0 1rem 0",
          fontSize: "1.2rem",
          fontWeight: "bold"
        }}>
          ✅ デプロイメント成功
        </p>
        <p style={{
          margin: "0 0 1rem 0",
          fontSize: "1rem"
        }}>
          現在時刻: {currentTime}
        </p>
        <p style={{
          margin: 0,
          fontSize: "0.9rem",
          opacity: 0.8
        }}>
          Powered by Next.js + React + Vercel
        </p>
      </div>
      
      <div style={{
        marginTop: "2rem",
        fontSize: "0.8rem",
        opacity: 0.7
      }}>
        秋葉原コンカツカフェ即入マッチングサービス
      </div>
    </div>
  )
}
