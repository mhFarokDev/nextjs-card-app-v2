import faruk from "@/public/images/faruk.jpg"
import Image from "next/image"
export const metadata = {
  title : "Card App by nextjs | Study reactjs, nextjs",
  description : "This Is home page of card App."
}

export default function Home() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="hero-section">
            <Image src={faruk}/>
          </div>
        </div>
      </section>
    </main>
  )
}
