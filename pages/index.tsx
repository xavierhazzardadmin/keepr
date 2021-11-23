import type { NextPage } from "next";
import Card from "../components/Card";

const Home: NextPage = () => {
    return (
        <>
            <Card
                lessonNum={1}
                lessonTitle="An amazing lesson"
                lessonDesc="The best lesson in the world bruh!"
            />
        </>
    );
};

export default Home;
