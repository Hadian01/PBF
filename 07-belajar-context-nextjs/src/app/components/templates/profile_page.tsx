import Heading from "../atoms/heading";
import Post from "../atoms/post";
import AllPosts from "../organisms/allpost";
import Section2 from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profile Saya</Heading>
            <Post
                title="Hello traveller!"
                body="Baca tentang petualangan saya"
            />
            <AllPosts />
        </Section2>
    )
}