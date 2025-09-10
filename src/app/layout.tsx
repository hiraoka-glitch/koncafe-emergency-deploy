import { Metadata } from "next"

export const metadata: Metadata = {
  title: "🎉 コンカフェなう - デプロイ成功！",
  description: "秋葉原コンセプトカフェ即入マッチングサービス",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
