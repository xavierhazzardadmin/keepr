import type { NextPage } from "next";
import Card from "../components/Card";
import styles from "../styles/indexMain.module.css";

const Home: NextPage = () => {
    return (
        <main
            className={
                styles["main-container"]
            }
        >
            <Card
                lessonNum={1}
                lessonTitle="An amazing lesson"
                lessonDesc="The best lesson in the world bruh!"
            />
        </main>
    );
};

export default Home;
