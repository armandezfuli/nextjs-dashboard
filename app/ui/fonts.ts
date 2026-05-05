import { Inter, Lusitana } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"] })
export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
})

export const parastoo = localFont({
    src: [
        {
            path: "../../public/fonts/Parastoo-FD.woff",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-iransans",
})
