import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function AboutPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>About Me</Heading>
            <Post title="My name is Hadian Nelvi" body="For your information, my NIM is 2341728025"/>
        </Section2>
    );
}