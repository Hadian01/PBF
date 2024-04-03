"use client"

import MyApp from "@/app/components/atoms/myapp"
import ContactPage from "@/app/components/templates/contact_page"

export default function Contacts() {
    return <MyApp Component={ContactPage} pageProps={undefined}/>
}