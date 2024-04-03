"use client"

import MyApp from "@/app/components/atoms/myapp"
import ProfilePage from "@/app/components/templates/profile_page"

export default function Profile() {
    return <MyApp Component={ProfilePage} pageProps={undefined}/>
}