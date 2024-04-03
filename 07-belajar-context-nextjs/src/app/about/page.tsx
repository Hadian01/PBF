"use client"

import MyApp from "@/app/components/atoms/myapp"
import AboutPage from "@/app/components/templates/about_page"

export default function About() {
    return <MyApp Component={AboutPage} pageProps={undefined}/>
}