import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Hadian Nelci Contact" body="NIM: 2341728025 | Phone: 082174945496 | E-mail: hadiannelvi82@gmail.com"/>
        </Section2>
    );
}